import { useState } from 'react'
import { Route, Routes, Outlet, Link } from 'react-router-dom'
import { BoxBanner } from '../../components/BoxBanner'
import { MainHeading } from '../../components/MainHeading'
import { PhonePreview } from '../../components/PhonePreview/PhonePreview'
import { SubHeading } from '../../components/SubHeading'
import { FlowBuilder } from './FlowBuilder'
import { HumanHandover } from './HumanHandover'
import type { Message, PhonePreviewProps } from '../../components/PhonePreview/PhonePreview'
import type { QuickStartPage } from '../types'
import type { Agent } from './types'
import type { FC } from 'react'

const questionAnswers = [
  'Sir Lancelot of Camelot',
  'To seek the Holy Grail',
  'Blue',
  'Sir Robin of Camelot',
  'To seek the Holy Grail',
  'Blue. No yellooow..',
]
  .map<Message>((x) => ({ msg: x, sender: 'right', blur: true }))

const buildChats = (greeting: string, questions: string[], handoverMessage: string, agent: Agent | undefined): Message[] => [
  { msg: 'Hello!', sender: 'right' },
  // The first greeting.
  { msg: greeting, sender: 'left' },
  // The questions mixed in with the blurred answers.
  ...(questions
    .map<Message>((q) => ({ msg: q, sender: 'left' }))
    .map((q, i) => (q.msg != '' ? [q, questionAnswers[i]] : [q]))
    .reduce((acc, next) => acc.concat(next), [])),
  // Human handover message.
  { msg: handoverMessage, sender: 'left' },
  // Agent answering.
  ...((agent != null) ? [{ msg: `Hi! This is ${agent.name}`, sender: 'left' } as Message] : []),
]

type NavProps = {backText: string, backUrl: string, forwardText: string, forwardUrl: string}

const Nav: FC<NavProps> = ({ backText, backUrl, forwardText, forwardUrl }) => (
  <div>
    <Link to={backUrl}>{backText}</Link>
    <span> </span>
    <Link to={forwardUrl}>{forwardText}</Link>
  </div>
)

const Wrapper: FC<{heading: string, subHeading: string, chats: PhonePreviewProps['chats']}> = ({ heading, subHeading, chats }) => (
  <div>
    <MainHeading>{heading}</MainHeading>
    <SubHeading>{subHeading}</SubHeading>

    <BoxBanner>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', position: 'relative', gap: '40px', alignItems: 'stretch' }}>
        <div style={{ marginLeft: 'auto', width: '300px', flex: '1' }}/>

        <Outlet/>

        <section style={{ position: 'relative', marginRight: 'auto', flex: '1' }}>
          <p style={{ margin: '0 26px 9px', color: 'var(--sinch-color-text-muted)', font: 'var(--sinch-font-small-text)' }}>User preview</p>
          <PhonePreview chats={chats}/>
        </section>
      </div>

      <Routes>
        <Route index element={<Nav backText="Back" backUrl="./.." forwardText="Human handover" forwardUrl="./human-handover"/>}/>
        <Route path="human-handover" element={<Nav backText="Back" backUrl="./.." forwardText="Done" forwardUrl="../success"/>}/>
      </Routes>
    </BoxBanner>
  </div>
)

export const QuickLeadsConverterPage: QuickStartPage = () => {
  // 1st page: Greeting and questions
  const [greeting, setGreeting] = useState('')
  const [questions, setQuestions] = useState([''])
  const addQuestion = () => setQuestions((questions) => [...questions, ''].slice(0, 6))
  const setQuestion = (i: number, q: string) => setQuestions((questions) => ([] as string[]).concat(questions.slice(0, i), q, questions.slice(i + 1)))

  // 2nd page: Human handover
  const [handoverMessage, setHandoverMessage] = useState('')
  const [agents, setAgents] = useState<Agent[]>([])
  const addAgent = (agent: Agent, index: number | null) => setAgents((agents) =>
    (index === null
      ? [...agents, agent]
      : ([] as Agent[]).concat(agents.slice(0, index), agent, agents.slice(index + 1))))
  const removeAgent = (i: number) => setAgents((agents) => ([] as Agent[]).concat(agents.slice(0, i), agents.slice(i + 1)))

  const chats = buildChats(greeting, questions, handoverMessage, agents[0])

  return (
    <Routes>
      <Route path="/">
        <Route path="success" element={<div>Success</div>}/>
        <Route path="failure" element={<div>failed..</div>}/>
        <Route path="*" element={<Wrapper heading={'Flow Builder'} subHeading="Configure the messages that are displayed on the conversation." chats={chats}/>}>
          <Route index element={<FlowBuilder greeting={greeting} setGreeting={setGreeting} questions={questions} setQuestion={setQuestion} addQuestion={addQuestion}/>}/>
          <Route path="human-handover" element={<HumanHandover handoverMessage={handoverMessage} setHandoverMessage={setHandoverMessage} agents={agents} addAgent={addAgent} removeAgent={removeAgent}/>}/>
        </Route>
      </Route>
    </Routes>
  )
}
