import { Code } from '../Code'
import type { FC } from 'react'

export type TExample = {
  Component: FC<{}>,
}

export const Example: FC<TExample> = ({ Component }) => (
  <>
    <Component/>
    <Code src={Component.toString()} title="Code"/>
  </>
)
