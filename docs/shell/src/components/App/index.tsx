import { Loading, QueryRouter } from 'docs-common'
import { Suspense, useEffect, useState } from 'react'
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
import { LandingPage } from '~/pages/00-Landing'
import { ComponentsLibraryPage } from '~/pages/01-Components Library'
import { ThemesPage } from '~/pages/02-Themes'
import { AssetsPage } from '~/pages/03-Assets Library'
import { TestingPage } from '~/pages/04-Testing'
import { TokensPage } from '~/pages/05-Token'
import { TypeScriptPage } from '~/pages/06-TypeScript'
import { EventHandlersPage } from '~/pages/07-EventHandlers'
import { V3MigrationPage } from '~/pages/08-V3Migration'
import { NotFoundPage } from '~/pages/NotFound'
import './styles.css'
import '@nectary/theme-base'
import '@nectary/theme-dark'
import '@nectary/theme-message-media'
import '@nectary/theme-cpaas-base'
import '@nectary/theme-cpaas-mailgun'
import '@nectary/theme-cpaas-mailjet'
import '@nectary/theme-cpaas-dashboard'
import '@nectary/theme-simple-texting'
import '@nectary/components/button'
import '@nectary/components/icon'

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

  const [mobileMenuOpen, openMobileMenu] = useState(false)

  useEffect(() => {
    const onMessage = (msg: MessageEvent) => {
      if (msg.data.type === 'ROUTE' && mobileMenuOpen === true) {
        openMobileMenu(false)
      }
    }

    window.addEventListener('message', onMessage)

    return () => window.removeEventListener('message', onMessage)
  }, [mobileMenuOpen])

  return (
    <QueryRouter basename={basename} onChange={onRouteChange}>
      <div id="app-open-sidebar-button" className={[...themeClasses].join(' ')}>
        <sinch-button type="cta-secondary" aria-label="open-mobile-menu" on-click={() => openMobileMenu(!mobileMenuOpen)}>
          <sinch-icon slot="icon" icons-version="2" name="fa-bars"/>
        </sinch-button>
      </div>
      <div id="app-sidebar" className={[...themeClasses, mobileMenuOpen ? 'app-sidebar-open' : 'app-sidebar-close'].join(' ')}>
        <div className="app-sidebar-fixed">
          <SidebarHeader/>
        </div>
        <div id="app-sidebar-scroll" className="scrollable">
          <div id="app-sidebar-scroll-content">
            <NavigationList>
              <NavigationGroup text="About">
                <NavigationList>
                  <NavigationItem path="/" text="Home"/>
                  <NavigationItem path="/components" text="Components"/>
                  <NavigationItem path="/themes" text="Themes"/>
                  <NavigationItem path="/assets" text="Assets"/>
                  <NavigationItem path="/testing" text="Testing"/>
                  <NavigationItem path="/tokens" text="Tokens"/>
                  <NavigationItem path="/typescript" text="TypeScript"/>
                  <NavigationItem path="/event-handlers" text="Event Handlers"/>
                  <NavigationItem path="/V3Migration" text="V3 Migration"/>
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
            <Route path="/intro" element={<ComponentsLibraryPage/>}/>
            <Route path="/components" element={<ComponentsLibraryPage/>}/>
            <Route path="/themes" element={<ThemesPage/>}/>
            <Route path="/assets" element={<AssetsPage/>}/>
            <Route path="/testing" element={<TestingPage/>}/>
            <Route path="/tokens" element={<TokensPage/>}/>
            <Route path="/typescript" element={<TypeScriptPage/>}/>
            <Route path="/event-handlers" element={<EventHandlersPage/>}/>
            <Route path="/V3Migration" element={<V3MigrationPage/>}/>
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
