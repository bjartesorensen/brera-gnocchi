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
- Contents menu, light/dark mode, print styles. The page remembers your language and
  servings in the browser.

## Deploying

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
