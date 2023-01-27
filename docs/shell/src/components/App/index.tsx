import { Loading } from 'docs-common'
import { QueryRouter } from 'docs-shared'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ComponentsList } from '../ComponentsList'
import { ComponentsPage } from '../ComponentsPage'
import { NavigationGroup } from '../NavigationGroup'
import { NavigationItem } from '../NavigationItem'
import { NavigationList } from '../NavigationList'
import { SidebarTitle } from '../SidebarTitle'
import type { FC } from 'react'
import { useOnRouteChange } from '~/hooks'
import { FAQPage } from '~/pages/FAQ'
import { IntroPage } from '~/pages/Intro'
import { LandingPage } from '~/pages/Landing'
import { NotFoundPage } from '~/pages/NotFound'
import { AppStateProvider } from '~/store'
import './styles.css'

const AppImpl: FC = () => {
  return (
    <>
      <div id="app-sidebar">
        <div id="app-sidebar-fixed">
          <SidebarTitle/>
        </div>
        <div id="app-sidebar-scroll" className="scrollable">
          <div id="app-sidebar-scroll-content">
            <NavigationList>
              <NavigationGroup text="About">
                <NavigationList>
                  <NavigationItem path="/intro" text="👋 Intro"/>
                  <NavigationItem path="/faq" text="❔ FAQ"/>
                </NavigationList>
              </NavigationGroup>
              <NavigationGroup text="Components">
                <ComponentsList/>
              </NavigationGroup>
            </NavigationList>
          </div>
        </div>
      </div>
      <div id="app-content">
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/intro" element={<IntroPage/>}/>
            <Route path="/faq" element={<FAQPage/>}/>
            <Route path="/components/*" element={<ComponentsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

const basename = location.pathname.replace(/\/$/, '')

export const App: FC = () => {
  const onRouteChange = useOnRouteChange()

  return (
    <QueryRouter basename={basename} onChange={onRouteChange}>
      <AppStateProvider>
        <AppImpl/>
      </AppStateProvider>
    </QueryRouter>
  )
}
