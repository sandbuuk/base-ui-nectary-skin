import { type CSSProperties, type FC, useCallback, useState } from 'react'
import '@nectary/components/input'
import '@nectary/components/button'
import '@nectary/components/field'
import '@nectary/components/help-tooltip'
import '@nectary/components/text'

const formContainerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: 300,
}

export const SimpleFormExample: FC = () => {
  const [email, setEmail] = useState('')
  const [emailInvalidText, setEmailInvalidText] = useState('')
  const [password, setPassword] = useState('')
  const [passwordInvalidText, setPasswordInvalidText] = useState('')
  const [result, setResult] = useState('')

  const handleEmailChange = useCallback((e: CustomEvent<string>) => {
    setEmail(e.detail)

    if (e.detail === '') {
      setEmailInvalidText('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.detail)) {
      setEmailInvalidText('Email is invalid')
    } else {
      setEmailInvalidText('')
    }
  }, [])

  const onSubmit = () => {
    if (email === '') {
      return setEmailInvalidText('Email is required')
    }

    if (password === '') {
      return setPasswordInvalidText('Password is required')
    }

    setResult(`submitted: ${email} — ${password}`)
  }

  return (
    <div style={formContainerStyles}>
      <sinch-field
        label="Email"
        invalidText={emailInvalidText}
      >
        <sinch-help-tooltip slot="tooltip" text="Email you provided during the sign up"/>
        <sinch-input
          slot="input"
          aria-label="Email input"
          placeholder="john@sinch.com"
          value={email}
          on-change={handleEmailChange}
        />
      </sinch-field>
      <sinch-field
        label="Password"
        invalidText={passwordInvalidText}
      >
        <sinch-input
          slot="input"
          aria-label="Password input"
          placeholder="Password"
          value={password}
          on-change={(e) => setPassword(e.detail)}
          type="password"
        />
      </sinch-field>
      <sinch-button
        text="Submit"
        aria-label="Submit"
        type="primary"
        on-click={onSubmit}
      />
      {result !== '' && <sinch-text type="m">{result}</sinch-text>}
    </div>
  )
}
