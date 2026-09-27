/*
 * Gnocchi sin reglas / Gnocchi Without Rules — Mirko Italiano
 *
 * Every text is a pair: [español, English].
 * Quantities that should scale with the number of servings are written
 * as [[n]] or [[min-max]] (e.g. [[150-180]]). Add a trailing "d" to show
 * decimals instead of fractions (e.g. [[2.5d]]). Anything not in [[ ]]
 * (times, temperatures, sizes) is left as is.
 */
window.BOOK = {
  title: ["Gnocchi sin reglas", "Gnocchi Without Rules"],
  subtitle: ["Las recetas del único Gnocchi Bar de Barcelona", "Recipes from Barcelona's only Gnocchi Bar"],
  tagline: ["No los mejores del mundo. Ciertamente los mejores en Barcelona.", "Not the best in the world. Certainly the best in Barcelona."],
  author: ["por Mirko Italiano", "by Mirko Italiano"],
  cover: "img/cover.jpg",

  chapters: [
    /* ---------------------------------------------------------------- */
    {
      kind: "text", id: "introduccion",
      title: ["Introducción", "Introduction"],
      body: [
        ["Llegué a Barcelona a finales de 2014. No con un restaurante bajo el brazo — con una maleta y las ganas de aprender. Durante años trabajé en cocinas ajenas, y la más importante fue la del restaurante Meneghina, en el Born, donde fui jefe de cocina.",
         "I arrived in Barcelona at the end of 2014. Not with a restaurant under my arm — with a suitcase and a hunger to learn. For years I worked in other people's kitchens, and the most important was at Meneghina, in the Born, where I was head chef."],
        ["Pero llegó un momento en que necesitaba cocinar con mis propias reglas. Así que abrí el Brera Gnocchi Bar. Finales de 2018, barrio de Hostafrancs. Una locura, según todos. Un bar dedicado exclusivamente a los gnocchi — hechos a mano, cada día, con las manos que ves en la portada de este libro.",
         "But there came a moment when I needed to cook by my own rules. So I opened Brera Gnocchi Bar. End of 2018, in the Hostafrancs neighbourhood. Madness, according to everyone. A bar devoted entirely to gnocchi — made by hand, every day, with the hands you see on the cover of this book."],
        { sep: true },
        { quote: ["No los mejores del mundo. Ciertamente los mejores en Barcelona.", "Not the best in the world. Certainly the best in Barcelona."] },
        { sep: true },
        { sign: ["— Mirko", "— Mirko"] }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      kind: "text", id: "como-usar",
      title: ["Cómo usar este libro", "How to use this book"],
      body: [
        ["Tres cosas antes de empezar.", "Three things before you start."],
        { h: ["Primero: el impasto base", "First: the base impasto"] },
        ["Aquí tienes una receta base de gnocchi de patata — punto de partida para quien empieza desde cero. Es una receta honesta y funcional: patatas harinosas, harina 00, sin huevo. Trabaja bien, da un resultado suave y neutro que acepta cualquier salsa.",
         "Here is a basic potato gnocchi recipe — a starting point for anyone beginning from scratch. It's an honest, functional recipe: floury potatoes, 00 flour, no egg. It works well and gives a soft, neutral result that goes with any sauce."]
      ]
    },
    {
      kind: "recipe", id: "masa-base",
      title: ["La masa base de patatas", "The basic potato dough"],
      serves: 4,
      ing: [
        ["[[600]] g de patatas harinosas (variedad Monalisa o similar)", "[[600]] g floury potatoes (Monalisa or similar)"],
        ["[[150-180]] g de harina 00 (empieza con menos, añade según necesidad)", "[[150-180]] g 00 flour (start with less, add as needed)"],
        ["Sal fina", "Fine salt"]
      ],
      steps: [
        ["Cuece las patatas enteras con piel en agua con sal durante 30–35 minutos, hasta que estén completamente blandas. Escúrrelas y pélalas en caliente.",
         "Boil the potatoes whole, skin on, in salted water for 30–35 minutes, until completely soft. Drain and peel them while hot."],
        ["Pásalas por el pasapurés inmediatamente — nunca por la batidora, o quedarán gomosas. Extiende el puré sobre una superficie limpia y deja que pierda el vapor durante 5–10 minutos.",
         "Pass them through the potato ricer immediately — never the blender, or they'll turn gummy. Spread the purée on a clean surface and let the steam escape for 5–10 minutes."],
        ["Forma un volcán con el puré, añade la sal y la harina poco a poco. Trabaja la masa con delicadeza, sin amasar de forma agresiva — solo hasta que se integre todo y no se pegue a las manos.",
         "Shape the purée into a volcano, add the salt and the flour little by little. Work the dough gently, without kneading aggressively — only until everything comes together and it no longer sticks to your hands."],
        ["Divide en porciones, forma los cilindros y corta los gnocchi a 2,5 cm. Enharina ligeramente la superficie de trabajo.",
         "Divide into portions, roll into logs and cut the gnocchi at 2.5 cm. Lightly flour the work surface."],
        ["Cuece en agua hirviendo con abundante sal. Están listos cuando suben a la superficie — sácalos 20–30 segundos después.",
         "Cook in boiling, generously salted water. They're ready when they rise to the surface — lift them out 20–30 seconds later."]
      ],
      note: ["Esta es la base. Mi receta real es diferente — y me la quedo. Pero con esta puedes hacer todo lo que encontrarás en este libro. El secreto más importante no está en los ingredientes: está en no trabajar demasiado la masa. Menos es más. Siempre.",
             "This is the base. My real recipe is different — and I'm keeping it. But with this one you can make everything you'll find in this book. The most important secret isn't in the ingredients: it's in not overworking the dough. Less is more. Always."]
    },
    {
      kind: "text", id: "como-usar-2", continues: true,
      body: [
        { h: ["Segundo", "Second"] },
        ["Los gnocchi no perdonan la prisa. Tómate el tiempo que merecen.", "Gnocchi don't forgive haste. Give them the time they deserve."],
        { h: ["Tercero", "Third"] },
        ["Cada receta tiene una Nota del chef al final. Léela. Es donde está el truco real.", "Every recipe ends with a Chef's note. Read it. That's where the real trick is."]
      ]
    },

    /* ================================================================ */
    {
      kind: "section", id: "seccion-1", num: 1, img: "img/impasto.jpg",
      title: ["El impasto", "The impasto"],
      subtitle: ["Cinco variantes para empezar", "Five variations to start with"]
    },
    {
      kind: "recipe", id: "boniato", n: 1,
      title: ["Gnocchi de boniato", "Sweet potato gnocchi"],
      lead: [
        ["Más dulces, más suaves, más color. El impasto que más sorprende a quienes lo prueban por primera vez.",
         "Sweeter, softer, more colour. The impasto that most surprises people trying it for the first time."],
        ["El boniato tiene más agua que la patata normal. Eso significa que necesitas más harina — pero no te pases, o se vuelven gomosos. El equilibrio es todo.",
         "Sweet potato holds more water than ordinary potato. That means you need more flour — but don't overdo it, or they turn gummy. Balance is everything."]
      ],
      serves: 4,
      ing: [
        ["[[600]] g de boniato", "[[600]] g sweet potato"],
        ["[[180-220]] g de harina 00 (empieza con [[180]], añade según necesidad)", "[[180-220]] g 00 flour (start with [[180]], add as needed)"],
        ["[[1]] yema de huevo", "[[1]] egg yolk"],
        ["Sal fina", "Fine salt"],
        ["Nuez moscada rallada", "Grated nutmeg"]
      ],
      steps: [
        ["Hornea los boniatos enteros a 200°C durante 45–50 minutos, hasta que estén completamente blandos. No los cuezas en agua — perderías sabor y absorberían demasiada humedad.",
         "Bake the sweet potatoes whole at 200°C for 45–50 minutes, until completely soft. Don't boil them — you'd lose flavour and they'd absorb too much moisture."],
        ["Pélalos en caliente y pásalos por el pasapurés inmediatamente. Extiende el puré sobre una superficie limpia y déjalo enfriar 10 minutos para que pierda vapor.",
         "Peel them while hot and pass them through the ricer immediately. Spread the purée on a clean surface and let it cool for 10 minutes so the steam escapes."],
        ["Forma un volcán con el puré, añade la yema de huevo en el centro, sal y nuez moscada. Incorpora la harina poco a poco, trabajando la masa con delicadeza hasta obtener una masa suave y no pegajosa.",
         "Shape the purée into a volcano, put the egg yolk in the centre with the salt and nutmeg. Work in the flour little by little, handling the dough gently until it is soft and not sticky."],
        ["Divide la masa en porciones, ruédalas formando cilindros de 2 cm de diámetro y corta los gnocchi a 2,5 cm.",
         "Divide the dough into portions, roll them into logs 2 cm in diameter and cut the gnocchi at 2.5 cm."],
        ["Cuécelos en agua con abundante sal. Están listos cuando suben a la superficie — 2 minutos máximo.",
         "Cook them in generously salted water. They're ready when they float to the surface — 2 minutes at most."]
      ],
      note: ["El boniato varía mucho según la variedad y la época del año. Si la masa te queda demasiado blanda, no entres en pánico y no añadas harina de golpe: añade una cucharada cada vez. Un gnocchi perfecto de boniato es ligeramente más blando que uno de patata. Combina muy bien con mantequilla tostada, salvia y un toque de parmesano — o con la crema de calabaza de la Sección 4.",
             "Sweet potato varies a lot with the variety and the time of year. If your dough is too soft, don't panic and don't dump in flour: add one spoonful at a time. A perfect sweet potato gnocchi is slightly softer than a potato one. It goes beautifully with browned butter, sage and a touch of Parmesan — or with the pumpkin cream from Section 4."]
    },
    {
      kind: "recipe", id: "remolacha", n: 2,
      title: ["Gnocchi de remolacha", "Beetroot gnocchi"],
      lead: [["Ese color rojo que para la mesa. La receta que más fotografían los clientes de Brera.",
              "That red that stops the table. The recipe Brera's customers photograph the most."]],
      serves: 4,
      ing: [
        ["[[400]] g de patatas harinosas cocidas y peladas", "[[400]] g floury potatoes, boiled and peeled"],
        ["[[150]] g de remolacha cocida (no en vinagre)", "[[150]] g cooked beetroot (not pickled)"],
        ["[[200-230]] g de harina 00", "[[200-230]] g 00 flour"],
        ["[[1]] yema de huevo", "[[1]] egg yolk"],
        ["Sal fina", "Fine salt"]
      ],
      steps: [
        ["Tritura la remolacha hasta obtener un puré liso y sin grumos. Pasa las patatas cocidas por el pasapurés.",
         "Blend the beetroot to a smooth, lump-free purée. Pass the cooked potatoes through the ricer."],
        ["Mezcla los dos purés en caliente. La mezcla tendrá más humedad que un impasto normal: es normal.",
         "Mix the two purées while hot. The mixture will be wetter than a normal impasto: that's expected."],
        ["Deja enfriar completamente antes de añadir la harina y la yema. Si trabajas la masa en caliente, absorberá demasiada harina y los gnocchi quedarán duros.",
         "Let it cool completely before adding the flour and yolk. If you work the dough hot, it will absorb too much flour and the gnocchi will be tough."],
        ["Incorpora la harina progresivamente hasta obtener una masa manejable. Forma los gnocchi con rapidez — la remolacha tiñe todo, incluidas las manos.",
         "Work in the flour gradually until the dough is manageable. Shape the gnocchi quickly — beetroot stains everything, your hands included."],
        ["Cuece en agua con sal abundante. El color se mantiene perfectamente en cocción.",
         "Cook in plenty of salted water. The colour holds perfectly during cooking."]
      ],
      note: ["Importante: en el Brera yo nunca hacía un impasto de remolacha propiamente dicho. Mi método era diferente — preparaba los gnocchi con mi receta secreta de siempre y, por separado, elaboraba una crema de remolacha. Durante el servicio, calentaba la crema en la sartén y escurría los gnocchi directamente dentro, dejando que se impregnaran del sabor y el color en el último momento. Esta variante del impasto es una alternativa para casa — válida y bonita, pero diferente a lo que salía de mi cocina en Brera.",
             "Important: at Brera I never actually made a beetroot impasto. My method was different — I made the gnocchi with my usual secret recipe and, separately, a beetroot cream. During service I heated the cream in the pan and drained the gnocchi straight into it, letting them take on the flavour and colour at the last moment. This impasto variation is an alternative for home — valid and beautiful, but different from what came out of my kitchen at Brera."]
    },
    {
      kind: "recipe", id: "calabaza", n: 3,
      title: ["Gnocchi de calabaza", "Pumpkin gnocchi"],
      lead: [["El otoño en un plato. Más delicados que los de patata, con un fondo dulce que funciona tanto con salsas saladas como con toques agridulces.",
              "Autumn on a plate. More delicate than potato gnocchi, with a sweet base that works with savoury sauces as well as sweet-and-sour touches."]],
      serves: 4,
      ing: [
        ["[[500]] g de calabaza (variedad butternut o hokkaido — no la de Halloween)", "[[500]] g pumpkin (butternut or hokkaido — not the Halloween kind)"],
        ["[[200]] g de patata harinosa cocida", "[[200]] g floury potato, boiled"],
        ["[[180-200]] g de harina 00", "[[180-200]] g 00 flour"],
        ["[[1]] yema de huevo", "[[1]] egg yolk"],
        ["Sal, nuez moscada", "Salt, nutmeg"]
      ],
      steps: [
        ["Corta la calabaza en trozos grandes, disponla en una bandeja de horno con un hilo de aceite y hornea a 190°C durante 35–40 minutos hasta que esté blanda y ligeramente caramelizada en los bordes.",
         "Cut the pumpkin into large pieces, lay them on a baking tray with a drizzle of oil and roast at 190°C for 35–40 minutes until soft and lightly caramelised at the edges."],
        ["Pasa la calabaza y la patata por el pasapurés juntas. El resultado debe ser un puré denso y seco — si hay demasiada agua, pasa el puré por un colador de tela durante 20 minutos.",
         "Pass the pumpkin and potato through the ricer together. The result should be a dense, dry purée — if there's too much water, let the purée drain in a cloth-lined sieve for 20 minutes."],
        ["Forma el impasto con harina y yema. La calabaza hokkaido da un color naranja más intenso y un sabor más pronunciado.",
         "Make the impasto with the flour and yolk. Hokkaido pumpkin gives a deeper orange colour and a more pronounced flavour."],
        ["Forma y cuece los gnocchi en agua salada.", "Shape the gnocchi and cook them in salted water."]
      ],
      note: ["El error más común con los gnocchi de calabaza es no secar suficientemente el puré. Si la masa te queda pegajosa e incontrolable, no es un problema de harina — es un problema de humedad. Hornear en lugar de cocer la calabaza al vapor es el truco que lo cambia todo.",
             "The most common mistake with pumpkin gnocchi is not drying the purée enough. If your dough is sticky and unmanageable, it's not a flour problem — it's a moisture problem. Roasting the pumpkin instead of steaming it is the trick that changes everything."]
    },
    {
      kind: "recipe", id: "espinacas", n: 4,
      title: ["Gnocchi verdes de espinacas", "Green spinach gnocchi"],
      lead: [["El verde más bonito de la mesa. Y una manera de hacer comer espinacas a quien dice que no le gustan.",
              "The prettiest green on the table. And a way to get spinach into people who say they don't like it."]],
      serves: 4,
      ing: [
        ["[[400]] g de patatas harinosas cocidas", "[[400]] g floury potatoes, boiled"],
        ["[[200]] g de espinacas frescas", "[[200]] g fresh spinach"],
        ["[[180-200]] g de harina 00", "[[180-200]] g 00 flour"],
        ["[[1]] yema de huevo", "[[1]] egg yolk"],
        ["Sal, nuez moscada", "Salt, nutmeg"]
      ],
      steps: [
        ["Escalda las espinacas en agua hirviendo con sal durante 2 minutos. Enfría inmediatamente en agua y hielo para fijar el color verde brillante.",
         "Blanch the spinach in boiling salted water for 2 minutes. Chill immediately in iced water to set the bright green colour."],
        ["Escurre muy bien las espinacas y pícalas finamente — casi hasta una pasta. Exprímelas con las manos hasta que no quede nada de agua.",
         "Drain the spinach very well and chop it finely — almost to a paste. Squeeze it with your hands until no water is left."],
        ["Mezcla el puré de patata con las espinacas picadas, añade la yema y la harina progresivamente.",
         "Mix the potato purée with the chopped spinach, then add the yolk and the flour gradually."],
        ["El impasto quedará más verde de lo que esperas en crudo — en cocción pierde un poco de intensidad, pero el resultado sigue siendo hermoso.",
         "Raw, the impasto will be greener than you expect — it loses a little intensity when cooked, but the result is still beautiful."]
      ],
      note: ["El secreto del color está en el choque térmico: agua hirviendo directamente a agua con hielo. Sin ese paso, las espinacas se oxidan y el color se vuelve verde grisáceo. Poco apetecible.",
             "The secret of the colour is the thermal shock: boiling water straight into iced water. Without that step the spinach oxidises and turns greyish green. Not very appetising."]
    },
    {
      kind: "recipe", id: "cacao", n: 5,
      title: ["Gnocchi al cacao", "Cocoa gnocchi"],
      lead: [["El más atrevido de la sección. Nació durante la pandemia, en casa, como experimento. Nunca llegó a la carta de Brera — una pena, como suele pasar con las cosas que no encuentran el momento adecuado. Pero el sabor es real, y por eso está aquí.",
              "The boldest in the section. It was born during the pandemic, at home, as an experiment. It never made it onto Brera's menu — a pity, as often happens with things that don't find their moment. But the flavour is real, and that's why it's here."]],
      serves: 4,
      ing: [
        ["[[500]] g de patatas harinosas cocidas", "[[500]] g floury potatoes, boiled"],
        ["[[180]] g de harina 00", "[[180]] g 00 flour"],
        ["[[20]] g de cacao amaro en polvo (calidad buena — se nota)", "[[20]] g unsweetened cocoa powder (good quality — you can tell)"],
        ["[[1]] yema de huevo", "[[1]] egg yolk"],
        ["Sal fina", "Fine salt"]
      ],
      steps: [
        ["Pasa las patatas por el pasapurés en caliente. Deja que pierdan el vapor.", "Pass the potatoes through the ricer while hot. Let the steam escape."],
        ["Tamiza juntos la harina y el cacao — es importante mezclarlos secos antes de incorporarlos a la patata para evitar grumos de cacao.",
         "Sift the flour and cocoa together — it's important to mix them dry before adding them to the potato, to avoid cocoa lumps."],
        ["Forma el impasto con la yema y la mezcla harina-cacao. El color será marrón oscuro, casi negro.",
         "Make the impasto with the yolk and the flour-cocoa mix. The colour will be dark brown, almost black."],
        ["Forma los gnocchi y cuécelos en agua con sal. El cacao no se disuelve en cocción — el color se mantiene.",
         "Shape the gnocchi and cook them in salted water. The cocoa doesn't dissolve during cooking — the colour holds."]
      ],
      note: ["Este impasto lo desarrollé durante el confinamiento, con tiempo por primera vez en años para experimentar sin presión. Nunca lo puse en el menú del Brera — quizás porque el restaurante tenía ya su identidad muy definida, quizás porque me reservé algo para después. Funciona extraordinariamente bien con crema de calabaza y con setas porcini. El amargor del cacao rompe la dulzura de la calabaza — es una de esas combinaciones que parecen raras hasta que las pruebas.",
             "I developed this impasto during lockdown, with time — for the first time in years — to experiment without pressure. I never put it on Brera's menu — maybe because the restaurant already had a very clear identity, maybe because I was saving something for later. It works extraordinarily well with pumpkin cream and with porcini mushrooms. The bitterness of the cocoa cuts through the sweetness of the pumpkin — one of those combinations that seem strange until you try them."]
    },

    /* ================================================================ */
    {
      kind: "section", id: "seccion-2", num: 2,
      title: ["Los clásicos de Brera", "The Brera classics"],
      subtitle: ["Las cuatro recetas que nunca salen de la carta", "The four recipes that never leave the menu"]
    },
    {
      kind: "recipe", id: "pomodoro", n: 6, img: "img/pomodoro.jpg",
      title: ["Gnocchi al pomodoro", "Gnocchi al pomodoro"],
      lead: [["La prueba del fuego. Si los gnocchi al pomodoro de un restaurante son buenos, el resto también lo es. Esta es mi versión — sin complicaciones, pero con la passata justa y el tiempo necesario.",
              "The acid test. If a restaurant's gnocchi al pomodoro are good, so is everything else. This is my version — no complications, but with the right passata and the time it needs."]],
      serves: 4,
      ing: [
        ["[[800]] g de passata de tomate de muy buena calidad", "[[800]] g very good quality tomato passata"],
        ["[[1]] cebolla mediana", "[[1]] medium onion"],
        ["Albahaca fresca picada", "Fresh basil, chopped"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Sal, pimienta negra, una pizca de azúcar", "Salt, black pepper, a pinch of sugar"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Pica finamente la cebolla y sofríela en aceite a fuego medio-bajo durante 10–12 minutos, hasta que esté completamente blanda y translúcida — sin que tome color.",
         "Finely chop the onion and sweat it in oil over medium-low heat for 10–12 minutes, until completely soft and translucent — without colouring."],
        ["Añade la passata, sal, pimienta y una pizca de azúcar. Fuego medio durante 20–25 minutos removiendo ocasionalmente hasta que la salsa se concentre.",
         "Add the passata, salt, pepper and a pinch of sugar. Cook over medium heat for 20–25 minutes, stirring occasionally, until the sauce thickens."],
        ["Fuera del fuego, añade la albahaca picada. La albahaca no se cocina — se añade al final para conservar el perfume.",
         "Off the heat, add the chopped basil. Basil isn't cooked — it goes in at the end to keep its perfume."],
        ["Cuece los gnocchi, escúrrelos reservando agua de cocción y sáltealos directamente en la salsa a fuego alto durante 1 minuto. Sirve inmediatamente.",
         "Cook the gnocchi, drain them keeping some cooking water, and toss them straight into the sauce over high heat for 1 minute. Serve immediately."]
      ],
      note: ["La calidad de la passata lo es todo en esta receta. Con una passata mediocre puedes cocinar 3 horas y el resultado seguirá siendo mediocre. Con una buena passata, 25 minutos son suficientes. Y no te saltes la cebolla: es lo que da dulzura y cuerpo a la salsa.",
             "The quality of the passata is everything in this recipe. With a mediocre passata you can cook for 3 hours and the result will still be mediocre. With a good passata, 25 minutes is enough. And don't skip the onion: it's what gives the sauce sweetness and body."]
    },
    {
      kind: "recipe", id: "carbonara", n: 7, img: "img/carbonara.jpg",
      title: ["Gnocchi a la carbonara", "Gnocchi carbonara"],
      lead: [["La carbonara es la receta italiana más maltratada del mundo. En Brera, la hacemos como debe hacerse: sin nata. Sin cebolla. Sin ajo. Solo huevo, guanciale, pecorino y pimienta negra. Punto.",
              "Carbonara is the most mistreated Italian recipe in the world. At Brera we make it the way it should be made: no cream. No onion. No garlic. Just egg, guanciale, pecorino and black pepper. Full stop."]],
      serves: 4,
      ing: [
        ["[[150]] g de guanciale (no panceta, no bacon — guanciale)", "[[150]] g guanciale (not pancetta, not bacon — guanciale)"],
        ["[[4]] yemas de huevo + [[1]] huevo entero", "[[4]] egg yolks + [[1]] whole egg"],
        ["[[80]] g de pecorino romano rallado fino", "[[80]] g pecorino romano, finely grated"],
        ["[[30]] g de parmesano rallado", "[[30]] g Parmesan, grated"],
        ["Pimienta negra abundante, recién molida", "Plenty of freshly ground black pepper"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Corta el guanciale en dados y cocínalo en una sartén sin aceite a fuego medio-bajo hasta que la grasa se funda y quede crujiente por fuera. Reserva la grasa.",
         "Dice the guanciale and cook it in a dry pan over medium-low heat until the fat renders and it's crisp on the outside. Keep the fat."],
        ["En un bol, mezcla las yemas, el huevo entero, el pecorino, el parmesano y pimienta negra abundante.",
         "In a bowl, mix the yolks, the whole egg, the pecorino, the Parmesan and plenty of black pepper."],
        ["Cuece los gnocchi. Escúrrelos reservando una taza del agua de cocción.", "Cook the gnocchi. Drain them, keeping a cup of the cooking water."],
        ["Apaga el fuego de la sartén con el guanciale. Añade los gnocchi. Añade la mezcla de huevos. Mezcla rápidamente añadiendo agua de cocción cucharada a cucharada hasta obtener una crema sedosa. El calor residual cocina el huevo — nunca a fuego directo o se cuaja.",
         "Turn off the heat under the pan with the guanciale. Add the gnocchi. Add the egg mixture. Stir quickly, adding cooking water a spoonful at a time, until you have a silky cream. The residual heat cooks the egg — never over direct heat, or it scrambles."],
        ["Sirve inmediatamente con más pecorino y pimienta.", "Serve immediately with more pecorino and pepper."]
      ],
      note: ["Con gnocchi la carbonara es aún más delicada que con la pasta porque los gnocchi sueltan más almidón. Esto significa que la salsa tiende a condensarse más rápido — trabaja rápido y no esperes. Si la crema se enfría y se compacta, un chorrito de agua caliente y listo.",
             "With gnocchi, carbonara is even more delicate than with pasta because gnocchi release more starch. That means the sauce tends to set faster — work quickly and don't wait. If the cream cools and tightens, a splash of hot water and you're done."]
    },
    {
      kind: "recipe", id: "ragu", n: 8, img: "img/ragu.jpg",
      title: ["Gnocchi con ragù de ternera", "Gnocchi with beef ragù"],
      lead: [["Mi ragù. Lento, profundo, milanés de corazón. No es una salsa rápida — es una promesa que le haces a la carne cuando la pones en la olla.",
              "My ragù. Slow, deep, Milanese at heart. It isn't a quick sauce — it's a promise you make to the meat when you put it in the pot."]],
      serves: 4,
      ing: [
        ["[[400]] g de ternera picada", "[[400]] g minced beef"],
        ["[[1]] cebolla mediana", "[[1]] medium onion"],
        ["[[1]] zanahoria", "[[1]] carrot"],
        ["[[1]] tallo de apio", "[[1]] celery stalk"],
        ["[[150]] ml de vino blanco seco", "[[150]] ml dry white wine"],
        ["[[400]] g de tomate pelado", "[[400]] g peeled tomatoes"],
        ["Aceite de oliva, sal, pimienta, laurel, romero", "Olive oil, salt, pepper, bay leaf, rosemary"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Pica finamente la cebolla, la zanahoria y el apio. Sofríelos en aceite a fuego medio durante 10 minutos.",
         "Finely chop the onion, carrot and celery. Sauté them in oil over medium heat for 10 minutes."],
        ["El truco: tritura el soffritto con la batidora hasta obtener una crema suave. Vuelve a ponerlo en la sartén. Este paso hace que el ragù quede más cremoso y sedoso en el plato — sin trozos de verdura, solo sabor.",
         "The trick: blend the soffritto to a smooth cream. Put it back in the pan. This step makes the ragù creamier and silkier on the plate — no bits of vegetable, just flavour."],
        ["Sube el fuego, añade la carne picada y dórala bien sin moverla demasiado. Deja que se forme costra.",
         "Turn up the heat, add the minced meat and brown it well without moving it too much. Let a crust form."],
        ["Añade el vino blanco y deja evaporar el alcohol completamente, 3–4 minutos a fuego alto.",
         "Add the white wine and let the alcohol evaporate completely, 3–4 minutes over high heat."],
        ["Añade el tomate pelado aplastado, el laurel y el romero. Baja al mínimo y cocina tapado durante al menos 2 horas, removiendo cada 20–30 minutos.",
         "Add the crushed peeled tomatoes, the bay leaf and the rosemary. Turn the heat to its lowest and cook, covered, for at least 2 hours, stirring every 20–30 minutes."],
        ["Saltea los gnocchi directamente en el ragù con un poco de agua de cocción.", "Toss the gnocchi straight into the ragù with a little cooking water."]
      ],
      note: ["Triturar el soffritto — ese es mi secreto. La mayoría de los ragù tienen trozos de verdura que rompen la textura. El mío no. La crema de soffritto se integra completamente con la carne y crea una base más redonda y uniforme. El ragù mejora siempre al día siguiente.",
             "Blending the soffritto — that's my secret. Most ragùs have bits of vegetable that break up the texture. Mine doesn't. The soffritto cream blends completely into the meat and creates a rounder, more even base. Ragù is always better the next day."]
    },
    {
      kind: "recipe", id: "pesto", n: 9, img: "img/pesto.jpg",
      title: ["Gnocchi al pesto", "Gnocchi al pesto"],
      lead: [["El pesto debe ser verde brillante y fresco. Sin cocción. El calor de los gnocchi es suficiente.",
              "Pesto should be bright green and fresh. No cooking. The heat of the gnocchi is enough."]],
      serves: 4,
      ingHead: ["Para el pesto", "For the pesto"],
      ing: [
        ["[[50]] g de albahaca fresca (hojas, sin tallos)", "[[50]] g fresh basil (leaves only, no stalks)"],
        ["[[30]] g de piñones", "[[30]] g pine nuts"],
        ["[[1]] diente de ajo (opcional — lo omito en el restaurante por los intolerantes, pero si te gusta, ponlo)", "[[1]] garlic clove (optional — I leave it out at the restaurant for those with intolerances, but if you like it, add it)"],
        ["Aceite de oliva virgen extra, añadido a hilo", "Extra virgin olive oil, added in a thin stream"],
        ["Sal, pimienta", "Salt, pepper"],
        ["Pecorino de buena calidad, rallado directamente en el plato al servir", "Good pecorino, grated straight onto the plate when serving"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Blanquea las hojas de albahaca en agua hirviendo durante 10 segundos y enfría inmediatamente en agua con hielo. Escurre y seca bien.",
         "Blanch the basil leaves in boiling water for 10 seconds and chill immediately in iced water. Drain and dry well."],
        ["Tritura la albahaca con los piñones, sal y pimienta. Añade el aceite a hilo mientras trituras hasta obtener la consistencia deseada. El queso no va dentro: se ralla directamente en el plato.",
         "Blend the basil with the pine nuts, salt and pepper. Pour in the oil in a thin stream as you blend, until you reach the consistency you want. The cheese doesn't go in: it's grated straight onto the plate."],
        ["Cuece los gnocchi. En el bol de servicio, añade el pesto, los gnocchi escurridos con un poco de agua de cocción y mezcla.",
         "Cook the gnocchi. In the serving bowl, add the pesto, then the drained gnocchi with a little cooking water, and mix."],
        ["Sirve con pecorino de calidad rallado generosamente por encima y piñones ligeramente tostados.",
         "Serve with good pecorino grated generously over the top and lightly toasted pine nuts."]
      ],
      note: ["No pongo queso dentro del pesto por una razón práctica: en el restaurante tenía clientes con intolerancias y así controlaba mejor cada plato. Pero también porque el queso rallado en el momento — directamente en el plato — tiene una frescura completamente diferente a cuando se tritura dentro. Pruébalo y decides tú.",
             "I don't put cheese in the pesto for a practical reason: at the restaurant I had customers with intolerances, and this way I had better control over every plate. But also because cheese grated at the last moment — straight onto the plate — has a completely different freshness from cheese blended in. Try it and decide for yourself."]
    },

    /* ================================================================ */
    {
      kind: "section", id: "seccion-3", num: 3,
      title: ["Los creativos", "The creative ones"],
      subtitle: ["Los platos que nadie esperaba — y todos recuerdan", "The dishes nobody expected — and everyone remembers"],
      body: [
        ["Esta es la sección que más me define. No la más clásica, no la más técnica — la más mía. Cada receta aquí nació de una intuición, de una temporada, de una combinación que parecía rara hasta que alguien la probaba y pedía repetir.",
         "This is the section that defines me most. Not the most classic, not the most technical — the most mine. Every recipe here was born from a hunch, a season, a combination that seemed strange until someone tasted it and asked for more."],
        ["Aquí no hay reglas. Solo hay sabor.", "There are no rules here. Only flavour."]
      ]
    },
    {
      kind: "recipe", id: "pimientos-ricotta", n: 10, img: "img/pimientos-ricotta.jpg",
      title: ["Gnocchi con crema de pimientos amarillos, ricotta y pistachos", "Gnocchi with yellow pepper cream, ricotta and pistachios"],
      lead: [["El plato más visto de Brera. 32.000 visualizaciones en Instagram. Pero antes de ser un número, fue una idea de temporada que no quería quitarse de la carta.",
              "Brera's most-viewed dish. 32,000 views on Instagram. But before it was a number, it was a seasonal idea that refused to leave the menu."]],
      serves: 4,
      ing: [
        ["[[4]] pimientos amarillos grandes", "[[4]] large yellow peppers"],
        ["[[200]] g de ricotta fresca (escurrida, no aguada)", "[[200]] g fresh ricotta (drained, not watery)"],
        ["[[60]] g de pistachos pelados sin sal, picados groseramente", "[[60]] g shelled unsalted pistachios, roughly chopped"],
        ["[[1]] chalota", "[[1]] shallot"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Sal, pimienta blanca", "Salt, white pepper"],
        ["Agua o caldo vegetal (para ajustar la crema)", "Water or vegetable stock (to adjust the cream)"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Asa los pimientos directamente sobre la llama del gas o bajo el grill del horno hasta que la piel esté completamente ennegrecida. Mételos en una bolsa cerrada durante 15 minutos. Pélalos, retira semillas y filamentos blancos.",
         "Roast the peppers directly over a gas flame or under the oven grill until the skin is completely blackened. Seal them in a bag for 15 minutes. Peel them and remove the seeds and white membranes."],
        ["En una sartén, sofríe la chalota picada en aceite. Añade los pimientos asados troceados y cocina 5 minutos más.",
         "In a pan, sweat the chopped shallot in oil. Add the roasted peppers, cut into pieces, and cook 5 more minutes."],
        ["Tritura todo con la batidora añadiendo un poco de agua o caldo hasta obtener una crema lisa y sedosa. Ajusta de sal y pimienta blanca.",
         "Blend everything, adding a little water or stock, until you have a smooth, silky cream. Season with salt and white pepper."],
        ["Calienta la crema en una sartén amplia. Cuece los gnocchi y escúrrelos directamente dentro. Saltea 1 minuto a fuego medio.",
         "Heat the cream in a wide pan. Cook the gnocchi and drain them straight into it. Toss for 1 minute over medium heat."],
        ["Emplata. Añade una quenelle de ricotta fresca en el centro, los pistachos picados por encima, un hilo de aceite de oliva y pimienta negra recién molida.",
         "Plate. Add a quenelle of fresh ricotta in the centre, the chopped pistachios on top, a drizzle of olive oil and freshly ground black pepper."]
      ],
      note: ["El secreto está en la ricotta — debe ser fresca y bien escurrida. Los pistachos van añadidos al último momento, fuera del fuego — el calor los ablanda y pierden el crujiente que es parte esencial del plato. Este fue el primer plato de Brera que se hizo viral sin buscarlo. A veces los mejores platos son así.",
             "The secret is the ricotta — it must be fresh and well drained. The pistachios go on at the very last moment, off the heat — heat softens them and they lose the crunch that's an essential part of the dish. This was the first Brera dish to go viral without trying. Sometimes the best dishes are like that."]
    },
    {
      kind: "recipe", id: "azafran", n: 11, img: "img/azafran.jpg",
      title: ["Gnocchi con salsa de azafrán, queso de cabra y reducción de vinagre balsámico", "Gnocchi with saffron sauce, goat's cheese and balsamic reduction"],
      lead: [["Tres ingredientes que no deberían funcionar juntos. Y sin embargo.", "Three ingredients that shouldn't work together. And yet."]],
      serves: 4,
      ing: [
        ["[[1d]] g de azafrán en hebras", "[[1d]] g saffron threads"],
        ["[[80]] ml de vinagre balsámico de Módena", "[[80]] ml balsamic vinegar of Modena"],
        ["[[120]] g de queso de cabra fresco (rulo)", "[[120]] g fresh goat's cheese (log)"],
        ["Mantequilla", "Butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta blanca", "Salt, white pepper"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Prepara la reducción de balsámico: vierte el vinagre en un cazo pequeño a fuego medio-bajo y reduce a la mitad hasta obtener consistencia de jarabe. Reserva.",
         "Make the balsamic reduction: pour the vinegar into a small saucepan over medium-low heat and reduce by half to a syrupy consistency. Set aside."],
        ["Infusiona el azafrán en [[3]] cucharadas de agua caliente durante 10 minutos.", "Steep the saffron in [[3]] tablespoons of hot water for 10 minutes."],
        ["En una sartén, funde la mantequilla a fuego suave. Añade el azafrán infusionado con su agua y mezcla. Añade agua de cocción de los gnocchi cucharada a cucharada hasta obtener una salsa sedosa y ligada.",
         "In a pan, melt the butter over low heat. Add the saffron with its water and stir. Add gnocchi cooking water a spoonful at a time until you have a silky, emulsified sauce."],
        ["Cuece los gnocchi y escúrrelos directamente en la salsa. Saltea 1 minuto ajustando con más agua de cocción si es necesario.",
         "Cook the gnocchi and drain them straight into the sauce. Toss for 1 minute, adjusting with more cooking water if needed."],
        ["Emplata. Desmenuza el queso de cabra por encima mientras el plato está caliente. Termina con unas gotas de reducción de balsámico.",
         "Plate. Crumble the goat's cheese over the top while the dish is hot. Finish with a few drops of balsamic reduction."]
      ],
      note: ["La magia de esta salsa está en el agua de cocción — no en la nata. El almidón que los gnocchi dejan en el agua es lo que crea la emulsión con la mantequilla y el azafrán. La reducción de balsámico se puede preparar con días de antelación.",
             "The magic of this sauce is in the cooking water — not in cream. The starch the gnocchi leave in the water is what creates the emulsion with the butter and saffron. The balsamic reduction can be made days ahead."]
    },
    {
      kind: "recipe", id: "remolacha-gorgonzola", n: 12, img: "img/remolacha-gorgonzola.jpg",
      title: ["Gnocchi con remolacha y gorgonzola", "Gnocchi with beetroot and gorgonzola"],
      lead: [["El plato más polarizante de Brera. Lo amabas o te daba miedo. Los que se atrevían, repetían.",
              "Brera's most polarising dish. You loved it or it scared you. Those who dared came back for more."]],
      serves: 4,
      ing: [
        ["[[400]] g de remolacha cocida (no en vinagre)", "[[400]] g cooked beetroot (not pickled)"],
        ["[[150]] g de gorgonzola dolce", "[[150]] g gorgonzola dolce"],
        ["[[1]] chalota", "[[1]] shallot"],
        ["Aceite de oliva", "Olive oil"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta negra", "Salt, black pepper"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Tritura la remolacha cocida con un poco de agua hasta obtener una crema lisa.", "Blend the cooked beetroot with a little water to a smooth cream."],
        ["Sofríe la chalota en aceite. Añade la crema de remolacha y cocina 5 minutos. Ajusta la consistencia con agua de cocción. Ajusta de sal con cuidado.",
         "Sweat the shallot in oil. Add the beetroot cream and cook for 5 minutes. Adjust the consistency with cooking water. Season with salt carefully."],
        ["Cuece los gnocchi y escúrrelos directamente en la crema caliente. Saltea 1 minuto.", "Cook the gnocchi and drain them straight into the hot cream. Toss for 1 minute."],
        ["Emplata. Durante el emplatado, funde el gorgonzola dolce directamente sobre el plato caliente — en trozos generosos, dejando que el calor lo funda en el momento.",
         "Plate. As you plate, melt the gorgonzola dolce directly on the hot dish — in generous pieces, letting the heat melt it on the spot."]
      ],
      note: ["El gorgonzola fuera del fuego, fundido en el plato en el último momento, es el detalle que cambia todo. Si lo cocinas dentro de la crema se vuelve gomoso y pierde su carácter. Como se come en casa, con generosidad.",
             "Gorgonzola off the heat, melted on the plate at the last moment, is the detail that changes everything. If you cook it in the cream it turns rubbery and loses its character. The way you'd eat at home: generously."]
    },
    {
      kind: "recipe", id: "pimientos-datiles", n: 13,
      title: ["Gnocchi con pimientos amarillos y dátiles", "Gnocchi with yellow peppers and dates"],
      lead: [["Dulce, ahumado, con un fondo que no esperas. Este plato nació de una temporada y no quiso irse.",
              "Sweet, smoky, with a depth you don't expect. This dish was born in one season and refused to leave."]],
      serves: 4,
      ing: [
        ["[[4]] pimientos amarillos grandes", "[[4]] large yellow peppers"],
        ["[[80]] g de dátiles Medjool sin hueso", "[[80]] g pitted Medjool dates"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Sal, pimienta negra, pimentón ahumado (una pizca)", "Salt, black pepper, smoked paprika (a pinch)"],
        ["Parmesano rallado (opcional, al servir)", "Grated Parmesan (optional, to serve)"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Asa los pimientos amarillos sobre llama directa o bajo el grill hasta que la piel esté completamente ennegrecida. Mételos en una bolsa cerrada 15 minutos, pélalos y retira semillas y filamentos.",
         "Roast the yellow peppers over a direct flame or under the grill until the skin is completely blackened. Seal them in a bag for 15 minutes, then peel them and remove seeds and membranes."],
        ["Tritura los pimientos asados con un poco de agua hasta obtener una crema lisa. Añade una pizca de pimentón ahumado. Ajusta de sal.",
         "Blend the roasted peppers with a little water to a smooth cream. Add a pinch of smoked paprika. Season with salt."],
        ["Calienta la crema en una sartén amplia. Cuece los gnocchi y escúrrelos directamente dentro. Saltea 1 minuto con un poco de agua de cocción.",
         "Heat the cream in a wide pan. Cook the gnocchi and drain them straight into it. Toss for 1 minute with a little cooking water."],
        ["Emplata. Coloca los dátiles Medjool al natural directamente en el plato — enteros o cortados a la mitad, sin cocinar.",
         "Plate. Place the Medjool dates as they are directly on the plate — whole or halved, uncooked."],
        ["Parmesano rallado por encima si se desea. Hilo de aceite de oliva.", "Grated Parmesan on top if you like. A drizzle of olive oil."]
      ],
      note: ["Los dátiles al natural, sin cocinar, son el elemento que hace único este plato. El contraste entre la crema caliente de pimiento y el dátil fresco es exactamente lo que buscaba. Si los cocinas pierden esa tensión. Dulce, ahumado, vegetal, todo a la vez.",
             "The dates, raw and uncooked, are what make this dish unique. The contrast between the hot pepper cream and the cool date is exactly what I was after. If you cook them, that tension is lost. Sweet, smoky, vegetal, all at once."]
    },
    {
      kind: "recipe", id: "salvia-castanas", n: 14, img: "img/salvia-castanas.jpg",
      title: ["Gnocchi con mantequilla, salvia y castañas", "Gnocchi with butter, sage and chestnuts"],
      lead: [["El otoño en su forma más simple y más honesta. Tres ingredientes. Sin escondites.",
              "Autumn in its simplest, most honest form. Three ingredients. Nowhere to hide."]],
      serves: 4,
      ing: [
        ["[[120]] g de mantequilla de buena calidad", "[[120]] g good-quality butter"],
        ["[[16]] hojas de salvia fresca", "[[16]] fresh sage leaves"],
        ["[[200]] g de castañas cocidas (al vacío o asadas y peladas)", "[[200]] g cooked chestnuts (vacuum-packed, or roasted and peeled)"],
        ["Parmesano rallado", "Grated Parmesan"],
        ["Sal, pimienta negra", "Salt, black pepper"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Trocea las castañas cocidas en piezas irregulares.", "Break the cooked chestnuts into irregular pieces."],
        ["En una sartén amplia, funde la mantequilla a fuego medio. Cuando empiece a espumar, añade las hojas de salvia. Deja que la mantequilla se tueste hasta adquirir un color avellana y un aroma a frutos secos — burro nocciola. No te distraigas: la diferencia entre mantequilla tostada y quemada es cuestión de segundos.",
         "In a wide pan, melt the butter over medium heat. When it starts to foam, add the sage leaves. Let the butter brown until it turns hazelnut-coloured and smells nutty — burro nocciola. Don't get distracted: the difference between browned and burnt butter is a matter of seconds."],
        ["Añade las castañas y saltea 2 minutos en la mantequilla tostada.", "Add the chestnuts and toss for 2 minutes in the browned butter."],
        ["Cuece los gnocchi y escúrrelos directamente en la sartén. Saltea todo junto 1 minuto.", "Cook the gnocchi and drain them straight into the pan. Toss everything together for 1 minute."],
        ["Sirve con parmesano rallado y pimienta negra generosa.", "Serve with grated Parmesan and plenty of black pepper."]
      ],
      note: ["La mantequilla tostada lo es todo en este plato. No hay salsa, no hay crema — solo la mantequilla tostada en el punto exacto. Para conseguirlo, usa una sartén de fondo claro si puedes, así ves el color cambiar en tiempo real.",
             "The browned butter is everything in this dish. There's no sauce, no cream — just butter browned to exactly the right point. To get there, use a light-bottomed pan if you can, so you can see the colour change in real time."]
    },
    {
      kind: "recipe", id: "champinones-ajo-negro", n: 15, img: "img/champinones-ajo-negro.jpg",
      title: ["Gnocchi con crema de champiñones, ajo negro y avellanas", "Gnocchi with mushroom cream, black garlic and hazelnuts"],
      lead: [["El plato más umami de la carta. Profundo, oscuro, con ese punto de ajo negro que lo hace completamente diferente a cualquier cosa que hayas probado con champiñones.",
              "The most umami dish on the menu. Deep, dark, with that touch of black garlic that makes it completely different from anything you've tasted with mushrooms."]],
      serves: 4,
      ing: [
        ["[[400]] g de champiñones (o mezcla de setas)", "[[400]] g button mushrooms (or mixed mushrooms)"],
        ["[[4-5]] dientes de ajo negro", "[[4-5]] black garlic cloves"],
        ["[[50]] g de avellanas tostadas, picadas groseramente", "[[50]] g toasted hazelnuts, roughly chopped"],
        ["[[1]] chalota", "[[1]] shallot"],
        ["Aceite de oliva, mantequilla", "Olive oil, butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta negra", "Salt, black pepper"],
        ["Perejil fresco picado (opcional)", "Chopped fresh parsley (optional)"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Limpia y lamina los champiñones. Saltéalos en aceite y mantequilla a fuego alto sin moverlos demasiado hasta que estén bien dorados. Añade sal solo al final.",
         "Clean and slice the mushrooms. Sauté them in oil and butter over high heat without moving them too much, until well browned. Salt only at the end."],
        ["Sofríe la chalota por separado. Añade los champiñones dorados y cocina 3 minutos más. Tritura todo con agua de cocción hasta obtener una crema con textura. Ajusta de sal.",
         "Sweat the shallot separately. Add the browned mushrooms and cook 3 more minutes. Blend everything with cooking water to a cream that still has some texture. Season with salt."],
        ["Tritura el ajo negro por separado con un poco de agua de cocción hasta obtener una pasta oscura y fluida. Reserva.",
         "Blend the black garlic separately with a little cooking water to a dark, fluid paste. Set aside."],
        ["Cuece los gnocchi y escúrrelos directamente en la crema caliente. Saltea 1 minuto.", "Cook the gnocchi and drain them straight into the hot cream. Toss for 1 minute."],
        ["Emplata. Termina con la crema de ajo negro distribuida sobre el plato, las avellanas picadas y perejil fresco. Todo fuera del fuego, en el último momento.",
         "Plate. Finish with the black garlic cream dotted over the plate, the chopped hazelnuts and fresh parsley. All off the heat, at the last moment."]
      ],
      note: ["El ajo negro no va dentro de la crema — va encima, como elemento de acabado. Así cada bocado tiene más o menos ajo negro según donde cae la cuchara. Las avellanas se añaden en el último momento — el calor las ablandaría y perderían el crujiente que es fundamental.",
             "The black garlic doesn't go into the cream — it goes on top, as a finishing element. That way each bite has more or less black garlic depending on where the spoon lands. The hazelnuts go on at the last moment — heat would soften them and they'd lose the crunch that's essential."]
    },
    {
      kind: "recipe", id: "radicchio", n: 16, img: "img/radicchio.jpg",
      title: ["Gnocchi con crema de radicchio, gorgonzola y biscotti di mandorla", "Gnocchi with radicchio cream, gorgonzola and almond biscotti"],
      lead: [["Amargo, salado, dulce. En ese orden, en cada bocado. Este es el plato que más divide — y el que más convierte a los escépticos.",
              "Bitter, salty, sweet. In that order, in every bite. This is the dish that divides people most — and the one that converts the most sceptics."]],
      serves: 4,
      ing: [
        ["[[300]] g de radicchio di Treviso (o radicchio redondo)", "[[300]] g radicchio di Treviso (or round radicchio)"],
        ["[[120]] g de gorgonzola dolce", "[[120]] g gorgonzola dolce"],
        ["[[6-8]] biscotti di farina di mandorla, secos y crujientes", "[[6-8]] almond-flour biscotti, dry and crunchy"],
        ["[[1]] chalota", "[[1]] shallot"],
        ["[[80]] ml de vino tinto", "[[80]] ml red wine"],
        ["Aceite de oliva, mantequilla", "Olive oil, butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta", "Salt, pepper"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Corta el radicchio en tiras. Sofríe la chalota en aceite y mantequilla, luego añade el radicchio. Cocina a fuego medio 8 minutos hasta que ablande.",
         "Cut the radicchio into strips. Sweat the shallot in oil and butter, then add the radicchio. Cook over medium heat for 8 minutes until soft."],
        ["Añade el vino tinto y deja evaporar el alcohol completamente.", "Add the red wine and let the alcohol evaporate completely."],
        ["Añade agua de cocción para ajustar la consistencia. Tritura parcialmente — mitad crema, mitad con textura. Ajusta de sal.",
         "Add cooking water to adjust the consistency. Blend partially — half cream, half with texture. Season with salt."],
        ["Cuece los gnocchi y escúrrelos en la crema. Saltea 1 minuto.", "Cook the gnocchi and drain them into the cream. Toss for 1 minute."],
        ["Emplata. Funde el gorgonzola dolce directamente sobre el plato caliente en trozos generosos. Termina con los biscotti di mandorla desmenuzados groseramente por encima.",
         "Plate. Melt the gorgonzola dolce directly on the hot plate in generous pieces. Finish with the almond biscotti roughly crumbled over the top."]
      ],
      note: ["Una precisión importante: los amaretti que usamos aquí son los biscotti di farina di mandorla — pequeñas galletas crujientes hechas con almendra. El gorgonzola fundido en el momento del emplatado — no cocinado — es la firma de este plato, como en todos mis platos con gorgonzola.",
             "An important clarification: the amaretti we use here are biscotti di farina di mandorla — small crunchy biscuits made with almond. The gorgonzola melted at the moment of plating — not cooked — is this dish's signature, as in all my gorgonzola dishes."]
    },
    {
      kind: "recipe", id: "guisantes", n: 17, img: "img/guisantes.jpg",
      title: ["Gnocchi con crema de guisantes, bottarga y limón", "Gnocchi with pea cream, bottarga and lemon"],
      lead: [["Verde brillante, marino, con ese limón que lo despierta todo. El plato de primavera de Brera.",
              "Bright green, of the sea, with that lemon that wakes everything up. Brera's spring dish."]],
      serves: 4,
      ing: [
        ["[[400]] g de guisantes frescos o congelados", "[[400]] g fresh or frozen peas"],
        ["[[40-50]] g de bottarga de mújol en pieza (para rallar)", "[[40-50]] g grey mullet bottarga in one piece (for grating)"],
        ["[[1]] limón entero con piel (sin tratar si es posible)", "[[1]] whole lemon, skin on (unwaxed if possible)"],
        ["[[1]] cucharadita de azúcar", "[[1]] teaspoon sugar"],
        ["[[100]] ml de agua", "[[100]] ml water"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Sal, pimienta blanca", "Salt, white pepper"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Prepara la crema de limón: corta el limón entero en trozos con piel, sin pelar. Ponlo en un cazo con el azúcar y [[100]] ml de agua. Cocina a fuego muy bajo, tapado, durante 25–30 minutos hasta que la piel esté completamente blanda. Tritura todo junto hasta obtener una crema densa. Reserva.",
         "Make the lemon cream: cut the whole lemon into pieces, skin on, unpeeled. Put it in a saucepan with the sugar and [[100]] ml water. Cook over very low heat, covered, for 25–30 minutes until the peel is completely soft. Blend everything together into a thick cream. Set aside."],
        ["Cuece los guisantes en agua con sal 3–4 minutos. Enfría inmediatamente en agua con hielo. Tritura con agua de cocción y aceite hasta obtener una crema lisa e intensa. Ajusta de sal.",
         "Cook the peas in salted water for 3–4 minutes. Chill immediately in iced water. Blend with cooking water and oil to a smooth, intense cream. Season with salt."],
        ["Calienta la crema de guisantes en una sartén. Escurre los gnocchi directamente dentro y saltea 1 minuto.", "Heat the pea cream in a pan. Drain the gnocchi straight into it and toss for 1 minute."],
        ["Emplata. Antes de rallar la bottarga, añade una cucharadita de crema de limón directamente en el plato — no mezclada, sino colocada encima como elemento de acabado.",
         "Plate. Before grating the bottarga, add a teaspoon of lemon cream directly on the plate — not mixed in, but placed on top as a finishing touch."],
        ["Ralla la bottarga generosamente sobre todo el plato. Hilo de aceite. Sirve inmediatamente.", "Grate the bottarga generously over the whole plate. A drizzle of oil. Serve immediately."]
      ],
      note: ["La crema de limón cocido entero con piel es la técnica que transforma este plato. Cocinar el limón con piel suaviza el amargor y concentra los aceites esenciales de la corteza. Va puesta en el plato en el último momento, antes de la bottarga, para que el calor de los gnocchi la despierte sin cocinarla. Es el detalle que marca la diferencia — y que nadie espera.",
             "The cream of whole lemon cooked with its peel is the technique that transforms this dish. Cooking the lemon with its peel softens the bitterness and concentrates the essential oils of the rind. It goes on the plate at the last moment, before the bottarga, so the heat of the gnocchi wakes it up without cooking it. It's the detail that makes the difference — and that nobody expects."]
    },

    /* ================================================================ */
    {
      kind: "section", id: "seccion-4", num: 4,
      title: ["Las estaciones", "The seasons"],
      subtitle: ["La cocina que cambia con el mercado", "Cooking that changes with the market"],
      body: [
        ["En el Brera no había carta fija para los platos de temporada. Había lo que encontraba en el mercado el lunes por la mañana, lo que la estación ofrecía, lo que me apetecía cocinar esa semana. Estos platos nacieron así — sin planificación, con ingredientes que llegaban y se iban.",
         "At Brera there was no fixed menu for seasonal dishes. There was whatever I found at the market on Monday morning, whatever the season offered, whatever I felt like cooking that week. These dishes were born that way — unplanned, with ingredients that came and went."],
        ["Son los que más echo de menos.", "They're the ones I miss the most."]
      ]
    },
    {
      kind: "recipe", id: "calabaza-amaretti", n: 18, season: ["Otoño", "Autumn"],
      title: ["Gnocchi con crema de calabaza y amaretti", "Gnocchi with pumpkin cream and amaretti"],
      lead: [["El primero que pongo en carta cuando llega septiembre. Dulce, especiado, con ese punto crujiente de los amaretti que rompe la monotonía de la crema.",
              "The first one I put on the menu when September arrives. Sweet, spiced, with that crunch of amaretti that breaks the monotony of the cream."]],
      serves: 4,
      ing: [
        ["[[500]] g de calabaza (butternut o hokkaido)", "[[500]] g pumpkin (butternut or hokkaido)"],
        ["[[6-8]] biscotti di mandorla (amaretti crujientes), más algunos para decorar", "[[6-8]] almond biscotti (crunchy amaretti), plus a few to garnish"],
        ["[[1]] chalota", "[[1]] shallot"],
        ["Aceite de oliva, mantequilla", "Olive oil, butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta negra, nuez moscada", "Salt, black pepper, nutmeg"],
        ["Parmesano rallado para servir", "Grated Parmesan to serve"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Corta la calabaza en trozos y hornea a 190°C durante 35–40 minutos. Pela y reserva la pulpa.", "Cut the pumpkin into pieces and roast at 190°C for 35–40 minutes. Peel and keep the flesh."],
        ["Sofríe la chalota en aceite y mantequilla. Añade la pulpa de calabaza y cocina 5 minutos más.", "Sweat the shallot in oil and butter. Add the pumpkin flesh and cook 5 more minutes."],
        ["Tritura con agua de cocción hasta obtener una crema densa. Añade nuez moscada, sal y pimienta.", "Blend with cooking water to a thick cream. Add nutmeg, salt and pepper."],
        ["Calienta la crema. Escurre los gnocchi directamente dentro y saltea 1 minuto.", "Heat the cream. Drain the gnocchi straight into it and toss for 1 minute."],
        ["Emplata. Desmenuza los amaretti groseramente por encima — fuera del fuego. Parmesano y un hilo de aceite.", "Plate. Roughly crumble the amaretti over the top — off the heat. Parmesan and a drizzle of oil."]
      ],
      note: ["Los amaretti son los biscotti di farina di mandorla — crujientes, amargos, de almendra. Su amargor seco corta perfectamente la dulzura de la calabaza. Si los añades demasiado pronto se ablandan con el calor y pierden todo el sentido. Último momento, siempre.",
             "The amaretti are biscotti di farina di mandorla — crunchy, bitter, made with almond. Their dry bitterness cuts perfectly through the sweetness of the pumpkin. Add them too early and the heat softens them and they lose all their point. Last moment, always."]
    },
    {
      kind: "recipe", id: "calabaza-porcini", n: 19, season: ["Otoño", "Autumn"], img: "img/calabaza-porcini.jpg",
      title: ["Gnocchi con calabaza y funghi porcini", "Gnocchi with pumpkin and porcini mushrooms"],
      lead: [["El plato más otoñal que existe. Cuando los porcini frescos llegan al mercado, este es el primero que hago.",
              "The most autumnal dish there is. When fresh porcini arrive at the market, this is the first thing I make."]],
      serves: 4,
      ing: [
        ["[[400]] g de calabaza (butternut o hokkaido)", "[[400]] g pumpkin (butternut or hokkaido)"],
        ["[[250]] g de funghi porcini frescos (o [[30]] g secos rehidratados 20 minutos en agua caliente)", "[[250]] g fresh porcini (or [[30]] g dried, soaked for 20 minutes in hot water)"],
        ["[[1]] chalota, [[1]] diente de ajo", "[[1]] shallot, [[1]] garlic clove"],
        ["Aceite de oliva, mantequilla", "Olive oil, butter"],
        ["Agua de cocción (o agua de rehidratación de los porcini, filtrada)", "Cooking water (or the porcini soaking water, strained)"],
        ["Sal, pimienta negra, perejil fresco, parmesano", "Salt, black pepper, fresh parsley, Parmesan"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Hornea la calabaza en trozos a 190°C durante 35–40 minutos. Tritura con agua de cocción hasta obtener una crema densa. Reserva.",
         "Roast the pumpkin in pieces at 190°C for 35–40 minutes. Blend with cooking water to a thick cream. Set aside."],
        ["Limpia los porcini frescos con un paño húmedo — nunca bajo el agua. Córtalos en láminas o trozos irregulares.",
         "Clean the fresh porcini with a damp cloth — never under running water. Cut them into slices or irregular pieces."],
        ["Saltea el ajo en aceite y mantequilla a fuego alto. Añade los porcini sin moverlos — deja que se doren bien antes de salarlos. La sal hace que suelten agua y no se doran si la añades antes.",
         "Sauté the garlic in oil and butter over high heat. Add the porcini without moving them — let them brown well before salting. Salt makes them release water, and they won't brown if you add it earlier."],
        ["Retira el ajo. Añade la crema de calabaza a la sartén con los porcini. Ajusta con agua de cocción.", "Remove the garlic. Add the pumpkin cream to the pan with the porcini. Adjust with cooking water."],
        ["Escurre los gnocchi directamente en la sartén. Saltea 1 minuto. Termina con perejil fresco y parmesano.", "Drain the gnocchi straight into the pan. Toss for 1 minute. Finish with fresh parsley and Parmesan."]
      ],
      note: ["Con los porcini hay una regla de oro: fuego alto, sin moverlos, sin sal hasta que estén dorados. La diferencia entre un porcino dorado y uno cocido es enorme. El agua de rehidratación de los porcini secos filtrada tiene un sabor concentrado que mejora cualquier salsa.",
             "With porcini there's a golden rule: high heat, don't move them, no salt until they're browned. The difference between a browned porcino and a stewed one is enormous. The strained soaking water from dried porcini has a concentrated flavour that improves any sauce."]
    },
    {
      kind: "recipe", id: "calabaza-castanas", n: 20, season: ["Otoño profundo", "Deep autumn"], img: "img/calabaza-castanas.jpg",
      title: ["Gnocchi con calabaza, castañas y amaretti", "Gnocchi with pumpkin, chestnuts and amaretti"],
      lead: [["El más goloso de la sección. Dulce sobre dulce, pero con la castaña que ancla todo.",
              "The most indulgent of the section. Sweet on sweet, but with the chestnut anchoring it all."]],
      serves: 4,
      ing: [
        ["[[400]] g de calabaza", "[[400]] g pumpkin"],
        ["[[150]] g de castañas cocidas", "[[150]] g cooked chestnuts"],
        ["[[6]] biscotti di mandorla (amaretti crujientes)", "[[6]] almond biscotti (crunchy amaretti)"],
        ["[[1]] chalota, aceite de oliva, mantequilla", "[[1]] shallot, olive oil, butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta negra, nuez moscada, canela (una pizca)", "Salt, black pepper, nutmeg, cinnamon (a pinch)"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Hornea la calabaza y tritura con agua de cocción hasta obtener una crema densa. Añade nuez moscada y una pizca de canela.",
         "Roast the pumpkin and blend with cooking water to a thick cream. Add nutmeg and a pinch of cinnamon."],
        ["Trocea las castañas en piezas irregulares. Saltéalas en mantequilla con la chalota hasta que estén ligeramente doradas. Reserva la mitad para decorar.",
         "Break the chestnuts into irregular pieces. Sauté them in butter with the shallot until lightly golden. Keep half aside to garnish."],
        ["Incorpora la mitad de las castañas a la crema de calabaza. Calienta y ajusta con agua de cocción.", "Stir half the chestnuts into the pumpkin cream. Heat and adjust with cooking water."],
        ["Escurre los gnocchi directamente en la crema. Saltea 1 minuto.", "Drain the gnocchi straight into the cream. Toss for 1 minute."],
        ["Emplata con las castañas reservadas y los amaretti desmenuzados en el último momento.", "Plate with the reserved chestnuts and the crumbled amaretti at the last moment."]
      ],
      note: ["La canela es el ingrediente invisible de este plato — nadie la identifica, pero si la quitas algo falta. Una pizca, no más. Este es el tipo de detalle que separa una receta de una firma.",
             "Cinnamon is the invisible ingredient in this dish — nobody can pick it out, but take it away and something is missing. A pinch, no more. This is the kind of detail that separates a recipe from a signature."]
    },
    {
      kind: "recipe", id: "topinambur", n: 21, season: ["Invierno", "Winter"], img: "img/topinambur.jpg",
      title: ["Gnocchi con crema de alcachofa de Jerusalén, alcachofas y uvas pasas", "Gnocchi with Jerusalem artichoke cream, artichokes and raisins"],
      lead: [
        ["El plato más inusual del libro. Y el que más conversaciones generaba en la mesa.", "The most unusual dish in the book. And the one that sparked the most conversation at the table."],
        ["El topinambur — conocido en España también como alcachofa de Jerusalén — es un tubérculo de sabor parecido a la alcachofa, con un fondo ligeramente dulce y terroso.",
         "Topinambur — also known in Spain as Jerusalem artichoke — is a tuber that tastes like artichoke, with a slightly sweet, earthy undertone."]
      ],
      serves: 4,
      ing: [
        ["[[300]] g de topinambur (alcachofa de Jerusalén)", "[[300]] g topinambur (Jerusalem artichoke)"],
        ["[[2]] alcachofas medianas", "[[2]] medium artichokes"],
        ["[[50]] g de uvas pasas", "[[50]] g raisins"],
        ["[[1]] chalota, zumo de [[0.5]] limón", "[[1]] shallot, juice of [[0.5]] lemon"],
        ["Aceite de oliva, mantequilla", "Olive oil, butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta negra", "Salt, black pepper"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Pela el topinambur y córtalo en trozos. Cocínalo en agua con sal y unas gotas de limón durante 15–20 minutos hasta que esté blando. Tritura con un poco del agua de cocción hasta obtener una crema lisa. El limón evita que se oxide.",
         "Peel the topinambur and cut it into pieces. Cook it in salted water with a few drops of lemon for 15–20 minutes until soft. Blend with a little of its cooking water to a smooth cream. The lemon stops it from oxidising."],
        ["Limpia las alcachofas retirando las hojas externas duras y el heno interior. Córtalas en láminas finas y saltéalas en aceite y mantequilla con la chalota a fuego medio hasta que estén doradas. Reserva.",
         "Clean the artichokes, removing the tough outer leaves and the inner choke. Slice them thinly and sauté them in oil and butter with the shallot over medium heat until golden. Set aside."],
        ["Rehidrata las uvas pasas en agua tibia durante 10 minutos. Escurre.", "Soak the raisins in warm water for 10 minutes. Drain."],
        ["Calienta la crema de topinambur con agua de cocción. Escurre los gnocchi directamente dentro. Saltea 1 minuto.", "Heat the topinambur cream with cooking water. Drain the gnocchi straight into it. Toss for 1 minute."],
        ["Emplata con las alcachofas salteadas por encima, las uvas pasas distribuidas y un hilo de aceite. Pimienta negra generosa.",
         "Plate with the sautéed artichokes on top, the raisins scattered over and a drizzle of oil. Plenty of black pepper."]
      ],
      note: ["El topinambur lo encuentras en mercados ecológicos entre octubre y febrero. El nombre puede variar — pregunta por los dos nombres. Las uvas pasas van al natural, sin cocinar — su dulzor concentrado en cada bocado es el elemento sorpresa de este plato. Agridulce a la italiana, en el sentido más antiguo del término.",
             "You'll find topinambur at organic markets between October and February. The name can vary — ask for it by both names. The raisins go on as they are, uncooked — their concentrated sweetness in each bite is the surprise element of this dish. Italian sweet-and-sour, in the oldest sense of the term."]
    },
    {
      kind: "recipe", id: "champinones-azafran", n: 22, season: ["Invierno", "Winter"], img: "img/champinones-azafran.jpg",
      title: ["Gnocchi con crema de champiñones y azafrán con aceite de trufa", "Gnocchi with mushroom and saffron cream and truffle oil"],
      lead: [["El plato más elegante de la carta de invierno. Champiñón que da cuerpo, azafrán que da color y perfume, trufa que lo lleva a otro nivel.",
              "The most elegant dish on the winter menu. Mushroom for body, saffron for colour and perfume, truffle to take it to another level."]],
      serves: 4,
      ing: [
        ["[[400]] g de champiñones", "[[400]] g button mushrooms"],
        ["[[1d]] g de azafrán en hebras", "[[1d]] g saffron threads"],
        ["Aceite de trufa negra (unas gotas — es intenso)", "Black truffle oil (a few drops — it's intense)"],
        ["[[1]] chalota, aceite de oliva, mantequilla", "[[1]] shallot, olive oil, butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta negra, perejil fresco", "Salt, black pepper, fresh parsley"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Infusiona el azafrán en [[3]] cucharadas de agua caliente durante 10 minutos.", "Steep the saffron in [[3]] tablespoons of hot water for 10 minutes."],
        ["Saltea los champiñones laminados en aceite y mantequilla a fuego alto — sin moverlos, sin sal hasta que estén dorados. Añade la chalota en los últimos 2 minutos.",
         "Sauté the sliced mushrooms in oil and butter over high heat — don't move them, no salt until they're browned. Add the shallot for the last 2 minutes."],
        ["Tritura la mitad de los champiñones con el azafrán infusionado y agua de cocción hasta obtener una crema dorada intensa. La otra mitad queda en trozos.",
         "Blend half the mushrooms with the saffron infusion and cooking water to an intense golden cream. The other half stays in pieces."],
        ["Vuelve a poner crema y champiñones enteros en la sartén. Ajusta de sal y consistencia.", "Put the cream and the whole mushroom pieces back in the pan. Adjust salt and consistency."],
        ["Escurre los gnocchi directamente en la sartén. Saltea 1 minuto. Emplata. Termina con unas gotas de aceite de trufa y perejil fresco.",
         "Drain the gnocchi straight into the pan. Toss for 1 minute. Plate. Finish with a few drops of truffle oil and fresh parsley."]
      ],
      note: ["El aceite de trufa es el ingrediente que más fácilmente se usa mal — demasiado y domina todo. Unas gotas, solo al final, fuera del fuego. El calor destruye los compuestos aromáticos de la trufa. Guárdalo para el último momento, siempre.",
             "Truffle oil is the ingredient most easily misused — too much and it dominates everything. A few drops, only at the end, off the heat. Heat destroys the truffle's aromatic compounds. Save it for the last moment, always."]
    },
    {
      kind: "recipe", id: "ricotta-limon", n: 23, season: ["Primavera", "Spring"], img: "img/ricotta-limon.jpg",
      title: ["Gnocchi con ricotta, limón y pistachos", "Gnocchi with ricotta, lemon and pistachios"],
      lead: [["El más fresco del libro. Blanco, verde, ligero — el plato que anuncia que el invierno ha terminado.",
              "The freshest in the book. White, green, light — the dish that announces winter is over."]],
      serves: 4,
      ing: [
        ["[[250]] g de ricotta fresca, bien escurrida", "[[250]] g fresh ricotta, well drained"],
        ["[[1]] limón (ralladura y zumo)", "[[1]] lemon (zest and juice)"],
        ["[[60]] g de pistachos pelados sin sal, picados", "[[60]] g shelled unsalted pistachios, chopped"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Sal, pimienta negra", "Salt, black pepper"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["En un bol, trabaja la ricotta escurrida con la ralladura de limón, aceite, sal y pimienta hasta obtener una crema suave.",
         "In a bowl, work the drained ricotta with the lemon zest, oil, salt and pepper into a smooth cream."],
        ["Añade unas cucharadas del agua de cocción caliente a la ricotta y mezcla — el almidón la hace más sedosa.",
         "Add a few spoonfuls of the hot cooking water to the ricotta and mix — the starch makes it silkier."],
        ["Escurre los gnocchi directamente en el bol. Mezcla rápidamente — el calor de los gnocchi es suficiente.", "Drain the gnocchi straight into the bowl. Mix quickly — the heat of the gnocchi is enough."],
        ["Unas gotas de zumo de limón. Ajusta de sal.", "A few drops of lemon juice. Adjust the salt."],
        ["Emplata. Pistachos por encima generosamente. Hilo de aceite. Pimienta negra.", "Plate. Pistachios generously over the top. A drizzle of oil. Black pepper."]
      ],
      note: ["La ricotta debe estar bien escurrida. Este plato no se cocina — se ensambla. Por eso la calidad de la ricotta y la frescura del limón importan más que en cualquier otra receta del libro. Con ingredientes mediocres no hay técnica que lo salve.",
             "The ricotta must be well drained. This dish isn't cooked — it's assembled. That's why the quality of the ricotta and the freshness of the lemon matter more here than in any other recipe in the book. With mediocre ingredients, no technique can save it."]
    },
    {
      kind: "recipe", id: "calabaza-cacao", n: 24, season: ["Especial", "Special"], img: "img/calabaza-cacao.jpg",
      title: ["Gnocchi con calabaza y cacao", "Gnocchi with pumpkin and cocoa"],
      lead: [["Nació en pandemia, como el impasto al cacao de la Sección 1. El impasto es normal, el cacao está en el plato.",
              "Born during the pandemic, like the cocoa impasto in Section 1. The impasto is plain; the cocoa is on the plate."]],
      serves: 4,
      ing: [
        ["[[500]] g de calabaza", "[[500]] g pumpkin"],
        ["[[15]] g de cacao amaro en polvo, calidad buena", "[[15]] g unsweetened cocoa powder, good quality"],
        ["[[1]] chalota, aceite de oliva, mantequilla", "[[1]] shallot, olive oil, butter"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Sal, pimienta negra, una pizca de canela", "Salt, black pepper, a pinch of cinnamon"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["Hornea la calabaza en trozos a 190°C durante 35–40 minutos. Tritura con agua de cocción hasta obtener una crema densa.", "Roast the pumpkin in pieces at 190°C for 35–40 minutes. Blend with cooking water to a thick cream."],
        ["Sofríe la chalota en aceite y mantequilla. Añade la crema de calabaza. Añade la canela, ajusta de sal.", "Sweat the shallot in oil and butter. Add the pumpkin cream. Add the cinnamon and adjust the salt."],
        ["Escurre los gnocchi directamente en la crema. Saltea 1 minuto.", "Drain the gnocchi straight into the cream. Toss for 1 minute."],
        ["Emplata. Tamiza el cacao amaro en polvo generosamente encima del plato — directamente sobre los gnocchi emplatados, fuera del fuego, en el último momento. Hilo de aceite de oliva.",
         "Plate. Sift the cocoa powder generously over the dish — straight onto the plated gnocchi, off the heat, at the last moment. A drizzle of olive oil."]
      ],
      note: ["El cacao va al final, espolvoreado sobre el plato terminado — no dentro de la salsa. Así conserva todos sus aromas. Sin queso — el cacao y el parmesano no van juntos. La pureza de este plato está en no añadir nada que no deba estar. Menos es más, siempre.",
             "The cocoa goes on at the end, dusted over the finished plate — not into the sauce. That way it keeps all its aroma. No cheese — cocoa and Parmesan don't go together. The purity of this dish lies in adding nothing that shouldn't be there. Less is more, always."]
    },
    {
      kind: "recipe", id: "cabra-miel", n: 25, season: ["Bonus", "Bonus"],
      title: ["Gnocchi con queso de cabra y miel", "Gnocchi with goat's cheese and honey"],
      lead: [["A veces los mejores platos son los que no necesitan explicación. Este es uno de ellos.", "Sometimes the best dishes are the ones that need no explanation. This is one of them."]],
      serves: 4,
      ing: [
        ["[[180]] g de queso de cabra fresco (rulo)", "[[180]] g fresh goat's cheese (log)"],
        ["[[3-4]] cucharadas de miel de buena calidad (de acacia, de romero o de flores silvestres)", "[[3-4]] tablespoons good-quality honey (acacia, rosemary or wildflower)"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Agua de cocción de los gnocchi", "Gnocchi cooking water"],
        ["Pimienta negra generosa", "Plenty of black pepper"],
        ["Nueces o pistachos (opcional)", "Walnuts or pistachios (optional)"],
        ["Gnocchi de patata para [[4]] personas", "Potato gnocchi for [[4]] people"]
      ],
      steps: [
        ["En un bol, desmenuza el queso de cabra. Añade unas cucharadas de agua de cocción caliente — el almidón crea una base cremosa sin cocinar nada.",
         "In a bowl, crumble the goat's cheese. Add a few spoonfuls of hot cooking water — the starch creates a creamy base without cooking anything."],
        ["Escurre los gnocchi directamente en el bol. Mezcla con cuidado — no buscamos una crema uniforme, sino trozos que se fundan más o menos según el calor.",
         "Drain the gnocchi straight into the bowl. Mix gently — we're not after a uniform cream, but pieces that melt more or less depending on the heat."],
        ["Emplata. Vierte la miel directamente sobre el plato — en hilo, con generosidad. No mezcles la miel dentro: va encima, visible, brillante.",
         "Plate. Pour the honey directly over the dish — in a thin stream, generously. Don't mix the honey in: it goes on top, visible, glossy."],
        ["Pimienta negra muy generosa. Aceite de oliva. Nueces o pistachos si quieres crujiente.", "Lots of black pepper. Olive oil. Walnuts or pistachios if you want crunch."]
      ],
      note: ["La miel de acacia es la más neutra y delicada. La de romero o flores silvestres añade más carácter. Con este plato aprendí que la cocina más difícil es la más simple — porque no hay donde esconderse.",
             "Acacia honey is the most neutral and delicate. Rosemary or wildflower honey adds more character. This dish taught me that the hardest cooking is the simplest — because there's nowhere to hide."]
    },

    /* ================================================================ */
    {
      kind: "section", id: "seccion-5", num: 5,
      title: ["Los entrantes de Brera", "Brera's starters"],
      subtitle: ["Lo que llega antes de los gnocchi — y que a veces roba el protagonismo", "What comes before the gnocchi — and sometimes steals the show"]
    },
    {
      kind: "recipe", id: "pan-tomate", n: 26, img: "img/pan-tomate.jpg",
      title: ["Pan con tomate \"Brera\"", "\"Brera\" bread with tomato"],
      lead: [["La versión italiana del pa amb tomàquet catalán. O la versión catalana del pane al pomodoro italiano. Depende de a quién le preguntes. A mí me da igual — está bueno. Pero la mía es una milhojas.",
              "The Italian version of Catalan pa amb tomàquet. Or the Catalan version of Italian pane al pomodoro. Depends who you ask. I don't mind — it's good. But mine is a mille-feuille."]],
      serves: 4,
      ing: [
        ["[[8]] rectángulos de pane carasau sardo", "[[8]] rectangles of Sardinian pane carasau"],
        ["[[300]] g de tomates cherry maduros", "[[300]] g ripe cherry tomatoes"],
        ["[[1]] chalota", "[[1]] shallot"],
        ["Pesto de albahaca (la receta de la Sección 2 — sin queso dentro)", "Basil pesto (the recipe in Section 2 — no cheese in it)"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Sal Maldon", "Maldon salt"],
        ["Pimienta negra recién molida", "Freshly ground black pepper"]
      ],
      steps: [
        ["Corta los tomates cherry por la mitad. Pela y lamina finamente la chalota. Aliña ambos con aceite, sal Maldon y pimienta. Deja macerar 10 minutos.",
         "Halve the cherry tomatoes. Peel and thinly slice the shallot. Dress both with oil, Maldon salt and pepper. Leave to marinate for 10 minutes."],
        ["Prepara el pesto según la receta de la Sección 2.", "Make the pesto following the recipe in Section 2."],
        ["Sobre el primer rectángulo de pane carasau, distribuye una capa de tomates cherry con chalota y una cucharadita de pesto.",
         "On the first rectangle of pane carasau, spread a layer of cherry tomatoes with shallot and a teaspoon of pesto."],
        ["Coloca el segundo rectángulo encima y repite — tomates, chalota, pesto.", "Place the second rectangle on top and repeat — tomatoes, shallot, pesto."],
        ["Continúa hasta completar 4 capas por ración. Termina con aceite, sal Maldon y pimienta negra. Sirve inmediatamente.",
         "Continue until you have 4 layers per serving. Finish with oil, Maldon salt and black pepper. Serve immediately."]
      ],
      note: ["El pane carasau es el pan plano sardo, finísimo y crujiente — lo encuentras en tiendas italianas y cada vez más en supermercados medianos. Su textura quebradiza es la clave estructural de este plato. La chalota cruda marinada con los tomates añade un punto fresco que el ajo no daría. Este plato nació como homenaje a dos culturas en un solo plato — italiana y catalana, sin que ninguna gane.",
             "Pane carasau is the Sardinian flatbread, paper-thin and crisp — you'll find it in Italian shops and, more and more, in mid-sized supermarkets. Its brittle texture is the structural key to this dish. The raw shallot marinated with the tomatoes adds a freshness garlic wouldn't give. This dish was born as a tribute to two cultures on one plate — Italian and Catalan, with neither one winning."]
    },
    {
      kind: "recipe", id: "parmigiana", n: 27, img: "img/parmigiana.jpg",
      title: ["Parmigiana di Mirko", "Parmigiana di Mirko"],
      lead: [
        ["La parmigiana es el plato de la discordia en Italia. Esta es la mía — y no acepto sugerencias.", "Parmigiana is Italy's great bone of contention. This is mine — and I'm not taking suggestions."],
        ["No es la parmigiana clásica en capas. Es mi versión — berenjena frita en trozos, salteada en salsa de tomate, con parmesano tostado con el soplete y pesto al final.",
         "It's not the classic layered parmigiana. It's my version — fried aubergine in chunks, tossed in tomato sauce, with blowtorched Parmesan and pesto at the end."]
      ],
      serves: 4,
      ing: [
        ["[[2]] berenjenas grandes", "[[2]] large aubergines"],
        ["Passata de tomate de buena calidad", "Good-quality tomato passata"],
        ["[[1]] cebolla", "[[1]] onion"],
        ["Parmesano rallado abundante", "Plenty of grated Parmesan"],
        ["Pesto de albahaca (la receta de la Sección 2)", "Basil pesto (the recipe in Section 2)"],
        ["Aceite de girasol para freír", "Sunflower oil for frying"],
        ["Sal, pimienta, azúcar (una pizca), albahaca fresca", "Salt, pepper, sugar (a pinch), fresh basil"]
      ],
      steps: [
        ["Antes de cortar las berenjenas, comprueba su firmeza al tacto. Si están duras, hazles un masaje — hazlas rodar bajo la palma de la mano con una presión suave sobre la superficie de trabajo, como cuando formas los cilindros de los gnocchi antes de cortarlos, hasta que notes que se ablandan. Estás rompiendo las fibras internas.",
         "Before cutting the aubergines, check how firm they are. If they're hard, give them a massage — roll them under your palm with gentle pressure on the work surface, as when you roll gnocchi logs before cutting, until you feel them soften. You're breaking down the inner fibres."],
        ["Corta las berenjenas en trozos irregulares — como patatas bravas. Sin sal previa, directamente a freír.", "Cut the aubergines into irregular chunks — like patatas bravas. No salting first; straight into the fryer."],
        ["Fríe los trozos en aceite de girasol abundante a 160–170°C hasta que estén dorados y crujientes. Escurre sobre papel de cocina.",
         "Fry the chunks in plenty of sunflower oil at 160–170°C until golden and crisp. Drain on kitchen paper."],
        ["Prepara la salsa de tomate exactamente como en la receta de los gnocchi al pomodoro de la Sección 2.", "Make the tomato sauce exactly as in the gnocchi al pomodoro recipe in Section 2."],
        ["Saltea los trozos de berenjena frita en la sartén con la salsa de tomate a fuego vivo durante 2 minutos.", "Toss the fried aubergine in the pan with the tomato sauce over high heat for 2 minutes."],
        ["Emplata. Espolvorea parmesano rallado abundantemente y tuesta con el soplete hasta obtener una costra dorada y ligeramente ahumada. Termina con el pesto de albahaca. Sirve inmediatamente.",
         "Plate. Sprinkle generously with grated Parmesan and blowtorch it to a golden, slightly smoky crust. Finish with the basil pesto. Serve immediately."]
      ],
      note: ["El truco del masaje a la berenjena es uno de esos gestos de cocina que no están en ningún libro — lo aprendes tocando, sintiendo. El soplete sobre el parmesano no es solo estética — ese toque ahumado es parte del sabor del plato. El pesto final — frío, verde, fresco — contrasta con el calor del parmesano tostado. Es el mismo contraste de temperaturas que aparece en otros platos de Brera.",
             "The aubergine massage is one of those kitchen gestures you won't find in any book — you learn it by touch, by feel. The blowtorch on the Parmesan isn't just for looks — that smoky edge is part of the flavour. The pesto at the end — cold, green, fresh — contrasts with the heat of the toasted Parmesan. It's the same temperature contrast that appears in other Brera dishes."]
    },
    {
      kind: "recipe", id: "burrata", n: 28, img: "img/burrata.jpg",
      title: ["Burrata con crema de maíz", "Burrata with sweetcorn cream"],
      lead: [["El plato que más fotografiaban en Brera. Ese blanco sobre amarillo dorado detenía cualquier conversación — primero la foto, luego la cuchara.",
              "The most photographed dish at Brera. That white on golden yellow stopped any conversation — first the photo, then the spoon."]],
      serves: 4,
      ing: [
        ["[[2]] burratas frescas (125 g cada una)", "[[2]] fresh burratas (125 g each)"],
        ["[[400]] g de maíz dulce (fresco de mazorca o congelado — no en lata)", "[[400]] g sweetcorn (fresh off the cob or frozen — not tinned)"],
        ["[[1]] chalota", "[[1]] shallot"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"],
        ["Agua o caldo vegetal", "Water or vegetable stock"],
        ["Sal, pimienta blanca", "Salt, white pepper"],
        ["Pimienta negra recién molida para servir", "Freshly ground black pepper to serve"],
        ["Pan tostado para acompañar", "Toasted bread on the side"]
      ],
      steps: [
        ["Sofríe la chalota picada en aceite. Añade el maíz y cocina 5 minutos.", "Sweat the chopped shallot in oil. Add the corn and cook for 5 minutes."],
        ["Tritura todo con agua o caldo hasta obtener una crema completamente lisa. Ajusta de sal. La crema debe quedar densa pero fluida.",
         "Blend everything with water or stock to a completely smooth cream. Season with salt. The cream should be thick but pourable."],
        ["Sirve la crema de maíz en el plato — a temperatura ambiente o ligeramente tibia, nunca caliente.", "Spoon the corn cream onto the plate — at room temperature or slightly warm, never hot."],
        ["Coloca la burrata entera en el centro de la crema. Pimienta negra generosa, hilo de aceite.", "Place the whole burrata in the centre of the cream. Plenty of black pepper, a drizzle of oil."],
        ["Sirve con pan tostado al lado.", "Serve with toasted bread on the side."]
      ],
      note: ["La burrata debe estar a temperatura ambiente — sacada de la nevera 20–30 minutos antes de servir. Una burrata fría de nevera no tiene el mismo sabor ni textura. El maíz en lata no funciona aquí — tiene demasiada agua y azúcar añadida. Fresco o congelado, siempre.",
             "The burrata must be at room temperature — out of the fridge 20–30 minutes before serving. A fridge-cold burrata doesn't have the same flavour or texture. Tinned corn doesn't work here — it has too much water and added sugar. Fresh or frozen, always."],
      after: [{
        h: ["La sugerencia del chef: Frico con burrata", "The chef's suggestion: Frico with burrata"],
        body: [["Este plato nació un sábado por la noche, al final de un servicio muy intenso, con un hambre absurda y solo dos cosas que habían sobrado: un frico y una burrata. Lo preparé, lo comí, y en ese momento supe que tenía que estar en el menú. El frico caliente y crujiente debajo, la burrata fría y cremosa encima — el contraste de temperaturas y texturas era perfecto. A veces los mejores platos no se planifican — suceden.",
                "This dish was born on a Saturday night, at the end of a very intense service, with an absurd hunger and only two things left over: a frico and a burrata. I put it together, ate it, and knew right then it had to be on the menu. The hot, crisp frico underneath, the cold, creamy burrata on top — the contrast of temperatures and textures was perfect. Sometimes the best dishes aren't planned — they happen."]]
      }]
    },
    {
      kind: "recipe", id: "frico", n: 29, img: "img/frico.jpg",
      title: ["Frico", "Frico"],
      lead: [["Un plato friulano que aprendí trabajando en un restaurante friulano en Milán. Llegó a Barcelona conmigo, y aquí se quedó.",
              "A Friulian dish I learned working in a Friulian restaurant in Milan. It came to Barcelona with me, and here it stayed."]],
      serves: 4,
      ing: [
        ["[[500]] g de patatas harinosas", "[[500]] g floury potatoes"],
        ["[[200]] g de parmesano rallado (o Montasio si lo encuentras)", "[[200]] g grated Parmesan (or Montasio if you can find it)"],
        ["[[1]] cebolla mediana", "[[1]] medium onion"],
        ["Aceite de oliva", "Olive oil"],
        ["Sal, pimienta negra", "Salt, black pepper"]
      ],
      steps: [
        ["Cuece las patatas con piel en agua con sal. Pélalas en caliente y aplástalas con un tenedor — con textura, no un puré liso.",
         "Boil the potatoes, skin on, in salted water. Peel them while hot and crush them with a fork — with texture, not a smooth purée."],
        ["Sofríe la cebolla picada finamente en aceite a fuego suave durante 15 minutos hasta que esté completamente blanda. Mezcla con las patatas. Ajusta de sal y pimienta.",
         "Gently fry the finely chopped onion in oil over low heat for 15 minutes until completely soft. Mix with the potatoes. Season with salt and pepper."],
        ["Incorpora el parmesano a la mezcla. Mezcla bien.", "Add the Parmesan to the mixture. Mix well."],
        ["En una sartén antiadherente con un hilo de aceite, vierte la mezcla formando una torta de 1,5–2 cm de altura. Cocina a fuego medio-bajo durante 8–10 minutos hasta que la base esté dorada y crujiente.",
         "In a non-stick pan with a drizzle of oil, spread the mixture into a cake 1.5–2 cm thick. Cook over medium-low heat for 8–10 minutes until the base is golden and crisp."],
        ["Da la vuelta con cuidado ayudándote de un plato y cocina el otro lado otros 8 minutos.", "Carefully flip it using a plate and cook the other side for another 8 minutes."]
      ],
      note: ["El secreto del frico perfecto es la paciencia con el fuego — medio-bajo, sin prisa. Usaba parmesano porque el Montasio no siempre llegaba de mis proveedores — y funcionaba igualmente bien. A veces las limitaciones mejoran las recetas.",
             "The secret of the perfect frico is patience with the heat — medium-low, no rush. I used Parmesan because Montasio didn't always arrive from my suppliers — and it worked just as well. Sometimes limitations make recipes better."]
    },
    {
      kind: "recipe", id: "lengua", n: 30,
      title: ["Lengua de ternera con salsa de atún", "Veal tongue with tuna sauce"],
      lead: [["El plato que más dividía la mesa. La mitad lo pedía sin leer la descripción. La otra mitad lo pedía después de ver el plato del vecino. Salsa fría, lengua caliente marcada en sartén. Ese contraste de temperatura es la firma del plato.",
              "The dish that divided the table most. Half ordered it without reading the description. The other half ordered it after seeing the next table's plate. Cold sauce, hot pan-seared tongue. That temperature contrast is the dish's signature."]],
      serves: 4,
      ing: [
        ["[[600]] g de lengua de ternera entera", "[[600]] g whole veal tongue"],
        ["[[300]] g de atún de muy buena calidad en aceite de oliva", "[[300]] g very good tuna in olive oil"],
        ["[[2-3]] filetes de anchoa (opcional, pero recomendado)", "[[2-3]] anchovy fillets (optional, but recommended)"],
        ["Sal Maldon", "Maldon salt"],
        ["Pimienta negra recién molida", "Freshly ground black pepper"],
        ["Aceite de oliva virgen extra", "Extra virgin olive oil"]
      ],
      steps: [
        ["Cuece la lengua en agua con sal, laurel, zanahoria y cebolla durante 2,5–3 horas hasta que esté completamente tierna. Pela la piel exterior mientras aún está caliente. Deja enfriar. Lonchea en lonchas gruesas. (En el restaurante la cocinaba al vacío con el roner a baja temperatura — en casa la cocción hervida funciona perfectamente.)",
         "Simmer the tongue in salted water with bay leaf, carrot and onion for 2.5–3 hours until completely tender. Peel off the outer skin while it's still hot. Let it cool. Cut into thick slices. (At the restaurant I cooked it sous vide with the roner at low temperature — at home, boiling works perfectly.)"],
        ["Para la salsa de atún: escurre bien el atún. Tritúralo solo, ajustando la consistencia con un poco del aceite del propio atún hasta obtener una crema densa. Añade las anchoas si las usas y tritura de nuevo. Ajusta de sal y pimienta. Sin más — simple, directo.",
         "For the tuna sauce: drain the tuna well. Blend it on its own, adjusting the consistency with a little of the tuna's own oil until you have a thick cream. Add the anchovies if using and blend again. Season with salt and pepper. Nothing more — simple, direct."],
        ["Extiende la salsa de atún fría en el fondo del plato generosamente.", "Spread the cold tuna sauce generously over the base of the plate."],
        ["Marca las lonchas gruesas de lengua en una sartén muy caliente con un hilo de aceite — vuelta y vuelta, creando costra en ambas caras. Córtalas en trozos y colócalas sobre la salsa fría inmediatamente.",
         "Sear the thick slices of tongue in a very hot pan with a drizzle of oil — a quick turn on each side, building a crust on both faces. Cut them into pieces and lay them on the cold sauce immediately."],
        ["Sal Maldon y pimienta negra directamente sobre la lengua caliente. Hilo de aceite. Sirve de inmediato.", "Maldon salt and black pepper straight onto the hot tongue. A drizzle of oil. Serve at once."]
      ],
      note: ["La salsa de atún de Brera no tiene nada más que atún de calidad y sus propios aceites — sin mayonesa, sin alcaparras, sin limón. La pureza es lo que la hace diferente. Las anchoas no se perciben como tales, pero dan una profundidad que sin ellas no existe. El contraste entre la salsa fría y la lengua caliente marcada en sartén — ese es el plato. No cambies nada.",
             "Brera's tuna sauce has nothing but good tuna and its own oil — no mayonnaise, no capers, no lemon. The purity is what makes it different. You can't taste the anchovies as such, but they give a depth that isn't there without them. The contrast between the cold sauce and the hot, pan-seared tongue — that's the dish. Don't change a thing."]
    },

    /* ================================================================ */
    {
      kind: "section", id: "seccion-6", num: 6, img: "img/postres.jpg",
      title: ["El postre final", "The final dessert"],
      subtitle: ["El final que merece el principio", "An ending worthy of the beginning"],
      body: [["En el Brera los postres eran dos — siempre los mismos, siempre perfectos. Y un tercero que nació para este libro.",
              "At Brera there were two desserts — always the same, always perfect. And a third, born for this book."]]
    },
    {
      kind: "recipe", id: "tiramisu", n: 31,
      title: ["Tiramisù di Mirko", "Tiramisù di Mirko"],
      lead: [["El postre más imitado de Italia. Y el más traicionado. Esta es mi versión — sin nata montada, sin gelatina, sin atajos. Solo los ingredientes de siempre, en el orden correcto.",
              "Italy's most imitated dessert. And the most betrayed. This is my version — no whipped cream, no gelatine, no shortcuts. Just the usual ingredients, in the right order."]],
      serves: 6, servesLabel: ["6–8", "6–8"],
      ing: [
        ["[[500]] g de mascarpone frío", "[[500]] g cold mascarpone"],
        ["[[4]] huevos frescos (yemas y claras separadas)", "[[4]] fresh eggs (yolks and whites separated)"],
        ["[[100]] g de azúcar", "[[100]] g sugar"],
        ["[[300]] ml de café espresso frío (fuerte — no café de filtro)", "[[300]] ml cold espresso (strong — not filter coffee)"],
        ["[[200]] g de savoiardi (bizcochos de soletilla)", "[[200]] g savoiardi (ladyfingers)"],
        ["Cacao amaro en polvo de buena calidad", "Good-quality unsweetened cocoa powder"],
        ["Una pizca de sal", "A pinch of salt"]
      ],
      steps: [
        ["Bate las yemas con el azúcar hasta obtener una crema pálida, espesa y que forme una cinta al caer — unos 5 minutos con batidora eléctrica.",
         "Beat the yolks with the sugar until pale, thick and falling in a ribbon — about 5 minutes with an electric mixer."],
        ["Incorpora el mascarpone frío a las yemas montadas, cucharada a cucharada, con movimientos suaves y envolventes.", "Fold the cold mascarpone into the beaten yolks, a spoonful at a time, with gentle folding movements."],
        ["Monta las claras a punto de nieve firme con una pizca de sal. Incorpóralas a la crema en tres tandas, con movimientos envolventes.",
         "Whisk the whites to stiff peaks with a pinch of salt. Fold them into the cream in three batches."],
        ["Prepara el café espresso y déjalo enfriar completamente. No uses café caliente — ablanda demasiado los savoiardi.", "Make the espresso and let it cool completely. Don't use hot coffee — it softens the savoiardi too much."],
        ["Sumerge los savoiardi en el café frío brevemente — un segundo por cada lado, no más.", "Dip the savoiardi briefly in the cold coffee — one second per side, no more."],
        ["En una fuente o en vasos individuales, alterna capas: savoiardi empapados — crema de mascarpone. Dos capas son suficientes.",
         "In a dish or individual glasses, alternate layers: soaked savoiardi — mascarpone cream. Two layers are enough."],
        ["Refrigera al menos 4 horas — mejor toda la noche. Cubre con cacao amaro tamizado antes de servir.", "Refrigerate for at least 4 hours — overnight is better. Dust with sifted cocoa before serving."]
      ],
      note: ["El tiramisù mejora siempre de un día para otro. El cacao va tamizado en el último momento antes de servir — así mantiene la textura de polvo seco. En el Brera lo servía en taza — ese recipiente pequeño, con el cacao hasta el borde, era parte de la experiencia.",
             "Tiramisù always improves overnight. The cocoa is sifted on at the last moment before serving — that way it keeps its dry, powdery texture. At Brera I served it in a cup — that small vessel, with cocoa right up to the rim, was part of the experience."]
    },
    {
      kind: "recipe", id: "pannacotta", n: 32,
      title: ["Pannacotta al cioccolato", "Chocolate pannacotta"],
      lead: [["El postre más simple del libro. Y uno de los más difíciles de hacer bien. La pannacotta perfecta tiembla.",
              "The simplest dessert in the book. And one of the hardest to get right. The perfect pannacotta wobbles."]],
      serves: 6,
      ing: [
        ["[[500]] ml de nata para montar (35% materia grasa)", "[[500]] ml whipping cream (35% fat)"],
        ["[[100]] ml de leche entera", "[[100]] ml whole milk"],
        ["[[45]] g de cacao natural en polvo sin azúcar", "[[45]] g natural unsweetened cocoa powder"],
        ["[[50]] g de azúcar", "[[50]] g sugar"],
        ["[[2.5d]] g de agar agar", "[[2.5d]] g agar agar"],
        ["Una pizca de sal", "A pinch of salt"]
      ],
      steps: [
        ["Pon todos los ingredientes juntos en un cazo pequeño en frío. Mezcla antes de encender el fuego para disolver el cacao y el agar agar en frío.",
         "Put all the ingredients together in a small, cold saucepan. Mix before turning on the heat, to dissolve the cocoa and agar agar while cold."],
        ["Calienta a fuego medio removiendo continuamente con una varilla manual hasta llegar casi al punto de ebullición — sin que hierva del todo.",
         "Heat over medium heat, whisking constantly by hand, until it almost reaches the boil — without letting it fully boil."],
        ["Retira del fuego. Vierte en moldes individuales o vasitos. Deja enfriar a temperatura ambiente y luego refrigera al menos 2 horas.",
         "Remove from the heat. Pour into individual moulds or small glasses. Let cool to room temperature, then refrigerate for at least 2 hours."],
        ["Para desmoldar: a diferencia de la gelatina, el agar agar no necesita baño de agua caliente — desmolda directamente.",
         "To unmould: unlike gelatine, agar agar doesn't need a hot-water bath — just turn it out."]
      ],
      note: ["Uso agar agar en lugar de gelatina animal para que este postre sea apto para vegetarianos — en el Brera me importaba que todos pudieran comer todo, o casi todo. El agar agar es un gelificante de origen vegetal extraído de algas marinas, sin sabor propio.",
             "I use agar agar instead of animal gelatine so this dessert is suitable for vegetarians — at Brera it mattered to me that everyone could eat everything, or almost everything. Agar agar is a plant-based gelling agent extracted from seaweed, with no flavour of its own."]
    },
    {
      kind: "recipe", id: "gnocchi-fritos", n: 33,
      title: ["Gnocchi fritos con miel y ricotta", "Fried gnocchi with honey and ricotta"],
      lead: [["Estos gnocchi nunca salieron de la cocina del Brera. Nacen aquí, en estas páginas, como regalo para quien ha llegado hasta el final del libro.",
              "These gnocchi never left Brera's kitchen. They're born here, on these pages, as a gift for whoever has made it to the end of the book."]],
      serves: 4,
      ing: [
        ["Gnocchi de patata preparados con la receta base — unos [[20-24]] gnocchi", "Potato gnocchi made with the base recipe — about [[20-24]] gnocchi"],
        ["Aceite de semillas para freír (abundante)", "Seed oil for frying (plenty)"],
        ["[[3-4]] cucharadas de miel de buena calidad", "[[3-4]] tablespoons good-quality honey"],
        ["[[150]] g de ricotta fresca bien escurrida", "[[150]] g fresh ricotta, well drained"],
        ["Ralladura de limón", "Lemon zest"],
        ["Azúcar glas (opcional)", "Icing sugar (optional)"],
        ["Una pizca de sal Maldon", "A pinch of Maldon salt"]
      ],
      steps: [
        ["Prepara los gnocchi según la receta base pero déjalos secar sobre una superficie enharinada durante 20–30 minutos antes de freír.",
         "Make the gnocchi using the base recipe, but let them dry on a floured surface for 20–30 minutes before frying."],
        ["Calienta el aceite a 170–180°C. Para comprobar la temperatura, sumerge un palillo — si burbujea alrededor, el aceite está listo.",
         "Heat the oil to 170–180°C. To check the temperature, dip in a wooden skewer — if it bubbles around it, the oil is ready."],
        ["Fríe los gnocchi en tandas pequeñas 2–3 minutos hasta que estén dorados. Escurre sobre papel de cocina.", "Fry the gnocchi in small batches for 2–3 minutes until golden. Drain on kitchen paper."],
        ["Trabaja la ricotta con la ralladura de limón y una pizca de sal hasta que quede cremosa.", "Work the ricotta with the lemon zest and a pinch of salt until creamy."],
        ["Emplata los gnocchi fritos calientes con la ricotta al lado. Vierte la miel por encima en hilo generoso. Azúcar glas si quieres el toque final. Sirve inmediatamente.",
         "Plate the hot fried gnocchi with the ricotta alongside. Pour the honey over in a generous stream. Icing sugar if you want a final touch. Serve immediately."]
      ],
      note: ["Los gnocchi fritti deben comerse en el momento — pierden el crujiente en pocos minutos. Este plato nunca estuvo en el menú del restaurante, pero en mi cabeza siempre estuvo. A veces un libro es el lugar donde las ideas que no encontraron su momento finalmente llegan.",
             "Gnocchi fritti must be eaten straight away — they lose their crunch in a few minutes. This dish was never on the restaurant's menu, but in my head it always was. Sometimes a book is the place where ideas that never found their moment finally arrive."]
    },

    /* ================================================================ */
    {
      kind: "section", id: "apendice", title: ["Apéndice", "Appendix"]
    },
    {
      kind: "text", id: "maridajes",
      title: ["Maridajes de vino", "Wine pairings"],
      subtitle: ["Los vinos de Brera con los platos del libro", "Brera's wines with the dishes in this book"],
      body: [
        ["En el Brera tenía una carta de vinos italiana corta y bien pensada. Aquí van mis sugerencias de maridaje — sin complicaciones, sin snobismo.",
         "At Brera I had a short, well-considered Italian wine list. Here are my pairing suggestions — no complications, no snobbery."],
        { h: ["Con los clásicos (pomodoro, ragù, pesto)", "With the classics (pomodoro, ragù, pesto)"] },
        ["Rosso della Casa — un vino tinto joven y frutal que no compite con la salsa. El Primitivo IGP de Puglia funciona perfectamente: tiene cuerpo pero no taninos agresivos.",
         "Rosso della Casa — a young, fruity red that doesn't compete with the sauce. Primitivo IGP from Puglia works perfectly: it has body but no aggressive tannins."],
        { h: ["Con los creativos de calabaza, zafferano, pimientos", "With the creative pumpkin, saffron and pepper dishes"] },
        ["Vino blanco seco con algo de cuerpo — un Chardonnay de Puglia o un Grillo siciliano. La dulzura natural de estos platos pide un blanco que tenga personalidad sin ser demasiado aromático.",
         "A dry white with some body — a Chardonnay from Puglia or a Sicilian Grillo. The natural sweetness of these dishes calls for a white with personality that isn't too aromatic."],
        { h: ["Con la carbonara y el frico", "With the carbonara and the frico"] },
        ["Prosecco DOC — la burbuja limpia el paladar entre bocado y bocado. Es el maridaje más milanés que existe.",
         "Prosecco DOC — the bubbles cleanse the palate between bites. It's the most Milanese pairing there is."],
        { h: ["Con los platos de invierno (topinambur, radicchio, champiñones)", "With the winter dishes (topinambur, radicchio, mushrooms)"] },
        ["Nero d'Avola DOC di Sicilia — más estructurado, con taninos presentes que dialogan con el amargor del radicchio y la profundidad de los champiñones.",
         "Nero d'Avola DOC di Sicilia — more structured, with noticeable tannins that talk to the bitterness of the radicchio and the depth of the mushrooms."],
        { h: ["Con los postres", "With the desserts"] },
        ["Prosecco frío — siempre. O un café espresso. O ambos.", "Cold Prosecco — always. Or an espresso. Or both."]
      ]
    },
    {
      kind: "text", id: "errores",
      title: ["7 errores que arruinan los gnocchi", "7 mistakes that ruin gnocchi"],
      subtitle: ["(y cómo evitarlos)", "(and how to avoid them)"],
      body: [
        { h: ["1. Trabajar demasiado la masa", "1. Overworking the dough"] },
        ["El impasto de gnocchi no se amasa — se integra. Cuanto más trabajas la masa, más gluten desarrollas y más duros quedan. Mezcla solo hasta que los ingredientes se unan. Hasta ahí.",
         "Gnocchi dough isn't kneaded — it's brought together. The more you work it, the more gluten you develop and the tougher they get. Mix only until the ingredients combine. That's it."],
        { h: ["2. No secar bien el puré de patata", "2. Not drying the potato purée enough"] },
        ["La humedad es el enemigo. Patatas con demasiada agua producen una masa pegajosa que necesita más harina — y más harina produce gnocchi duros. Hornea las patatas en lugar de cocerlas, o déjalas secar bien después del pasapurés.",
         "Moisture is the enemy. Watery potatoes make a sticky dough that needs more flour — and more flour makes tough gnocchi. Bake the potatoes instead of boiling them, or let them dry well after ricing."],
        { h: ["3. Añadir toda la harina de golpe", "3. Adding all the flour at once"] },
        ["La cantidad de harina no es exacta — depende de la variedad de patata, de la época del año, de la humedad del día. Empieza siempre con menos de lo que indica la receta y añade poco a poco.",
         "The amount of flour isn't exact — it depends on the potato variety, the time of year, the humidity of the day. Always start with less than the recipe says and add little by little."],
        { h: ["4. Cocer los gnocchi en agua con poca sal", "4. Cooking the gnocchi in under-salted water"] },
        ["El agua de cocción debe saber a mar. Los gnocchi sin sal en el agua quedan insípidos independientemente de la salsa. Y recuerda: esa agua con almidón y sal es el ingrediente secreto de muchas salsas de este libro.",
         "The cooking water should taste like the sea. Gnocchi cooked without salt in the water stay bland whatever the sauce. And remember: that starchy, salty water is the secret ingredient in many of the sauces in this book."],
        { h: ["5. Esperar demasiado antes de saltear", "5. Waiting too long before tossing"] },
        ["Los gnocchi cocidos se pegan entre sí en minutos. En cuanto suben a la superficie, fuera del agua y directamente a la sartén con la salsa. Sin paradas, sin descansos.",
         "Cooked gnocchi stick together within minutes. As soon as they rise to the surface, out of the water and straight into the pan with the sauce. No stops, no breaks."],
        { h: ["6. Poner demasiados gnocchi en la olla", "6. Putting too many gnocchi in the pot"] },
        ["Si la olla está demasiado llena, la temperatura del agua baja y los gnocchi se cuecen en lugar de hervir. Cuece en tandas si es necesario.",
         "If the pot is too full, the water temperature drops and the gnocchi stew instead of boiling. Cook in batches if necessary."],
        { h: ["7. Servir el plato frío", "7. Serving on a cold plate"] },
        ["Los gnocchi se enfrían rápido. El plato caliente antes de emplatar no es un detalle — es parte de la receta. Un gnocchi frío en un plato frío es un gnocchi triste.",
         "Gnocchi cool down fast. Warming the plate before serving isn't a detail — it's part of the recipe. A cold gnocchi on a cold plate is a sad gnocchi."]
      ]
    },
    {
      kind: "text", id: "glosario",
      title: ["Glosario técnico", "Technical glossary"],
      body: [
        { h: ["Acqua di cottura", "Acqua di cottura"] },
        ["El agua de cocción de los gnocchi. Cargada de almidón y sal, es el ingrediente invisible que emulsiona las salsas. En este libro aparece en casi todas las recetas — nunca la tires entera antes de emplatar.",
         "The gnocchi cooking water. Loaded with starch and salt, it's the invisible ingredient that emulsifies the sauces. It appears in almost every recipe in this book — never throw it all away before plating."],
        { h: ["Burro nocciola", "Burro nocciola"] },
        ["Mantequilla tostada hasta que adquiere un color avellana y un aroma a frutos secos. Se obtiene a fuego medio, sin distracciones — la diferencia entre nocciola y quemada es de segundos.",
         "Butter browned until it turns hazelnut-coloured and smells nutty. Made over medium heat, without distractions — the difference between nocciola and burnt is a matter of seconds."],
        { h: ["Mantecatura", "Mantecatura"] },
        ["El movimiento de saltear los gnocchi en la salsa con agua de cocción para que la salsa se adhiera y forme una emulsión cremosa. Es el gesto final que une el gnocchi y la salsa en un solo plato.",
         "The action of tossing the gnocchi in the sauce with cooking water so the sauce clings and forms a creamy emulsion. It's the final gesture that unites gnocchi and sauce into a single dish."],
        { h: ["Pasapurés", "Potato ricer"] },
        ["Herramienta indispensable para el impasto. Nunca uses la batidora para triturar las patatas — el calor de las cuchillas activa el gluten del almidón y el resultado es gomoso.",
         "An indispensable tool for the impasto. Never use a blender to mash the potatoes — the heat and speed of the blades overwork the starch and the result is gummy."],
        { h: ["Roner", "Roner"] },
        ["Aparato de cocción sous vide a baja temperatura. En el Brera lo usaba para la lengua y el atún. En casa no es necesario — las alternativas de las recetas de este libro dan resultados excelentes.",
         "A low-temperature sous vide cooker. At Brera I used it for the tongue and the tuna. At home it isn't necessary — the alternatives in these recipes give excellent results."],
        { h: ["Soffritto tritato", "Soffritto tritato"] },
        ["El soffritto triturado con la batidora antes de añadir la carne al ragù. La técnica de Mirko para obtener un ragù más cremoso y sin trozos de verdura visibles.",
         "Soffritto blended smooth before adding the meat to the ragù. Mirko's technique for a creamier ragù with no visible bits of vegetable."],
        { h: ["Shock termico", "Shock termico"] },
        ["Choque térmico: agua hirviendo seguida de agua con hielo. Se usa para fijar el color verde de la albahaca y de los guisantes. Sin este paso, el color se oxida y se vuelve grisáceo.",
         "Thermal shock: boiling water followed by iced water. Used to set the green colour of basil and peas. Without this step the colour oxidises and turns greyish."]
      ]
    },
    {
      kind: "text", id: "mirko",
      title: ["Dónde encontrar a Mirko", "Where to find Mirko"],
      body: [
        { links: true },
        { sep: true },
        ["Gracias por llegar hasta aquí.", "Thank you for making it this far."],
        ["Estos gnocchi son míos — pero ahora también son tuyos.", "These gnocchi are mine — but now they're yours too."],
        { sign: ["— Mirko", "— Mirko"] },
        { quote: ["No los mejores del mundo. Ciertamente los mejores en Barcelona.", "Not the best in the world. Certainly the best in Barcelona."] }
      ]
    }
  ]
};
