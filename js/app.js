(function () {
  "use strict";

  var BOOK = window.BOOK;
  var STORE_KEY = "gnocchi-sin-reglas";
  var MIN = 1, MAX = 40;

  /* ---------- persisted state ---------- */
  var state = { lang: "both", global: null, servings: {} };
  try {
    var saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (saved) {
      state.lang = saved.lang || state.lang;
      state.global = saved.global || null;
      state.servings = saved.servings || {};
    }
  } catch (e) { /* storage unavailable */ }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c];
    });
  }

  // "[[600]]", "[[150-180]]", "[[2.5d]]" -> scalable quantity spans
  var QTY = /\[\[([\d.]+)(?:-([\d.]+))?(d?)\]\]/g;
  function rich(s) {
    return esc(s).replace(QTY, function (_, a, b, d) {
      return '<span class="q" data-a="' + a + '"' + (b ? ' data-b="' + b + '"' : "") + (d ? ' data-d="1"' : "") + "></span>";
    });
  }

  function pair(p, cls, tag) {
    tag = tag || "div";
    return "<" + tag + ' class="pair' + (cls ? " " + cls : "") + '">' +
      '<div class="es" lang="es">' + rich(p[0]) + "</div>" +
      '<div class="en" lang="en">' + rich(p[1]) + "</div>" +
      "</" + tag + ">";
  }

  var FRAC = { 0.25: "¼", 0.5: "½", 0.75: "¾" };

  function round(v, decimals) {
    if (decimals) {
      if (v >= 10) return Math.round(v);
      return Math.max(0.1, Math.round(v * 10) / 10);
    }
    if (v >= 100) return Math.round(v / 5) * 5;
    if (v >= 20) return Math.round(v);
    if (v >= 5) return Math.round(v * 2) / 2;
    return Math.max(0.25, Math.round(v * 4) / 4);
  }

  function show(v, lang, decimals) {
    if (decimals || v >= 20) {
      return v.toLocaleString(lang === "es" ? "es-ES" : "en-GB", { maximumFractionDigits: 1 });
    }
    var whole = Math.floor(v), frac = +(v - whole).toFixed(2);
    if (!frac) return String(whole);
    return (whole ? whole + " " : "") + FRAC[frac];
  }

  function fmtQty(el, factor, lang) {
    var d = !!el.dataset.d;
    var a = round(+el.dataset.a * factor, d);
    if (el.dataset.b === undefined) return show(a, lang, d);
    var b = round(+el.dataset.b * factor, d);
    return a === b ? show(a, lang, d) : show(a, lang, d) + "–" + show(b, lang, d);
  }

  /* ---------- rendering ---------- */
  function renderBody(body) {
    return (body || []).map(function (item) {
      if (Array.isArray(item)) return pair(item, "para");
      if (item.h) return pair(item.h, "subhead");
      if (item.quote) return pair(item.quote, "quote");
      if (item.sign) return pair(item.sign, "sign");
      if (item.sep) return '<div class="sep" aria-hidden="true">* * *</div>';
      if (item.links) {
        return '<p class="links"><a href="https://www.instagram.com/brera_restaurant/" rel="noopener">Instagram: @brera_restaurant</a>' +
          '<a href="https://www.brerarestaurantbarcelona.com" rel="noopener">www.brerarestaurantbarcelona.com</a></p>';
      }
      return "";
    }).join("");
  }

  function servesLabel(r) {
    return r.servesLabel ? r.servesLabel : [String(r.serves), String(r.serves)];
  }

  function renderRecipe(r) {
    var h = '<article class="recipe" id="' + r.id + '" data-base="' + r.serves + '">';
    if (r.img) h += '<figure class="photo"><img src="' + r.img + '" alt="' + esc(r.title[0]) + '" loading="lazy"></figure>';
    h += '<header class="recipe-head">';
    if (r.n) h += '<div class="num">' + r.n + "</div>";
    if (r.season) h += pair(r.season, "season");
    h += pair(r.title, "title", "h3");
    h += "</header>";
    h += renderBody(r.lead);

    var base = servesLabel(r);
    h += '<section class="ingredients">';
    h += '<div class="serve-row">' +
      '<div class="pair label">' +
        '<div class="es" lang="es">Ingredientes' + (r.ingHead ? " — " + esc(r.ingHead[0]) : "") + "</div>" +
        '<div class="en" lang="en">Ingredients' + (r.ingHead ? " — " + esc(r.ingHead[1]) : "") + "</div>" +
      "</div>" +
      '<div class="stepper" role="group" aria-label="Personas / Servings">' +
        '<button type="button" data-step="-1" aria-label="−">−</button>' +
        '<output class="servings"></output>' +
        '<button type="button" data-step="1" aria-label="+">+</button>' +
        '<span class="stepper-label"><span class="es" lang="es">personas</span><span class="en" lang="en">servings</span></span>' +
        '<button type="button" class="reset" data-reset hidden title="Volver a la receta original / Back to the original recipe">↺ original: ' + esc(base[0]) + "</button>" +
      "</div></div>";
    h += '<ul class="ing-list">' + r.ing.map(function (p) { return pair(p, "ing", "li"); }).join("") + "</ul>";
    h += "</section>";

    h += '<section class="method">' + pair(["Procedimiento", "Method"], "label");
    h += '<ol class="steps">' + r.steps.map(function (p, i) {
      return '<li class="pair step">' +
        '<div class="es" lang="es"><span class="step-n">' + (i + 1) + "</span>" + rich(p[0]) + "</div>" +
        '<div class="en" lang="en"><span class="step-n">' + (i + 1) + "</span>" + rich(p[1]) + "</div></li>";
    }).join("") + "</ol></section>";

    if (r.note) {
      h += '<aside class="note">' +
        '<div class="pair"><div class="es" lang="es"><strong>🔪 Nota del chef</strong> — ' + rich(r.note[0]) + "</div>" +
        '<div class="en" lang="en"><strong>🔪 Chef\'s note</strong> — ' + rich(r.note[1]) + "</div></div></aside>";
    }
    (r.after || []).forEach(function (a) {
      h += '<aside class="after">' + pair(a.h, "subhead") + renderBody(a.body) + "</aside>";
    });
    return h + "</article>";
  }

  function renderSection(s) {
    var h = '<section class="section-open" id="' + s.id + '">';
    if (s.img) h += '<figure class="photo wide"><img src="' + s.img + '" alt="" loading="lazy"></figure>';
    if (s.num) h += pair(["Sección " + s.num, "Section " + s.num], "kicker");
    h += pair(s.title, "section-title", "h2");
    if (s.subtitle) h += pair(s.subtitle, "section-sub");
    h += renderBody(s.body);
    return h + "</section>";
  }

  function renderText(t) {
    var h = '<section class="chapter' + (t.continues ? " continues" : "") + '" id="' + t.id + '">';
    if (t.title) h += pair(t.title, "chapter-title", "h2");
    if (t.subtitle) h += pair(t.subtitle, "section-sub");
    h += renderBody(t.body);
    return h + "</section>";
  }

  function renderCover() {
    return '<section class="cover" id="top">' +
      '<figure class="cover-img"><img src="' + BOOK.cover + '" alt="Mirko Italiano"></figure>' +
      '<div class="cover-text">' +
        pair(BOOK.title, "book-title", "h1") +
        pair(BOOK.subtitle, "book-sub") +
        pair(BOOK.tagline, "quote") +
        pair(BOOK.author, "author") +
      "</div></section>";
  }

  function renderToc() {
    var h = "<ol>";
    var open = false;
    BOOK.chapters.forEach(function (c) {
      if (c.continues) return;
      if (c.kind === "section") {
        if (open) h += "</ol></li>";
        h += '<li class="toc-sec"><a href="#' + c.id + '">' + pair(c.num ? [c.num + ". " + c.title[0], c.num + ". " + c.title[1]] : c.title, "", "span") + "</a><ol>";
        open = true;
      } else {
        var t = c.n ? [c.n + ". " + c.title[0], c.n + ". " + c.title[1]] : c.title;
        h += '<li><a href="#' + c.id + '">' + pair(t, "", "span") + "</a></li>";
      }
    });
    if (open) h += "</ol></li>";
    return h + "</ol>";
  }

  /* ---------- servings ---------- */
  function servingsFor(el) {
    var id = el.id;
    if (state.servings[id]) return state.servings[id];
    if (state.global) return state.global;
    return +el.dataset.base;
  }

  function updateRecipe(el) {
    var base = +el.dataset.base;
    var n = servingsFor(el);
    var factor = n / base;
    el.querySelector("output.servings").textContent = n;
    el.querySelector("[data-reset]").hidden = n === base;
    el.classList.toggle("scaled", n !== base);
    el.querySelectorAll(".q").forEach(function (q) {
      var lang = q.closest("[lang]").getAttribute("lang");
      q.textContent = fmtQty(q, factor, lang);
    });
  }

  function updateAll() {
    document.querySelectorAll("article.recipe").forEach(updateRecipe);
    document.getElementById("global-servings").textContent = state.global || 4;
  }

  function setLang(lang) {
    state.lang = lang;
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang === "en" ? "en" : "es";
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
    });
    save();
  }

  /* ---------- boot ---------- */
  var main = document.getElementById("book");
  main.innerHTML = renderCover() + BOOK.chapters.map(function (c) {
    if (c.kind === "recipe") return renderRecipe(c);
    if (c.kind === "section") return renderSection(c);
    return renderText(c);
  }).join("");

  var toc = document.getElementById("toc");
  var tocBtn = document.getElementById("toc-btn");
  toc.innerHTML = renderToc();
  function toggleToc(open) {
    toc.hidden = !open;
    tocBtn.setAttribute("aria-expanded", String(open));
  }
  tocBtn.addEventListener("click", function () { toggleToc(toc.hidden); });
  toc.addEventListener("click", function (e) { if (e.target.closest("a")) toggleToc(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggleToc(false); });

  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.setLang); });
  });

  document.querySelectorAll("[data-global]").forEach(function (b) {
    b.addEventListener("click", function () {
      var cur = state.global || 4;
      state.global = Math.min(MAX, Math.max(MIN, cur + +b.dataset.global));
      state.servings = {};
      save();
      updateAll();
    });
  });

  main.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    var art = btn.closest("article.recipe");
    if (!art) return;
    if (btn.hasAttribute("data-reset")) {
      state.servings[art.id] = +art.dataset.base;
    } else if (btn.dataset.step) {
      state.servings[art.id] = Math.min(MAX, Math.max(MIN, servingsFor(art) + +btn.dataset.step));
    } else {
      return;
    }
    save();
    updateRecipe(art);
  });

  setLang(state.lang);
  updateAll();
})();
