import { createContext, useContext, useState } from 'react'
import type { FC } from 'react'

type TOnBoardingContext = {
  username: string,
  setUsername: (arg0: string) => void,
}

const k = (accountId: string) => {
  console.log(accountId)
}
const Context = createContext<TOnBoardingContext>({
  username: '',
  setUsername: k,
})

export const useOnBoardingControl = () => {
  return useContext(Context)
}

export const OnBoardingContex: FC<{}> = ({ children }) => {
  const [username, setUsername] = useState('')

  const state: TOnBoardingContext = {
    username,
    setUsername,
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}
