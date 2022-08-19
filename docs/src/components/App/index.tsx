import { MDXProvider } from '@mdx-js/react'
import { Suspense, StrictMode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loading } from '../Loading'
import { NavigationItem } from '../Navigation/Item'
import { NavigationList } from '../Navigation/List'
import { mdxComponents } from '../mdx-components'
import type { FC } from 'react'
import { QueryRouter } from '~/components/QueryRouter'
import { ChangelogPage } from '~/pages/Changelog'
import { ComponentsOutlet, ComponentsPage } from '~/pages/Components'
import { FAQPage } from '~/pages/FAQ'
import { IntroPage } from '~/pages/Intro'
import { NotFoundPage } from '~/pages/NotFound'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'
import '@sinch-engage/nectary/theme.css'
import './styles.css'

const req = import.meta.webpackContext!('~/pages/Components/', {
  regExp: /^\.\/.*\/index\.mdx$/,
  recursive: true,
  mode: 'lazy',
  chunkName: 'Components-[request]',
})
const nameRegexp = /^\.\/(.+?)\/.+$/
const basename = location.pathname.replace(/\/$/, '')

export const App: FC = () => (
  <StrictMode>
    <MDXProvider components={mdxComponents}>
      <QueryRouter basename={basename}>
        <div id="app-sidebar">
          <NavigationList>
            <NavigationItem path="/" text="👋 Intro"/>
            <NavigationItem path="/faq" text="❔ FAQ"/>
            <NavigationItem path="/changelog" text="📦 Changelog"/>
            <NavigationItem path="/components" text="🍱 Components">
              <NavigationList>
                {req.keys().map((key) => {
                  const name = key.replace(nameRegexp, '$1')
                  const route = `/components/${name.toLowerCase()}`

                  return (
                    <NavigationItem path={route} text={`◦ ${name}`} key={key}/>
                  )
                })}
              </NavigationList>
            </NavigationItem>
          </NavigationList>
        </div>
        <div id="app-content">
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<IntroPage/>}/>
              <Route path="/faq" element={<FAQPage/>}/>
              <Route path="/changelog" element={<ChangelogPage/>}/>
              <Route path="/components" element={<ComponentsOutlet/>}>
                <Route index element={<ComponentsPage/>}/>
                {req.keys().map((key) => {
                  const name = key.replace(nameRegexp, '$1')
                  const Component = lazyScrollIntoView(() => req(key))

                  return (
                    <Route
                      key={key}
                      path={name.toLowerCase()}
                      element={<Component/>}
                    />
                  )
                })}
              </Route>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </Suspense>
        </div>
      </QueryRouter>
    </MDXProvider>
  </StrictMode>
)
