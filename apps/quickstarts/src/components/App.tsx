import '@nectary/components/theme.css'
import '@nectary/components/button'
import '@nectary/components/input'
import '@nectary/components/input-tooltip'
import '@nectary/components/select'
import '@nectary/components/select-option'
import '@nectary/components/textarea'
import { useEffect, useRef } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import styles from './App.module.css'
import { PageLayout } from './PageLayout'
import { PageNotFound } from './PageNotFound'
import { PageStepFour } from './PageStepFour'
import { PageStepOne } from './PageStepOne'
import { PageStepThree } from './PageStepThree'
import { PageStepTwo } from './PageStepTwo'
import type { FC } from 'react'

type TApp = {
  baseUrl: string,
}

export const App: FC<TApp> = ({ baseUrl }) => {
  const bus = useRef<BroadcastChannel>()

  useEffect(() => {
    bus.current = new BroadcastChannel('TEST_CHANNEL')

    bus.current.addEventListener('message', (e) => {
      switch (e.data.type) {
        default: {
          console.log('message', e.data)
        }
      }
    })

    return () => {
      bus.current?.close()
    }
  })

  return (
    <div className={styles.app}>
      <HashRouter basename={baseUrl}>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Navigate to="step-1"/>}/>
            <Route path="step-1" element={<PageStepOne/>}/>
            <Route path="step-2" element={<PageStepTwo/>}/>
            <Route path="step-3" element={<PageStepThree/>}/>
            <Route path="step-4" element={<PageStepFour/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}
