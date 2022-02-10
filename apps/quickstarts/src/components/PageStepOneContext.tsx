import { createContext, useContext, useState } from 'react'
import type { FC } from 'react'

type TPageOneContext = {
  accountId: string,
  setAccountId: (arg0: string) => void,
  token: string,
  setToken: (arg0: string) => void,
}

const k = (accountId: string) => {
  console.log(accountId)
}
const p = (token: string) => {
  console.log(token)
}
const Context = createContext<TPageOneContext>({
  accountId: '',
  setAccountId: k,
  token: '',
  setToken: p,
})

export const usePageOneControl = () => {
  return useContext(Context)
}

export const PageStepOneContext: FC<{}> = ({ children }) => {
  const [accountId, setAccountId] = useState('')
  const [token, setToken] = useState('')

  const state: TPageOneContext = {
    accountId,
    setAccountId,
    token,
    setToken,
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}
