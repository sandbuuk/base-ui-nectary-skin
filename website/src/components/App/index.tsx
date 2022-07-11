import { MDXProvider } from '@mdx-js/react'
import { Suspense, StrictMode } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Loading } from '../Loading'
import { mdxComponents } from '../mdx-components'
import type { FC } from 'react'
import { ChangelogPage } from '~/pages/Changelog'
import { ComponentsOutlet, ComponentsPage } from '~/pages/Components'
import { IntroPage } from '~/pages/Intro'
import { NotFoundPage } from '~/pages/NotFound'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'
import '@sinch-engage/nectary/theme.css'
import './styles.css'

const req = require.context('~/pages/Components/', true, /^\.\/.*\/index\.mdx$/, 'lazy')
const nameRegexp = /^\.\/(.+?)\/.+$/

export const App: FC = () => (
  <StrictMode>
    <MDXProvider components={mdxComponents}>
      <BrowserRouter>
        <div id="app-sidebar">
          <ul>
            <li>
              <Link to="/">👋 Intro</Link>
            </li>
            <li>
              <Link to="/changelog">📦 Changelog</Link>
            </li>
            <li>
              <Link to="/components">🍱 Components</Link>
              <ul>
                {req.keys().map((key) => {
                  const name = key.replace(nameRegexp, '$1')
                  const route = `/components/${name.toLowerCase()}`

                  return (
                    <li key={key}>
                      <Link to={route}>{name}</Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </div>
        <div id="app-content">
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<IntroPage/>}/>
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
      </BrowserRouter>
    </MDXProvider>
  </StrictMode>
)
