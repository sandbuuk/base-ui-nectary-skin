import { useLogin, useIsLoggedIn } from '../hooks/useLogin'
import styles from './Login.module.css'

export const Login = () => {
  const isLoggedIn = useIsLoggedIn()
  const { login, logout } = useLogin()

  return (
    <button
      className={styles.loginButton}
      onClick={() => {
        isLoggedIn === true
          ? void logout()
          : void login({ redirectUri: location.href })
      }}
    >
      <sinch-icon-user size={28}/>
      <span>{isLoggedIn === true ? 'Logout' : 'Login'}</span>
    </button>
  )
}
