import { useState } from 'react'
import { DeviceFrame } from './DeviceFrame'
import { InboxScreen } from './InboxScreen'
import { NewMessageScreen } from './NewMessageScreen'
import { TokensPage } from './TokensPage'
import { ComponentsPage } from './ComponentsPage'

export function App() {
  const page = new URLSearchParams(window.location.search).get('page')
  if (page === 'tokens') return <TokensPage />
  if (page === 'components') return <ComponentsPage />
  const [iosCompose, setIosCompose] = useState(false)
  const [androidCompose, setAndroidCompose] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 24px 48px',
        gap: 32,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 6,
          }}
        >
          <SinchLogo />
          <span
            style={{
              color: '#fff',
              fontSize: 13,
              fontWeight: 500,
              opacity: 0.5,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Conversations
          </span>
        </div>
        <h1
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 15,
            fontWeight: 400,
            opacity: 0.5,
          }}
        >
          Nectary Design System — Mobile Prototype
        </h1>
      </div>

      {/* Devices */}
      <div
        style={{
          display: 'flex',
          gap: 40,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* iOS */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <PlatformLabel platform="ios" />
          <DeviceFrame platform="ios">
            <InboxScreen platform="ios" onCompose={() => setIosCompose(true)} />
            <NewMessageScreen
              platform="ios"
              visible={iosCompose}
              onCancel={() => setIosCompose(false)}
            />
          </DeviceFrame>
        </div>

        {/* Android */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <PlatformLabel platform="android" />
          <DeviceFrame platform="android">
            <InboxScreen platform="android" onCompose={() => setAndroidCompose(true)} />
            <NewMessageScreen
              platform="android"
              visible={androidCompose}
              onCancel={() => setAndroidCompose(false)}
            />
          </DeviceFrame>
        </div>
      </div>
    </div>
  )
}

function PlatformLabel({ platform }: { platform: 'ios' | 'android' }) {
  const isIos = platform === 'ios'
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'rgba(255,255,255,0.6)',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.04em',
      }}
    >
      {isIos ? (
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
          <path
            d="M11.3 8.9c0-2.1 1.7-3.1 1.7-3.1s-1-1.4-2.5-1.4c-1 0-1.9.6-2.4.6-.5 0-1.3-.6-2.2-.6C4.1 4.4 2 6 2 9.1c0 1.9.7 4 1.6 5.3.8 1.1 1.5 2 2.5 2 .9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.8-1 2.5-2.1C14 13 14.3 11.5 14.3 11.4H11.3V8.9zM10 3c.6-.7.9-1.7.8-2.7-.9.1-2 .6-2.6 1.4-.5.7-.9 1.6-.8 2.5.9.1 1.9-.5 2.6-1.2z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
          <path
            d="M1.5 5.5h11M1.5 5.5C1 5.5.5 6 .5 6.5v8c0 .5.5 1 1 1h11c.5 0 1-.5 1-1v-8c0-.5-.5-1-1-1M1.5 5.5V4a5 5 0 0110 0v1.5M5 8.5v2M9 8.5v2"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      )}
      {isIos ? 'iOS' : 'Android'}
    </div>
  )
}

function SinchLogo() {
  return (
    <svg width="62" height="20" viewBox="0 0 62 20" fill="none">
      <text
        x="0"
        y="16"
        fontFamily="-apple-system, 'Roboto', sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="white"
        opacity="0.9"
      >
        sinch
      </text>
    </svg>
  )
}
