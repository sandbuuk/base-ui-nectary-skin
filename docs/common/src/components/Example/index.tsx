import { Code } from '../Code'
import type { FC } from 'react'
import './styles.css'

export type TExample = {
  Component: FC,
  isInverted?: boolean,
}

export const Example: FC<TExample> = ({ Component, isInverted }) => {
  return (
    <div className="example">
      <section className={`example-container ${isInverted === true ? 'inverted' : ''}`}>
        <Component/>
      </section>
      <Code src={Component.toString()}/>
    </div>
  )
}
