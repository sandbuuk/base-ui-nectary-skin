import { MDXProvider } from '@mdx-js/react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { mdxComponents } from '../mdx-components'
import type { FC } from 'react'
import { ComponentsPage } from '~/pages/Components'
import { IntroPage } from '~/pages/Intro'
import { NotFoundPage } from '~/pages/NotFound'
import '@sinch-engage/nectary/theme.css'
import './styles.css'

const req = require.context('~/pages/Components/', true, /^\.\/.*\/index\.mdx$/, 'lazy')
const nameRegexp = /^\.\/(.+?)\/.+$/

export const App: FC<{}> = () => (
  <MDXProvider components={mdxComponents}>
    <BrowserRouter>
      <div className="app-sidebar">
        <ul>
          <li>
            <Link to="/">👋 Intro</Link>
          </li>
          <li>
            <Link to="/components">🍱 Components</Link>
            <ul>
              {req.keys().map((key) => {
                const name = key.replace(nameRegexp, '$1')

                return (
                  <li key={key}>
                    <Link to={`/components/${name.toLowerCase()}`}>{name}</Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>
      <div className="app-content">
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<IntroPage/>}/>
            <Route path="/components" element={<Outlet/>}>
              <Route index element={<ComponentsPage/>}/>
              {req.keys().map((key) => {
                const name = key.replace(nameRegexp, '$1')
                const Comp = lazy(() => req(key))

                return (
                  <Route
                    key={key}
                    path={name.toLowerCase()}
                    element={<Comp/>}
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
)
