import { Loading, QueryRouter } from 'docs-common'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ComponentsList } from '../ComponentsList'
import { ComponentsPage } from '../ComponentsPage'
import { EnhaiButton } from '../EnhaiButton'
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
import { V3MigrationPage } from '~/pages/V3Migration'
import './styles.css'
import '@nectary/theme-base'
import '@nectary/theme-dark'
import '@nectary/theme-message-media'
import '@nectary/theme-cpaas-base'
import '@nectary/theme-cpaas-mailgun'
import '@nectary/theme-cpaas-mailjet'
import '@nectary/theme-cpaas-dashboard'
import '@nectary/theme-simple-texting'

const CLASS_NECTARY_THEME_BASE = 'nectary-theme-base'
const CLASS_NECTARY_THEME_DARK = 'nectary-theme-dark'
const CLASS_NECTARY_THEME_MESSAGE_MEDIA = 'nectary-theme-message-media'
const CLASS_NECTARY_THEME_SIMPLE_TEXTING = 'nectary-theme-simple-texting'
const CLASS_CPAAS_THEME_BASE = 'cpaas-theme-base'
const CLASS_CPAAS_THEME_MAILGUN = 'cpaas-theme-mailgun'
const CLASS_CPAAS_THEME_MAILJET = 'cpaas-theme-mailjet'
const CLASS_CPAAS_THEME_DASHBOARD = 'cpaas-theme-dashboard'

const basename = location.pathname.replace(/\/$/, '')

export const App: FC = () => {
  const onRouteChange = useOnRouteChange()
  const { themeName } = useThemeName()

  const themeClasses = [
    CLASS_NECTARY_THEME_BASE,
  ]

  switch (themeName) {
    case 'dark': {
      themeClasses.push(CLASS_NECTARY_THEME_DARK)

      break
    }
    case 'message-media': {
      themeClasses.push(CLASS_NECTARY_THEME_MESSAGE_MEDIA)

      break
    }
    case 'simple-texting': {
      themeClasses.push(CLASS_NECTARY_THEME_SIMPLE_TEXTING)

      break
    }
    case 'mailgun': {
      themeClasses.push(
        CLASS_CPAAS_THEME_BASE,
        CLASS_CPAAS_THEME_MAILGUN
      )

      break
    }
    case 'mailjet': {
      themeClasses.push(
        CLASS_CPAAS_THEME_BASE,
        CLASS_CPAAS_THEME_MAILJET
      )

      break
    }
    case 'dashboard': {
      themeClasses.push(
        CLASS_CPAAS_THEME_BASE,
        CLASS_CPAAS_THEME_DASHBOARD
      )

      break
    }
  }

  return (
    <QueryRouter basename={basename} onChange={onRouteChange}>
      <div id="app-sidebar" className={themeClasses.join(' ')}>
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
                  <NavigationItem path="/V3Migration" text="V3 Migration"/>
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
      <div id="app-content" className={themeClasses.join(' ')}>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/intro" element={<IntroPage/>}/>
            <Route path="/testing" element={<TestingPage/>}/>
            <Route path="/V3Migration" element={<V3MigrationPage/>}/>
            <Route path="/faq" element={<FAQPage/>}/>
            <Route path="/labComponents/*" element={<ComponentsPage/>}/>
            <Route path="/components/*" element={<ComponentsPage/>}/>
            <Route path="/compositions/*" element={<ComponentsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
        <EnhaiButton/>
      </div>
    </QueryRouter>
  )
}
