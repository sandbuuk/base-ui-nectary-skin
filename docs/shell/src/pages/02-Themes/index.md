# Theme

## Install

```shell
npm install @nectary/theme-base @nectary/theme-message-media ...
```

The following themes libraries are available:

- @nectary/theme-base
- @nectary/theme-dark
- @nectary/theme-message-media
- @nectary/theme-simple-texting
- @nectary/theme-cpaas-base
- @nectary/theme-cpaas-dashboard
- @nectary/theme-cpaas-mailgun
- @nectary/theme-cpaas-mailjet

### For Microfrontends using shadow roots (recommended)

Install the following packages:

1. Dependencies: `npm install @nectary/scoped-stylesheet`
2. devDepencencies: `npm install --save-dev postcss postcss-import postcss-loader`

Make sure to add the following to the webpack rules (Vite & explanation below):

```ts
module.exports = {
  //...
  module: {
    rules: [
      // ...
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-import")],
              },
            },
          },
        ],
        type: "asset/source",
      },
    ],
  },
  // ...
};
```

Or with Vite in vite.config.ts, using just the `postcss-import` plugin:

```ts
import postcssImport from "postcss-import";
import { defineConfig } from "vite";

export default defineConfig({
  // ...
  css: {
    postcss: {
      plugins: [postcssImport()],
    },
  },
});

```

> Explanation: `postcss-loader` and `postcss-import` will help vite/webpack compiling the different theme files into one. Type `type: "asset/source"` will allow css imports to return a string instead of automatically adding a style tag to the head.

In the entry file of your microfrontend, you can do the following:

```tsx
import { ScopedStyleSheet } from "@nectary/scoped-stylesheet";
import baseTheme from "@nectary/theme-base";
import mmTheme from "@nectary/theme-message-media";
import simpleTextingTheme from "@nectary/theme-simple-texting";

const mount = (element) => {
  // ...
  const shadowRoot = // some logic to create the shadowroot
  const appElement = shadowRoot.appendChild(document.createElement("div")); // or other logic for the root element

  const scopedStyleSheet = new ScopedStyleSheet(shadowRoot);
  scopedStyleSheet.addStyle(baseTheme);
  scopedStyleSheet.addStyle(mmTheme);
  scopedStyleSheet.addStyle(simpleTextingTheme);

  appElement.className = "nectary-theme-base nectary-theme-message-media nectary-simple-texting"

  // ... Render app within appElement
}
```

> Explanation: the ScopedStyleSheet will create a stylesheet under your shadow root and make sure that the styles get appended to it rather than to the global stylesheet.

### Apps and Microfrontend without shadow-roots

> !!!! Warning: Not using shadow roots might mean that your micro frontend will import and inject the styles in the head of the documents on each mount and won't erase it. This might lead to potential issues such as unwanted styling elsewhere in the app and performance issues.

Example importing the base theme, assuming that you are using style-loader and css-loader:

```ts
import '@nectary/theme-base'
import '@nectary/theme-message-media'

const App = () => (
  <div id="app" className="nectary-theme-base nectary-theme-message-media">
    ...
  </div>
)
```

## Usage

Usage color palette or custom font face:

```css
span {
  color: var(--sinch-ref-color-honey-700);
}

h2 {
  font: var(--sinch-sys-font-desktop-title-l);
}
```

Usage in components

```jsx
<sinch-text style={{ color: "var(--sinch-ref-color-honey-700)" }}>Hello World</sinch-text>>
```

## Getting the theme class names from the shell

If you're in a MFE loaded by the shell, you can get the classname used by the shell (which should be the correct one for you) using the `@sinch/shell-config` package, like so:

```ts
import { ScopedStyleSheet } from "@nectary/scoped-stylesheet";
import baseTheme from "@nectary/theme-base/index.css?inline";
import cpaasBaseTheme from "@nectary/theme-cpaas-base/index.css?inline";
import cpaasDashboardTheme from "@nectary/theme-cpaas-dashboard/index.css?inline";
import mmTheme from "@nectary/theme-message-media/index.css?inline";
import simpleTextingTheme from "@nectary/theme-simple-texting/index.css?inline";
import { getPortalConfig } from "@sinch/shell-config";

export function loadStyles(shadowRoot: ShadowRoot, appElement: HTMLElement) {
  const classNames = getPortalConfig("themeClassNames") || "nectary-theme-base";
  appElement.className = classNames;

  const scopedStyleSheet = new ScopedStyleSheet(shadowRoot);

  // Load the base theme into the shadowRoot
  scopedStyleSheet.addStyle(baseTheme);

  if (classNames.includes("nectary-theme-simple-texting")) {
    scopedStyleSheet.addStyle(mmTheme);
    scopedStyleSheet.addStyle(simpleTextingTheme);
  } else if (classNames.includes("nectary-theme-message-media")) {
    scopedStyleSheet.addStyle(mmTheme);
  }

  if (classNames.includes("cpaas-theme-base")) {
    scopedStyleSheet.addStyle(cpaasBaseTheme);
  }
  if (classNames.includes("cpaas-theme-dashboard")) {
    scopedStyleSheet.addStyle(cpaasDashboardTheme);
  }
}
```

## Example

As for everything in this guide, you can refer to the [MFE template](https://gitlab.com/sinch/sinch-projects/applications/teams/core/mfe-template) that we maintain to be using the most up to date set up for Nectary.
