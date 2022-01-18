import { createContext, useContext, useState } from 'react'
import type { FC } from 'react'

type TPageThreeContext = {
  botquestion: string[],
  setBotquestion: (arg0: any) => void,
  greetingmsg: string,
  setGreetingmsg: (arg0: string) => void,
  humanhandover: string,
  setHumanhandover: (arg0: string) => void,
}

const k = (botquestion: string[]) => {
  console.log(botquestion)
}
const p = (greetingmsg: string) => {
  console.log(greetingmsg)
}
const s = (humanhandover: string) => {
  console.log(humanhandover)
}
const Context = createContext<TPageThreeContext>({
  botquestion: [],
  setBotquestion: k,
  greetingmsg: '',
  setGreetingmsg: p,
  humanhandover: '',
  setHumanhandover: s,
})

export const usePageThreeControl = () => {
  return useContext(Context)
}

export const PageStepThreeContext: FC<{}> = ({ children }) => {
  const [botquestion, setBotquestion] = useState([])
  const [greetingmsg, setGreetingmsg] = useState('')
  const [humanhandover, setHumanhandover] = useState('')

  const state: TPageThreeContext = {
    botquestion,
    setBotquestion,
    greetingmsg,
    setGreetingmsg,
    humanhandover,
    setHumanhandover,
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}
