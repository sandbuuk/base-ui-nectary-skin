import { type CSSProperties, type FC, useCallback, useState } from 'react'
import '@nectary/components/text'
import '@nectary/components/help-tooltip'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/button'

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

  const validateEmail = (email: string) => {
    if (email === '') {
      setEmailInvalidText('Email is required')

      return false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailInvalidText('Email is invalid')

      return false
    }

    setEmailInvalidText('')

    return true
  }

  const validatePassword = (password: string) => {
    if (password === '') {
      setPasswordInvalidText('Password is required')

      return false
    }

    setPasswordInvalidText('')

    return true
  }

  const handleEmailChange = useCallback((e: CustomEvent<string>) => {
    setEmail(e.detail)
    validateEmail(e.detail)
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    if (!isEmailValid || !isPasswordValid) {
      return
    }

    setResult(`submitted: ${email} — ${password}`)
  }

  return (
    <form style={formContainerStyles} onSubmit={onSubmit}>
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
        form-type="submit"
        type="primary"
      />
      {result !== '' && <sinch-text type="m">{result}</sinch-text>}
    </form>
  )
}
