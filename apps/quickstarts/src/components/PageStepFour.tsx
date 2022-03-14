import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { TokenContext } from '../contexts'
import styles from './Page.module.css'
import { PageBottom } from './PageBottom'
import { usePageControl } from './PageContext'
import { PageHeader } from './PageHeader'
import { usePageThreeControl } from './PageStepThreeContext'
import { PhonePreview } from './PhonePreview/PhonePreview'
import congratsimage from './images/congratsimage.jpg'
import contactlogo from './images/contactlogo.jpg'
import errorimage from './images/erroDialogImage.png'
import type { TOKEN_PAYLOAD } from '@saas/bus'
import type { FC, Dispatch, SetStateAction } from 'react'

type data ={
  token: TOKEN_PAYLOAD,
  greetingmsg: string,
  botquestion: string[],
  humanhandover: string,
  agentdetails: { name: string, email: string }[],

}

type WhatsappquestionProps={
  i: number,
  agentdetails: any[],
  activeelement: string,
  setActiveelement: (value: string) => void,
  setAgentdetails: (value: any) => void,
}

type AgentInformationProps={
  agentdetails: { name: string, email: string }[],
  setAgentdetails: (value: any) => void,
}

type Props = {
  isOpen: boolean,
  iserror: boolean,
  setIsOpen: (value: any) => void,
}

type PageBodyProps = {
  setActiveelement: Dispatch<SetStateAction<string>>,
  humanhandover: string,
  agentcount: number,
  setHumanhandover: (valu: string) => void,
  buttonCounter: () => void,
  agentdetails: {name: string, email: string}[],
  setAgentdetails: (value: any) => void,
  activeelement: string,
  questionCounter: number,
  botquestion: string[],
  greetingmsg: string,
}

async function SendData(data: data) {
  const questions = { greetings: '', questionListAfterOffloading: [{}], offloading: '' }

  const { token, greetingmsg, botquestion, humanhandover, agentdetails } = data

  questions.greetings = greetingmsg

  Object.keys(botquestion).map((i: any) => {
    if (i == 0) {
      questions.questionListAfterOffloading.pop()
    }

    questions.questionListAfterOffloading.push({ name: `Question ${(Number(i) + 1)}`, description: `${botquestion[i]}` })
  })

  questions.offloading = humanhandover

  let agents: { name: string, email: string }[] = []

  Object.keys(agentdetails).map((index: any) => {
    if (agentdetails[index].name.length > 0 && agentdetails[index].email.length > 0) {
      agents.push({ name: agentdetails[index].name, email: agentdetails[index].email })
    }
  })

  agents = agents.filter((val) => {
    if (val != null) {
      return val
    }
  })

  const content = JSON.stringify({
    agents,
    questions,
  })
  const url = 'https://quickstart.default.labengage.sinch.com/quick_leads_converter' //quick_leads_converter
  const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token?.token}` } }

  try {
    const response = await axios.post(url, content, config)

    return response
  } catch (err) {
    return null
  }
}

export const Dialog: FC<Props> = (props): JSX.Element => {
  const { isOpen, setIsOpen, iserror } = props
  let dialog = (
    <div style={{
      width: '700px',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: '999',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)',
      padding: '10px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <button
        style={{
          marginBottom: '15px',
          padding: '3px 8px',
          cursor: 'pointer',
          borderRadius: '50%',
          border: 'none',
          width: '30px',
          height: '30px',
          fontWeight: 'bold',
          alignSelf: 'flex-end',
        }}
        onClick={() => {
          setIsOpen((isOpen: boolean) => {
            return !isOpen
          })
        }}
      >x
      </button>

      <div className={styles.Congrats}>
        <div className={styles.congratsText}>
          <h2 className={styles.congratsTitle}>{iserror == false ? 'Congratulations! You\'ve finished your Quick Start!' : 'The configuration could not be saved.'}</h2>
          <h2 className={iserror == true ? styles.errorBody : styles.hide}>Please try again in a few moments.</h2>
        </div>
        <img src={iserror == true ? errorimage : congratsimage} className={styles.congratsimage}/>
        <sinch-button style={{ width: '35%', marginBottom: '2%' }} type="cta-primary" text="Try it out!" onClick={() => {}}/>
      </div>
    </div>
  )

  if (isOpen == false) {
    dialog = null as any
  }

  return (
    <div>
      {dialog}
    </div>
  )
}

function getActiveElement(root: Document | ShadowRoot = document): Element | null {
  const activeEl = root.activeElement

  if (activeEl == null) {
    return null
  }

  if (activeEl.shadowRoot != null) {
    if (activeEl.tagName == 'SINCH-INPUT' || activeEl.tagName == 'SINCH-TEXTAREA') {
      return activeEl
    }

    return getActiveElement(activeEl.shadowRoot)
  }

  return activeEl
}

const validateEmail = (email: String) => {
  return String(email)
    .match(
      /^(.+)@(.+)$/
    )
}

const WhatsappQuestion: FC<WhatsappquestionProps> = (props) => {
  const { agentdetails, setAgentdetails, setActiveelement } = props

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveelement(getActiveElement() == null ? '' : getActiveElement()!.className)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.messagesInput}>
      <div className={styles.Input}>
        <sinch-input
          key={`${props.i}name`}
          className={styles.agentName}
          value={agentdetails[props.i].name}
          style={{ width: '100%' }}
          onChange={(e) => {
            const value = e.nativeEvent.detail

            setAgentdetails((datas: string[]) => ({
              ...datas,
              [props.i]: { name: value, email: agentdetails[props.i].email },
            }))
          }}
          onFocus={() => {
          }}
          label="Agent name"
          placeholder="What is your name?"
        />
      </div>
      <div className={styles.Input}>
        <sinch-input
          key={`${props.i}email`}
          value={agentdetails[props.i].email}
          style={{ width: '100%' }}
          invalidText={agentdetails[props.i].email.length > 0 && validateEmail(agentdetails[props.i].email) == null ? 'Email is not Valid' : undefined}
          onChange={(e) => {
            const value = e.nativeEvent.detail

            setAgentdetails((datas: string[]) => ({
              ...datas,
              [props.i]: { name: agentdetails[props.i].name, email: value },
            }))
          }}
          onFocus={() => {

          }}
          label="Agent e-mail"
          placeholder="What is your email?"
        />
      </div>
    </div>
  )
}

const AgentInformation = (props: AgentInformationProps) => {
  const { agentdetails, setAgentdetails } = props

  return (
    <>
      { [...Array(Object.keys(agentdetails).length - 1)].map((_, index) => (
        agentdetails[index].name.length > 0 ? (
          <tr style={{ borderTop: '1px solid #999999' }} key={index} className={styles.humanValues}>
            {/* <div className={styles.humanhorzontalline}>
      <hr className={styles.horizontaLine}/>
    </div> */}
            <td className={styles.humanName}>
              <p>{agentdetails[index].name}</p>
            </td>
            <td className={styles.humanEmail}>
              <p>{agentdetails[index].email}</p>
            </td>
            <td className={styles.humanAction}>
              <div className={styles.humanDetailsbuttons}>
                <sinch-button
                  type="destructive"
                  text="Delete"
                  onClick={() => {
                    setAgentdetails((datas: string[]) => ({
                      ...datas,
                      [index]: { name: '', email: '' },
                    }))
                  }}
                />
              </div>
            </td>
          </tr>
        ) : undefined
      ))
    }
    </>
  )
}

const PageBody = (props: PageBodyProps) => {
  const { setActiveelement, botquestion, setHumanhandover, greetingmsg, agentdetails, humanhandover, buttonCounter, questionCounter, agentcount, activeelement, setAgentdetails } = props
  const chats = []

  chats.push({ sender: 'left', msg: greetingmsg })
  Object.keys(botquestion).map((i: any) => {
    chats.push({ sender: 'left', msg: botquestion[i] })
    chats.push({ sender: 'right', msg: 'user message' })
  })
  chats.push({ sender: 'left', msg: humanhandover })

  return (
    <div className={styles.botwhatsappBody}>
      <div className={styles.messagesParent}>
        <div className={styles.humanMessages}>
          { <WhatsappQuestion setActiveelement={setActiveelement} activeelement={activeelement} agentdetails={agentdetails} setAgentdetails={setAgentdetails} key={agentcount} i={agentcount}/>}
          <div className={styles.humanButton}>
            <sinch-button
              style={{ width: '100%' }}
              type="cta-primary"
              disabled={questionCounter > 5 || agentdetails[Object.keys(agentdetails).length - 1].name.length <= 0 || agentdetails[Object.keys(agentdetails).length - 1].email.length <= 0 || validateEmail(agentdetails[Object.keys(agentdetails).length - 1].email) == null ? true : undefined}
              onClick={buttonCounter}
              text={questionCounter <= 5 ? `Add more Agents (Up to ${6 - questionCounter} )` : 'Add more Agents (Up to 0)'}
            />
          </div>
          <table className={styles.humanDetails}>
            <thead>
              <tr className={agentcount > 0 ? styles.human : styles.humanhidden}>
                <th className={styles.humanName}>
                  Name
                </th>
                <th className={styles.humanEmail}>
                  E-mail
                </th>
                <th className={styles.humanAction}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <AgentInformation key={Math.random()} agentdetails={agentdetails} setAgentdetails={setAgentdetails}/>
            </tbody>
          </table>
        </div>
        <hr style={{ border: '1px solid #DDE0E2', height: '350px' }}/>
        <div className={styles.humanHandover}>
                  <sinch-textarea // eslint-disable-line
                    value={humanhandover}
                    label="Human Handover Message"
                    placeholder="Hi, welcome to Sinch S.P Black Friday. Check out our 50% OFF in all products. "
                    optionalText={undefined}
                    invalidText={undefined}
                    style={{ width: '100%' }}
                    class="humanhandover"
                    disabled={undefined}
                    onChange={(e) => {
                      const value = e.nativeEvent.detail

                      setHumanhandover(value)
                    }}
                    onFocus={() => {
                    }}
                    onBlur={() => {}}
                  />
        </div>
        <PhonePreview chats={chats as ({msg: string, sender: 'left' | 'right', blur?: boolean})[]}/>
      </div>
    </div>
  )
}

export const PageStepFour: FC = () => {
  const token = useContext(TokenContext)

  const [agentdetails, setAgentdetails] = useState([{ name: '', email: '' }])

  const [isOpen, setIsOpen] = useState(false)

  const [iserror, setIserror] = useState(false)

  const [activeelement, setActiveelement] = useState('')
  const { botquestion, humanhandover, greetingmsg, setHumanhandover } = usePageThreeControl()
  const { prev } = usePageControl()
  const [questionCounter, setCounter] = useState(1)

  const [agentcount, setAgentcount] = useState(0)

  const handleClickOpen = () => {
    setIsOpen(true)
  }

  const buttonCounter = () => {
    if (questionCounter < 6) {
      setCounter((prevCounter) => prevCounter + 1)

      const length = Object.keys(agentdetails).length

      agentdetails[length] = { name: '', email: '' }

      setAgentcount((count) => count + 1)
    }
  }

  async function nextPage() {
    const data = {
      token,
      greetingmsg,
      botquestion,
      agentdetails,
      humanhandover,
    }
    const response = await SendData(data)

    if (response === null) {
      setIserror(true)
      handleClickOpen()
    } else {
      handleClickOpen()
    }
  }

  const prevPage = () => {
    prev()
  }

  if (token === null) {
    return <div>Login First</div>
  }

  return (
    <div className={styles.pageWhatsapp}>
      <div className={styles.mainBodyWhatsapp}>

        {/* Page Header */}

        <PageHeader title="Human Handover" description="Configure the messages that are displayed on the conversation" activeStep={1} imageSrc={contactlogo}/>

        {/* Page Body */}

        <PageBody setHumanhandover={setHumanhandover} setActiveelement={setActiveelement} humanhandover={humanhandover} agentcount={agentcount} agentdetails={agentdetails} buttonCounter={buttonCounter} setAgentdetails={setAgentdetails} activeelement={activeelement} questionCounter={questionCounter} botquestion={botquestion} greetingmsg={greetingmsg}/>

        {/* Page Bottom */}

        <PageBottom backText="Back" backFunction={prevPage} nextText="Save" nextFunction={nextPage}/>
      </div>

      {/* Error/Success Dialog */}

      <Dialog iserror={iserror} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}
