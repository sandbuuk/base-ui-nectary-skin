const { readFileSync } = require('fs')

const template = (script, style) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Quickstarts</title>
    <style>
${style}
    </style>
    <style>
      html, body, #sinch-quickstarts-app {
        margin: 0;
        padding: 0;
        min-height: 100vh;
      }
    </style>
    <script>
${script}
    </script>
  </head>
  <body>
    <div id="sinch-quickstarts-app"></div>
    <script>
      "use strict";
      /*
      window.addEventListener('load', () => {
      Quickstarts
        .get('./Container')
        .then(module => module())
        .then(({default: mount}) => {
          mount(document.querySelector("#sinch-quickstarts-app"), {basePath: "/"});
        })
      });*/
    </script>
  </body>
</html>
`

// TODO: Break this out to its own library for reuse across different micro frontends.
module.exports.createTemplate = () => {
  const scopedRegistryPolyfill = readFileSync(require.resolve('@webcomponents/scoped-custom-element-registry'), 'utf-8')
  const themeStyles = readFileSync(require.resolve('@sinch-engage/nectary/theme.css'), 'utf-8')

  return template(scopedRegistryPolyfill, themeStyles)
}
