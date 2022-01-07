import { createContext, useContext, useState } from 'react'
import type { FC } from 'react'

type TPageOneContext = {
  accountId: string,
  setAccountId: (arg0: string) => void,
}

const k = (accountId: string) => {
  console.log(accountId)
}
const Context = createContext<TPageOneContext>({
  accountId: '',
  setAccountId: k,
})

export const usePageOneControl = () => {
  return useContext(Context)
}

export const PageStepOneContext: FC<{}> = ({ children }) => {
  const [accountId, setAccountId] = useState('')

  const state: TPageOneContext = {
    accountId,
    setAccountId,
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}
