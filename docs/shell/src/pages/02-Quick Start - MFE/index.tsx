import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "QuickStart" */'./index.md'))

export const QuickStartMFEPage: FC = () => {
  return (
    <SimpleLayout>
      <Component/>
    </SimpleLayout>
  )
}
