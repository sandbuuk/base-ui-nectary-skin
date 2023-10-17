import { Loading, QueryRouter } from 'docs-common'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ComponentsList } from '../ComponentsList'
import { ComponentsPage } from '../ComponentsPage'
import { NavigationGroup } from '../NavigationGroup'
import { NavigationItem } from '../NavigationItem'
import { NavigationList } from '../NavigationList'
import { SidebarFooter } from '../SidebarFooter'
import { SidebarHeader } from '../SidebarHeader'
import type { FC } from 'react'
import { useThemeName } from '~/context/theme-control'
import { useOnRouteChange } from '~/hooks'
import { FAQPage } from '~/pages/FAQ'
import { IntroPage } from '~/pages/Intro'
import { LandingPage } from '~/pages/Landing'
import { NotFoundPage } from '~/pages/NotFound'
import { TestingPage } from '~/pages/Testing'
import './styles.css'
import '@nectary/theme-base'
import '@nectary/theme-dark'

const basename = location.pathname.replace(/\/$/, '')

export const App: FC = () => {
  const onRouteChange = useOnRouteChange()
  const { themeName } = useThemeName()

  return (
    <QueryRouter basename={basename} onChange={onRouteChange}>
      <div id="app-sidebar" className={`nectary-theme-base ${themeName === 'dark' ? 'nectary-theme-dark' : ''}`}>
        <div className="app-sidebar-fixed">
          <SidebarHeader/>
        </div>
        <div id="app-sidebar-scroll" className="scrollable">
          <div id="app-sidebar-scroll-content">
            <NavigationList>
              <NavigationGroup text="About">
                <NavigationList>
                  <NavigationItem path="/" text="Home"/>
                  <NavigationItem path="/intro" text="Intro"/>
                  <NavigationItem path="/testing" text="Testing"/>
                  <NavigationItem path="/faq" text="FAQ"/>
                </NavigationList>
              </NavigationGroup>
              <ComponentsList/>
            </NavigationList>
          </div>
        </div>
        <div className="app-sidebar-fixed border-top">
          <SidebarFooter/>
        </div>
      </div>
      <div id="app-content" className={`nectary-theme-base ${themeName === 'dark' ? 'nectary-theme-dark' : ''}`}>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/intro" element={<IntroPage/>}/>
            <Route path="/testing" element={<TestingPage/>}/>
            <Route path="/faq" element={<FAQPage/>}/>
            <Route path="/components/*" element={<ComponentsPage/>}/>
            <Route path="/compositions/*" element={<ComponentsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
      </div>
    </QueryRouter>
  )
}
