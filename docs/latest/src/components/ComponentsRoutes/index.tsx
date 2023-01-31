import { lazyScrollIntoView, Loading, TabsLayout } from 'docs-common'
import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { componentReq, getComponentsRoutes, getRouteTabs } from '~/entries'

export const ComponentsRoutes = memo(() => {
  return (
    <Routes>
      <Route path="/components" element={<TabsLayout getRouteTabs={getRouteTabs}/>}>
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
      <Route path="*" element={null}/>
    </Routes>
  )
})

ComponentsRoutes.displayName = 'ComponentsRoutes'
