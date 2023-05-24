import { Code } from '../Code'
import type { FC } from 'react'
import './styles.css'

export type TExample = {
  Component: FC,
  isInverted?: boolean,
  shouldHideCode?: boolean,
}

export const Example: FC<TExample> = ({ Component, isInverted, shouldHideCode }) => {
  return (
    <div className="example">
      <section className={`example-container ${isInverted === true ? 'inverted' : ''}`}>
        <Component/>
      </section>
      {shouldHideCode !== true && <Code src={Component.toString()}/>}
    </div>
  )
}
