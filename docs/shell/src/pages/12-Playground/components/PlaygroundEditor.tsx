import Editor, { loader } from '@monaco-editor/react'
import { editorOptions } from '../config/constants'
import { configureMonaco } from '../config/monaco-config'
import type { FC } from 'react'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs',
  },
})

interface PlaygroundEditorProps {
  code: string,
  onChange: (value: string | undefined) => void,
}

export const PlaygroundEditor: FC<PlaygroundEditorProps> = ({ code, onChange }) => {
  return (
    <Editor
      height="100%"
      language="typescript"
      path="playground.tsx"
      value={code}
      onChange={onChange}
      beforeMount={configureMonaco}
      theme="nectary-dark"
      options={editorOptions}
    />
  )
}
