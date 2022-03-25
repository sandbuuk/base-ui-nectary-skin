import { Fragment, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BoxBanner } from '../../components/BoxBanner'
import { MainHeading } from '../../components/MainHeading'
import { PhonePreview } from '../../components/PhonePreview/PhonePreview'
import { SubHeading } from '../../components/SubHeading'
import { ModalContext, TokenContext } from '../../contexts'
import { FlowBuilder } from './FlowBuilder'
import { HumanHandover } from './HumanHandover'
import congratsImage from './congratsimage.jpg'
import errorImage from './erroDialogImage.png'
import { postQuickLeadsConverter } from './postQuickLeadsConverter'
import type { Message, PhonePreviewProps } from '../../components/PhonePreview/PhonePreview'
import type { QuickStartPage } from '../types'
import type { Agent } from './types'
import type { FC, ReactNode } from 'react'

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

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 60px 0 0 0;
`

const Wrapper: FC<{heading: string, subHeading: string, chats: PhonePreviewProps['chats'], save: () => void, dialog: ReactNode}> = ({ chats, save, dialog }) => {
  const nav = useNavigate()

  return (
    <div>
      <Routes>
        <Route
          index
          element={(
            <Fragment>
              <MainHeading>Flow Builder</MainHeading>
              <SubHeading>Configure the messages that are displayed on the conversation.</SubHeading>
            </Fragment>
        )}
        />
        <Route
          path="human-handover"
          element={(
            <Fragment>
              <MainHeading>Human Handover</MainHeading>
              <SubHeading>Configure the agents that will be responsible for contacting the customers</SubHeading>
            </Fragment>
        )}
        />
      </Routes>
      <BoxBanner>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', position: 'relative', gap: '40px', alignItems: 'stretch' }}>
          {/* <div style={{ marginLeft: 'auto', width: '300px', flex: '1' }}/> */}
          <Outlet/>
          <section style={{ position: 'relative', flex: '1' }}>
            <p style={{ margin: '0 auto 9px', width: '250px', color: 'var(--sinch-color-text-muted)', font: 'var(--sinch-font-small-text)' }}>Preview</p>
            <PhonePreview chats={chats}/>
          </section>
        </div>

        <Routes>
          <Route
            index
            element={(
              <NavContainer>
                <sinch-button onClick={() => nav('./..')} type="secondary" text="Back" aria-label="Back"/>
                <sinch-button onClick={() => nav('./human-handover')} type="primary" text="Next" aria-label="Human handover"/>
              </NavContainer>
)}
          />
          <Route
            path="human-handover"
            element={(
              <NavContainer>
                <sinch-button onClick={() => nav('./')} type="secondary" text="Back" aria-label="Back"/>
                <sinch-button onClick={save} type="primary" text="Save" aria-label="Save"/>
              </NavContainer>
)}
          />
        </Routes>
      </BoxBanner>
      {dialog}
    </div>
  )
}

const DialogContainer = styled.div`
  width: 700px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  /*z-index: 999 */
  background-color: #ffffff;
  box-shadow: 0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3);
  padding: 10px;
  border-radius: 15px;

  text-align: center;

  & > h2 {
    font: var(--sinch-font-title-2);
    margin: 0px 30px 20px 30px;
  }

  & > p {
    font: var(--sinch-font-title-2);
  }

  & > img {
    width:300px;
    height: 250px;
    margin-bottom: 5%;
  }
`

const DialogCloseButton = styled.button`
  margin-bottom: 15px;
  padding: 3px 8px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  font-weight: bold;
  align-self: flex-end;
`

const Dialog: FC<{close: () => void, success: boolean | null}> = ({ close, success }) => {
  const modalContext = useContext(ModalContext)
  const nav = useNavigate()

  if (success == null) {
    return null
  }

  return createPortal(success
    ? (
      <DialogContainer>
        <h2>
          Congratulations! You will receive the link to share on your e-mail in x times.
        </h2>
        <img src={congratsImage}/>
        <sinch-button type="cta-primary" onClick={() => nav('../../../')} text="Done" aria-label="Done"/>
      </DialogContainer>
    )
    : (
      <DialogContainer>
        <DialogCloseButton onClick={close}>
          x
        </DialogCloseButton>
        <h2>
          Oops! It’s not you, it’s us. Sorry for the incovenience. We’re fixing the issue.Try again in a few minutes.
        </h2>
        <img src={errorImage}/>
        <sinch-button type="cta-primary" onClick={close} text="Close" aria-label="Close"/>
      </DialogContainer>
    ),
  modalContext.current!)
}

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

  // Saving!
  const [success, setSuccess] = useState<boolean | null>(null)
  const token = useContext(TokenContext)?.token!
  const saveFunc = postQuickLeadsConverter(token)
  const save = () => saveFunc(greeting, questions, handoverMessage, agents)
    .then(() => setSuccess(true))
    .catch(() => setSuccess(false))

  // Dialog state
  const dialog = <Dialog close={() => setSuccess(null)} success={success}/>

  const chats = buildChats(greeting, questions, handoverMessage, agents[0])

  return (
    <Routes>
      <Route path="/">
        <Route path="*" element={<Wrapper heading={'Flow Builder'} subHeading="Configure the messages that are displayed on the conversation." chats={chats} save={save} dialog={dialog}/>}>
          <Route index element={<FlowBuilder greeting={greeting} setGreeting={setGreeting} questions={questions} setQuestion={setQuestion} addQuestion={addQuestion}/>}/>
          <Route path="human-handover" element={<HumanHandover handoverMessage={handoverMessage} setHandoverMessage={setHandoverMessage} agents={agents} addAgent={addAgent} removeAgent={removeAgent}/>}/>
        </Route>
      </Route>
    </Routes>
  )
}
