import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { quickStartList } from './quick-start-list'
import type { QuickStart } from './types'

export const QuickStartsPages = () => {
  const params = useParams()
  const PageComponent: QuickStart['page'] = quickStartList[params.id as keyof typeof quickStartList]?.page

  if (PageComponent == undefined) {
    return <div>404</div>
  }

  // TODO: Should probably be some nicer looking loading component here.. :)
  return <Suspense fallback={<h3>Loading</h3>}><PageComponent/></Suspense>
}
