import React from 'react'

const context = new WeakMap()

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
    prepareForInline: function prepareForInline(storyFn) {
      // console.log('--PREPARE')

      if(!context.has(storyFn)) {
        // console.log('--CREATE')

        context.set(storyFn, React.createElement("div", {
          ref: function ref(node) {
            if(node !== null) {
              node.appendChild(storyFn())
            }
          }
        }))
      }

      return context.get(storyFn)
    },
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
