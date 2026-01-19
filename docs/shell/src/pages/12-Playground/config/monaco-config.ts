import type { Monaco } from '@monaco-editor/react'

export const configureMonaco = (monaco: Monaco): void => {
  // Define custom Nectary dark theme based on Nectary's design tokens
  monaco.editor.defineTheme('nectary-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      // Comments - muted neutral
      { token: 'comment', foreground: '808A91', fontStyle: 'italic' },
      { token: 'comment.block', foreground: '808A91', fontStyle: 'italic' },
      { token: 'comment.line', foreground: '808A91', fontStyle: 'italic' },

      // Keywords - tropical (primary brand color)
      { token: 'keyword', foreground: '51B8A6' },
      { token: 'keyword.control', foreground: '51B8A6' },
      { token: 'keyword.operator', foreground: 'C9D1D6' },

      // Strings - grass (green for success/strings)
      { token: 'string', foreground: '6FD56A' },
      { token: 'string.quoted', foreground: '6FD56A' },
      { token: 'string.template', foreground: '6FD56A' },

      // Numbers - pumpkin (warm accent)
      { token: 'number', foreground: 'FCA63F' },
      { token: 'constant.numeric', foreground: 'FCA63F' },

      // Types/Classes - ocean (blue)
      { token: 'type', foreground: '61ABFF' },
      { token: 'type.identifier', foreground: '61ABFF' },
      { token: 'entity.name.type', foreground: '61ABFF' },
      { token: 'support.type', foreground: '61ABFF' },

      // Functions - violet
      { token: 'entity.name.function', foreground: 'A89BFA' },
      { token: 'support.function', foreground: 'A89BFA' },

      // Variables - neutral light
      { token: 'variable', foreground: 'F7F9FA' },
      { token: 'variable.other', foreground: 'F7F9FA' },
      { token: 'identifier', foreground: 'F7F9FA' },

      // JSX/HTML tags - tropical
      { token: 'tag', foreground: '51B8A6' },
      { token: 'tag.html', foreground: '51B8A6' },
      { token: 'tag.xml', foreground: '51B8A6' },
      { token: 'metatag', foreground: '51B8A6' },

      // JSX attributes - ocean
      { token: 'attribute.name', foreground: '61ABFF' },
      { token: 'attribute.value', foreground: '6FD56A' },

      // Punctuation/Operators
      { token: 'delimiter', foreground: 'C9D1D6' },
      { token: 'delimiter.bracket', foreground: 'C9D1D6' },
      { token: 'operator', foreground: '51B8A6' },

      // Constants
      { token: 'constant', foreground: 'FCA63F' },
      { token: 'constant.language', foreground: 'EB83CF' },

      // Regex
      { token: 'regexp', foreground: 'EB83CF' },
    ],
    colors: {
      // Editor background - neutral 950 (very dark)
      'editor.background': '#14181C',
      // Foreground - neutral 50 (almost white)
      'editor.foreground': '#F7F9FA',
      // Line numbers - neutral 500
      'editorLineNumber.foreground': '#808A91',
      'editorLineNumber.activeForeground': '#C9D1D6',
      // Cursor - tropical 400
      'editorCursor.foreground': '#51B8A6',
      // Selection - tropical with transparency
      'editor.selectionBackground': '#06998B40',
      'editor.inactiveSelectionBackground': '#06998B20',
      // Line highlight
      'editor.lineHighlightBackground': '#1A212620',
      'editor.lineHighlightBorder': '#272F3680',
      // Gutter
      'editorGutter.background': '#14181C',
      // Scrollbar
      'scrollbarSlider.background': '#4B575E40',
      'scrollbarSlider.hoverBackground': '#4B575E80',
      'scrollbarSlider.activeBackground': '#4B575EA0',
      // Matching brackets - tropical
      'editorBracketMatch.background': '#06998B30',
      'editorBracketMatch.border': '#51B8A6',
      // Find match - pumpkin
      'editor.findMatchBackground': '#FCA63F40',
      'editor.findMatchHighlightBackground': '#FCA63F20',
      // Widget (autocomplete, hover)
      'editorWidget.background': '#1A2126',
      'editorWidget.border': '#4B575E',
      'editorSuggestWidget.background': '#1A2126',
      'editorSuggestWidget.border': '#4B575E',
      'editorSuggestWidget.selectedBackground': '#272F36',
      // Minimap
      'minimap.background': '#14181C',
    },
  })

  // Configure TypeScript compiler options for JSX syntax highlighting
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    jsx: monaco.languages.typescript.JsxEmit.React,
    jsxFactory: 'React.createElement',
    jsxFragmentFactory: 'React.Fragment',
    allowNonTsExtensions: true,
    allowJs: true,
    strict: false,
    noEmit: true,
    esModuleInterop: true,
    skipLibCheck: true,
  })

  // Disable type checking - the playground provides JSX syntax highlighting
  // but full type checking would require bundled .d.ts files for Nectary components
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false,
  })
}
