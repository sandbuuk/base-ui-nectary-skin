export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true,
    source: {
      state: 'open',
     },
  },
  viewMode: 'docs',
  // previewTabs: {
  //   canvas: {
  //     hidden: true,
  //   },
  // }
}
