import { createContext, useContext, useState } from 'react'
import type { FC } from 'react'

type TPageThreeContext = {
  botquestion: string[],
  setBotquestion: (arg0: any) => void,
  greetingmsg: string,
  setGreetingmsg: (arg0: string) => void,
  humanhandover: string,
  setHumanhandover: (arg0: string) => void,
  flowCounter: number,
  setCounter: (arg0: any) => void,
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
const v = (counter: number) => {
  console.log(counter)
}
const Context = createContext<TPageThreeContext>({
  botquestion: [],
  setBotquestion: k,
  greetingmsg: '',
  setGreetingmsg: p,
  humanhandover: '',
  setHumanhandover: s,
  flowCounter: 0,
  setCounter: v,
})

export const usePageThreeControl = () => {
  return useContext(Context)
}

export const PageStepThreeContext: FC<{}> = ({ children }) => {
  const [botquestion, setBotquestion] = useState([])
  const [greetingmsg, setGreetingmsg] = useState('')
  const [humanhandover, setHumanhandover] = useState('')
  const [flowCounter, setCounter] = useState(0)

  const state: TPageThreeContext = {
    botquestion,
    setBotquestion,
    greetingmsg,
    setGreetingmsg,
    humanhandover,
    setHumanhandover,
    flowCounter,
    setCounter,
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}
