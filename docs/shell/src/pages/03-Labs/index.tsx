import { SimpleLayout, lazyScrollIntoView } from 'docs-common'
import type { FC } from 'react'

const Component = lazyScrollIntoView(() => import(/* webpackChunkName: "Labs" */'./index.md'))

export const LabsPage: FC = () => {
  return (
    <SimpleLayout>
      <Component/>
    </SimpleLayout>
  )
}
