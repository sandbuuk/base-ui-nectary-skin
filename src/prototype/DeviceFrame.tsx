import type { ReactNode, CSSProperties } from 'react'

interface DeviceFrameProps {
  platform: 'ios' | 'android'
  children: ReactNode
}

const W = 375
const H = 812
const STATUS_H = 50
const HOME_H_IOS = 34
const HOME_H_AND = 24

export function DeviceFrame({ platform, children }: DeviceFrameProps) {
  const isIos = platform === 'ios'
  const radius = isIos ? 52 : 28
  const border = isIos ? 11 : 9
  const homeH = isIos ? HOME_H_IOS : HOME_H_AND

  return (
    <div
      style={{
        position: 'relative',
        width: W,
        height: H,
        borderRadius: radius,
        background: '#000',
        border: `${border}px solid ${isIos ? '#1e1e20' : '#1a1a1c'}`,
        boxShadow: [
          `0 0 0 1px ${isIos ? '#333' : '#2a2a2a'}`,
          '0 0 0 3px #0d0d0f',
          '0 50px 120px rgba(0,0,0,0.85)',
          '0 0 60px rgba(0,0,0,0.4)',
        ].join(', '),
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Physical buttons – iOS */}
      {isIos && (
        <>
          <PhysBtn style={{ left: -border - 2, top: 96, width: 3, height: 30, borderRadius: '3px 0 0 3px' }} />
          <PhysBtn style={{ left: -border - 2, top: 142, width: 3, height: 56, borderRadius: '3px 0 0 3px' }} />
          <PhysBtn style={{ left: -border - 2, top: 210, width: 3, height: 56, borderRadius: '3px 0 0 3px' }} />
          <PhysBtn style={{ right: -border - 2, top: 138, width: 3, height: 72, borderRadius: '0 3px 3px 0' }} />
        </>
      )}

      {/* Physical buttons – Android */}
      {!isIos && (
        <PhysBtn style={{ right: -border - 2, top: 160, width: 3, height: 56, borderRadius: '0 3px 3px 0' }} />
      )}

      {/* Dynamic Island (iOS) */}
      {isIos && (
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 34,
            background: '#000',
            borderRadius: 20,
            zIndex: 200,
          }}
        />
      )}

      {/* Punch-hole camera (Android) */}
      {!isIos && (
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 12,
            height: 12,
            background: '#0d0d0d',
            borderRadius: '50%',
            zIndex: 200,
          }}
        />
      )}

      {/* Status bar */}
      <StatusBar platform={platform} />

      {/* Screen content */}
      <div
        style={{
          position: 'absolute',
          top: STATUS_H,
          left: 0,
          right: 0,
          bottom: homeH,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>

      {/* Home indicator / gesture bar */}
      <div
        style={{
          position: 'absolute',
          bottom: isIos ? 10 : 7,
          left: '50%',
          transform: 'translateX(-50%)',
          width: isIos ? 134 : 100,
          height: 5,
          background: '#fff',
          borderRadius: 3,
          opacity: isIos ? 0.4 : 0.25,
        }}
      />
    </div>
  )
}

function PhysBtn({ style }: { style: CSSProperties }) {
  return (
    <div
      style={{
        position: 'absolute',
        background: '#2c2c2e',
        ...style,
      }}
    />
  )
}

function StatusBar({ platform }: { platform: 'ios' | 'android' }) {
  const isIos = platform === 'ios'
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: STATUS_H,
        display: 'flex',
        alignItems: isIos ? 'flex-end' : 'center',
        justifyContent: 'space-between',
        padding: isIos ? '0 28px 10px' : '0 20px',
        zIndex: 100,
        background: 'transparent',
      }}
    >
      {/* Time */}
      <span
        style={{
          color: '#fff',
          fontSize: isIos ? 17 : 14,
          fontWeight: isIos ? 600 : 500,
          letterSpacing: isIos ? '-0.3px' : '0',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        10:20
      </span>

      {/* Right indicators */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isIos ? 5 : 6 }}>
        {isIos ? (
          <>
            <SignalBars />
            <span style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>5G</span>
            <BatteryIcon ios />
          </>
        ) : (
          <>
            <SignalBars android />
            <WifiIcon />
            <BatteryIcon />
          </>
        )}
      </div>
    </div>
  )
}

function SignalBars({ android }: { android?: boolean }) {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
      {[3, 6, 9, 12].map((h, i) => (
        <rect
          key={i}
          x={i * 4}
          y={12 - h}
          width={3}
          height={h}
          rx={1}
          fill={android && i < 1 ? 'rgba(255,255,255,0.35)' : 'white'}
        />
      ))}
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
      <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      <path d="M4.2 6.5a5.3 5.3 0 017.6 0l1.4-1.4a7.4 7.4 0 00-10.4 0L4.2 6.5z" opacity=".7" />
      <path d="M1.3 3.5a9.5 9.5 0 0113.4 0L16.1 2A11.7 11.7 0 000 2L1.3 3.5z" opacity=".4" />
    </svg>
  )
}

function BatteryIcon({ ios }: { ios?: boolean }) {
  return (
    <svg width={ios ? 25 : 22} height="12" viewBox="0 0 25 12" fill="none">
      <rect x={0.5} y={0.5} width={21} height={11} rx={3} stroke="white" strokeOpacity={0.5} />
      <rect x={22} y={3.5} width={2.5} height={5} rx={1} fill="white" fillOpacity={0.4} />
      <rect x={2} y={2} width={14} height={8} rx={2} fill="white" />
    </svg>
  )
}
