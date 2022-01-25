import styles from './Login.module.css'
import { useLogin, useIsLoggedIn } from './hooks/useLogin'

export const Login = () => {
  const isLoggedIn = useIsLoggedIn()
  const { login, logout } = useLogin()

  return (
    <button
      className={styles.login}
      onClick={() => {
        isLoggedIn ?? false
          ? void logout()
          : void login({ redirectUri: location.href })
      }}
    >
      {isLoggedIn ?? false ? 'Logout' : 'Login'}
    </button>
  )
}
