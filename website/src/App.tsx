import { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import type { FC } from 'react'
import '@sinch-engage/nectary/link'
import './App.css'

const Intro = lazy(() => import('./Intro.mdx'))

const req = require.context('./components', true, /^\.\/.*\/index\.mdx$/, 'lazy')
const nameRegexp = /^\.\/(.+?)\/.+$/

export const App: FC<{}> = () => (
  <BrowserRouter>
    <div className="app-sidebar">
      <ul>
        <li>
          <Link to="/">Intro</Link>
        </li>
        {req.keys().map((key) => {
          const name = key.replace(nameRegexp, '$1')

          return (
            <li key={key}>
              <Link to={`/${name.toLowerCase()}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
    <div className="app-content">
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          {req.keys().map((key) => {
            const name = key.replace(nameRegexp, '$1')
            const Comp = lazy(() => req(key))

            return (
              <Route
                key={key}
                path={`/${name.toLowerCase()}`}
                element={<Comp/>}
              />
            )
          })}
        </Routes>
      </Suspense>
    </div>
  </BrowserRouter>
)
