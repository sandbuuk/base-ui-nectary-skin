import { useEffect, useRef } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Code } from '../Code'
import type { FC } from 'react'

export type TExample = {
  Component: FC<{}>,
}

export const Example: FC<TExample> = ({ Component }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shadowRoot = ref.current!.attachShadow({
      mode: 'closed',
    })

    render(
      (
        <>
          <Component/>
          <Code src={Component.toString()} title="Code"/>
        </>
      ),
      shadowRoot
    )

    return () => {
      unmountComponentAtNode(shadowRoot)
    }
  }, [])

  return (
    <section className="example" ref={ref}/>
  )
}
