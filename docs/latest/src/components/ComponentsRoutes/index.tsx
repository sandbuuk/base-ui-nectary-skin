import { lazyScrollIntoView, Loading, TabsLayout } from 'docs-common'
import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../NotFound'
import { componentReq, getComponentsRoutes, getPagesRoutes, getRouteTabs, getRouteTitle, pagesReq } from '~/entries'

export const ComponentsRoutes = memo(() => {
  return (
    <Routes>
      <Route
        path="/components"
        element={(
          <TabsLayout
            getRouteTabs={getRouteTabs}
            getRouteTitle={getRouteTitle}
          />
        )}
      >
        {getComponentsRoutes().map(({ key, route }) => {
          const Component = lazyScrollIntoView(() => componentReq(key))

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
      <Route path="/components/_">
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
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
})

ComponentsRoutes.displayName = 'ComponentsRoutes'
