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
  options: {
    storySort: {
      order: [
        'Components',
        [
          'Button',
          ['Primary', 'Secondary', 'Cta', 'Destructive']
        ]
      ],
    },
  },
  // previewTabs: {
  //   canvas: {
  //     hidden: true,
  //   },
  // }
}
