import { lazyScrollIntoView, Loading, SimpleLayout } from 'docs-common'
import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { pagesReq, getPagesRoutes } from '~/entries'

export const PagesRoutes = memo(() => {
  return (
    <Routes>
      <Route path="/components/_" element={<SimpleLayout/>}>
        {getPagesRoutes().map(({ key, route }) => {
          const Component = lazyScrollIntoView(() => pagesReq(key))

          return (
            <Route
              key={key}
              path={route}
              element={(
                <Suspense fallback={<Loading/>}>
                  <Component/>
                </Suspense>
              )}
            />
          )
        })}
      </Route>
      <Route path="*" element={null}/>
    </Routes>
  )
})

PagesRoutes.displayName = 'PagesRoutes'
