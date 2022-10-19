import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Code } from '../Code'
import type { FC } from 'react'
import './styles.css'

export type TExample = {
  Component: FC,
}

export const Example: FC<TExample> = ({ Component }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    try {
      const shadowRoot = ref.current!.attachShadow({
        mode: 'closed',
      })

      createRoot(shadowRoot).render(<Component/>)
    } catch {}
  }, [])

  return (
    <div className="example">
      <section className="example-container" ref={ref}/>
      <Code src={Component.toString()} title="Code"/>
    </div>
  )
}
