# Gnocchi sin reglas · Gnocchi Without Rules

Mirko Italiano's recipe book from Brera Gnocchi Bar, Barcelona, as a bilingual
web page: Spanish on the left, English on the right. You can change the quantities.

## Features

- **Parallel text**: each paragraph, ingredient and step sits next to its translation.
  Switch between `ES`, `ES | EN` and `EN` in the top bar. On phones the two languages
  stack, one paragraph under the other.
- **Adjustable quantities**: every recipe has its own servings stepper. The one in the
  top bar sets every recipe at once. Scaled amounts are highlighted, and `↺ original`
  brings the recipe back to the book's quantities.
- **Keep screen on (☀)**: stops the phone screen from turning off while you cook. It uses
  the browser's Screen Wake Lock (iPhone Safari 16.4+, Chrome/Android) and needs HTTPS. The
  button only appears where the browser supports it.
- Contents menu, light/dark mode, print styles. The page remembers your language and
  servings in the browser.

## Deploying

It's meant to go in a folder such as `/gnocchi/` on an existing site. It's private in two ways:
you need a password to open it, and search engines are told not to index it.

**Password** (HTTP Basic Auth, handled by the web server):

- *Apache*: the included `.htaccess` turns it on. Create the password file (ideally outside
  the web root), then put its absolute path in `AuthUserFile`:
  `htpasswd -c /absolute/path/.htpasswd brera`
- *nginx*: `.htaccess` is ignored, so copy the block from `nginx.conf.example` into the site's
  server config and reload nginx.

**Not crawlable**:

- a `noindex, nofollow` meta tag in `index.html`
- an `X-Robots-Tag` header, set by `.htaccess` or the nginx block
- behind the password, crawlers can't read anything anyway

`robots.txt` only has an effect at the domain root. If you want it, copy its rule into the
bikini site's own `robots.txt` as `Disallow: /gnocchi/`. Note that a `Disallow` line publicly
lists the folder's path, and the password and noindex are already enough.

**Upload**: copy `index.html`, `css/`, `js/`, `img/` and `.htaccess` into the folder.

It is a static site with no build step. Copy the whole folder (`index.html`, `css/`,
`js/`, `img/`) to any web server, or turn on GitHub Pages for the branch.

To preview it locally:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Editing the text

All the content is in `js/book.js`. Every text is a `["español", "English"]` pair.
Put a quantity in double brackets to make it scale with servings:

- `[[600]]` is a single amount
- `[[150-180]]` is a range
- `[[2.5d]]` shows decimals instead of fractions

Anything outside the brackets stays fixed, such as times, temperatures and sizes.
