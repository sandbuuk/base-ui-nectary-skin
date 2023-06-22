import { Code } from 'docs-common'

const tokenColor = {
  'my-amazing-token-color-name': {
    value: '007171',
    type: 'color',
    description: 'This is a color',
  },
}

const tokenRadius = {
  'my-amazing-token-radius-name': {
    value: '8',
    type: 'borderRadius',
    description: 'This is a border radius',
  },
}

export const TokenSnippets = () =>
  (
    <div id="token-snippets-grid">
      <div id="token-snippets-grid-left-item" style={{ width: '100%' }}>
        <Code src={JSON.stringify(tokenColor, null, 2)}/>
      </div>
      <div id="token-snippets-grid-right-item" style={{ width: '100%' }}>
        <Code src={JSON.stringify(tokenRadius, null, 2)}/>
      </div>
    </div>
  )
