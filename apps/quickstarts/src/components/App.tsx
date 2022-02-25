import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/alert'
import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import styles from './App.module.css'
import { Home } from './Home'
import { OnBoarding } from './OnBoarding'
import { PageLayout } from './PageLayout'
import { PageNotFound } from './PageNotFound'
import { PageStepFour } from './PageStepFour'
//import { PageStepOne } from './PageStepOne'
import { PageStepThree } from './PageStepThree'
// import { PageStepTwo } from './PageStepTwo'
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
      <Router basename={baseUrl}>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Navigate to="step-1"/>}/>
            <Route path="step-1" element={<Home/>}/>
            {/* <Route path="step-2" element={<PageStepTwo/>}/> */}
            <Route path="step-2" element={<PageStepThree/>}/>
            <Route path="step-3" element={<PageStepFour/>}/>
            <Route path="onboarding" element={<OnBoarding/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
