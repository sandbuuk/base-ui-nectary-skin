import { useEffect, useRef } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Code } from '../Code'
import type { FC } from 'react'
import './styles.css'

export type TExample = {
  Component: FC,
}

export const Example: FC<TExample> = ({ Component }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shadowRoot = ref.current!.attachShadow({
      mode: 'closed',
    })

    render(<Component/>, shadowRoot)

    return () => {
      unmountComponentAtNode(shadowRoot)
    }
  }, [])

  return (
    <div className="example">
      <section className="example-container" ref={ref}/>
      <Code src={Component.toString()} title="Code"/>
    </div>
  )
}
