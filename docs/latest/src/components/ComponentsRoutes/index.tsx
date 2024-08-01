import { Loading, TabsLayout, lazyScrollIntoView } from 'docs-common'
import { Suspense, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../NotFound'
import {
  componentReq,
  compositionsReq,
  getComponentsRoutes,
  getCompositionsRouteTabs,
  getCompositionsRouteTitle,
  getCompositionsRoutes,
  getLabsComponentsRoutes,
  getPagesRoutes,
  getRouteTabs,
  getRouteTitle,
  labsComponentsReq,
  pagesReq,
} from '~/entries'

export const ComponentsRoutes = memo(() => {
  return (
    <Routes>
      <Route
        path="/compositions"
        element={(
          <TabsLayout
            getRouteTabInfo={getCompositionsRouteTabs}
            getRouteTitle={getCompositionsRouteTitle}
          />
        )}
      >
        {getCompositionsRoutes().map(({ key, route }) => {
          const Component = lazyScrollIntoView(() => compositionsReq(key))

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

      <Route
        path="/components"
        element={(
          <TabsLayout
            getRouteTabInfo={getRouteTabs}
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
      <Route
        path="/labComponents"
        element={(
          <TabsLayout
            getRouteTabInfo={getRouteTabs}
            getRouteTitle={getRouteTitle}
          />
        )}
      >
        {getLabsComponentsRoutes().map(({ key, route }) => {
          const Component = lazyScrollIntoView(() => labsComponentsReq(key))

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
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
})

ComponentsRoutes.displayName = 'ComponentsRoutes'
