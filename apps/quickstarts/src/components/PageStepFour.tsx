import axios from 'axios'
import { useEffect, useState } from 'react'
//import { Congratsbox } from './CongratsBox'
import { useOnBoardingControl } from './OnBoardingcontext'
import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import { usePageOneControl } from './PageStepOneContext'
import { usePageThreeControl } from './PageStepThreeContext'
import { PageSteps } from './PageSteps'
import { useStepperControl } from './StepperContext'
import congratsimage from './images/congratsimage.jpg'
import contactlogo from './images/contactlogo.jpg'
import errorimage from './images/erroDialogImage.png'
import mobile from './images/mobile.png'
import verticalLine from './images/verticalLine.png'
import type { FC } from 'react'

type WhatsappquestionProps={
  i: number,
  questionCounter: number,
  agentdetails: any[],
  activeelement: string,
  setActiveelement: (value: string) => void,
  setAgentdetails: (value: any) => void,
  setDisplay: (value: any) => void,
}

type AgentInformationProps={
  agentdetails: { name: string, email: string }[],
  setAgentdetails: (value: any) => void,
}
type Props = {
  isOpen: boolean,
  setIsOpen: (value: any) => void,
}
type Propsed = {
  iserror: boolean,
  setIserror: (value: any) => void,
}

export const Dialog: FC<Props> = (props): JSX.Element => {
  const { isOpen, setIsOpen } = props
  let dialog = (
    <div style={{
      width: '700px',
      maxWidth: '100%',
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
          console.log('Heyyyy')
          setIsOpen((isOpen: boolean) => {
            return !isOpen
          })
        }}
      >x
      </button>

      <div className={styles.Congrats}>
        <div className={styles.congratsText}>
          <h2 className={styles.congratsTitle}>Congratulations! You've finished your Quick Start!</h2>
        </div>
        <img src={congratsimage} className={styles.congratsimage}/>
        <sinch-button style={{ width: '35%', marginBottom: '2%' }} type="cta" text="Try it out!" onClick={() => {}}/>
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

export const ErrorDialog: FC<Propsed> = (props): JSX.Element => {
  const { iserror, setIserror } = props
  let dialog = (
    <div style={{
      width: '700px',
      maxWidth: '100%',
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

      <div className={styles.Error}>
        <div className={styles.errorText}>
          <h2 className={styles.errorTitle}>The configuration could not be saved.</h2>
          <h2 className={styles.errorBody}>Please try again in a few moments.</h2>
        </div>
        <img src={errorimage} className={styles.errorimage}/>
        <sinch-button
          style={{ width: '20%', marginBottom: '2%' }}
          type="cta"
          text="Try again"
          onClick={() => {
            console.log('Heyyyy')
            setIserror((isOpen: boolean) => {
              return !isOpen
            })
          }}
        />
      </div>
    </div>
  )

  if (iserror == false) {
    dialog = null as any
  }

  return (
    <div>
      {dialog}
    </div>
  )
}

const WhatsappQuestion: FC<WhatsappquestionProps> = (props) => {
  const { agentdetails, questionCounter, setAgentdetails, setDisplay, setActiveelement } = props

  function getActiveElement(root: Document | ShadowRoot = document): Element | null {
    const activeEl = root.activeElement

    if (activeEl == null) {
      return null
    }

    console.log(`reyyy idi element ${activeEl.tagName}`)

    if (activeEl.shadowRoot != null) {
      if (activeEl.tagName == 'SINCH-INPUT' || activeEl.tagName == 'SINCH-TEXTAREA') {
        return activeEl
      }

      return getActiveElement(activeEl.shadowRoot)
    }

    return activeEl
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Active elkement entante ${getActiveElement()?.className}`)
      setActiveelement(getActiveElement() == null ? '' : getActiveElement()!.className)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const validateEmail = (email: String) => {
    return String(email)
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  console.log(agentdetails, questionCounter)

  return (
    <div className={styles.messagesInput}>
      <div className={styles.Input}>
        <sinch-input
          key={`${props.i}name`}
          className={styles.agentName}
          value={agentdetails[props.i].name}
          style={{ width: '100%' }}
          onChange={(value) => {
            setAgentdetails((datas: string[]) => ({
              ...datas,
              [props.i]: { name: value, email: agentdetails[props.i].email },
            }))
          }}
          onFocus={() => {
            setDisplay(true)
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
          onChange={(value) => {
            setAgentdetails((datas: string[]) => ({
              ...datas,
              [props.i]: { name: agentdetails[props.i].name, email: value },
            }))
          }}
          onFocus={() => {
            setDisplay(true)
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

export const PageStepFour: FC = () => {
  //const { next } = usePageControl()

  const [agentdetails, setAgentdetails] = useState([{ name: '', email: '' }])

  const [isOpen, setIsOpen] = useState(false)

  const [display, setDisplay] = useState(true)

  console.log(display)

  const [iserror, setIserror] = useState(false)

  const [activeelement, setActiveelement] = useState('')

  console.log(agentdetails)

  const { accountId } = usePageOneControl()

  const { token } = usePageOneControl()

  const validateEmail = (email: String) => {
    return String(email)
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  console.log(accountId)

  const { botquestion, humanhandover, greetingmsg, setHumanhandover } = usePageThreeControl()
  const { username } = useOnBoardingControl()
  const { prev } = usePageControl()
  const { handleBack } = useStepperControl()
  //handleNext(1);
  const [questionCounter, setCounter] = useState(1)

  const [count, setCount] = useState(0)

  const handleClickOpen = () => {
    setIsOpen(true)
  }

  const buttonCounter = () => {
    console.log(questionCounter)

    if (questionCounter < 6) {
      setCounter((prevCounter) => prevCounter + 1)

      const length = Object.keys(agentdetails).length

      agentdetails[length] = { name: '', email: '' }

      setCount((count) => count + 1)
    }
  }

  async function nextPage() {
    const questions = []

    questions.push({ questionText: greetingmsg })

    const botquestions = Object.keys(botquestion).map((i: any) => {
      console.log(`i=${i})`)
      questions.push({ questionText: botquestion[i] })
    })

    console.log(botquestions)
    console.log(questions)

    questions.push({ questionText: humanhandover })

    let agents: { name: string, email: string }[] = []
    const agentDetails = Object.keys(agentdetails).map((index: any) => {
      if (agentdetails[index].name.length > 0 && agentdetails[index].email.length > 0) {
        agents.push({ name: agentdetails[index].name, email: agentdetails[index].email })
      }
    })

    console.log(agentDetails)

    // const agentsDetails = agentdetails.map((val, index) => {
    //   console.log(index)

    //   if (val.name.length > 0 && val.email.length > 0) {
    //     agents.push({ name: val.name, email: val.email })
    //   }
    // })

    agents = agents.filter((val) => {
      if (val != null) {
        return val
      }
    })

    const content = JSON.stringify({
      accountId,
      name: username,
      questions,
      agents,
    })
    const url = 'https://quickstart.default.labengage.sinch.com/configuration'
    const config = { headers: { 'Content-Type': 'application/json' } }

    if (accountId.length > 0) {
      const response = await axios.put(url, content, config)

      if (typeof (response.data.info) != 'undefined') {
        setIserror(true)
      } else {
        console.log(response)
        handleClickOpen()
      }
    } else {
      console.log('SignIn first')
    }
  }

  const prevPage = () => {
    prev()
    handleBack()
  }

  if (token.length >= 0) {
    return (
      <div className={styles.pageWhatsapp}>
        <div className={styles.mainBodyWhatsapp}>
          <div className={styles.botwhatsappHeading}>
            <div className={styles.botwhatsappMatter}>
              <h2 className={styles.botwhatsappMatterHeading}>
                Human Handover
              </h2>
              <p className={styles.botwhatsappMatterBody}>
                Configure the messages that are displayed on the conversation
              </p>
            </div>
            <div className={styles.botpageSteps}><PageSteps/></div>

            <div className={styles.chatlayerLogo}>
              <div className="empty"/>
              <div className="actualLogo">
                <p className={styles.poweredBy}>Powered By:</p>
                <img className={styles.chatLayer} src={contactlogo}/>
              </div>
            </div>
          </div>
          {/* <div className={styles.whatsappHeading}>
            <div className={styles.whatsappMatter}>
              <h2 className={styles.whatsappMatterHeading}>Human Handover</h2>
              <p className={styles.whatsappMatterBody}>
                Configure the agents that will be responsible for contacting the
                customers
              </p>
            </div>
            <div className={styles.botpageSteps}><PageSteps/></div>
            <div className={styles.chatlayerLogo}>
              <div className="empty"/>
              <div className="actualLogo">
                <p className={styles.poweredBy}>Powered By:</p>
                <img className={styles.chatLayer} src={contactlogo}/>
              </div>
            </div>
          </div> */}
          <div className={styles.botwhatsappBody}>
            <div className={styles.messagesParent}>
              <div className={styles.humanMessages}>
                { <WhatsappQuestion setActiveelement={setActiveelement} activeelement={activeelement} setDisplay={setDisplay} questionCounter={questionCounter} agentdetails={agentdetails} setAgentdetails={setAgentdetails} key={count} i={count}/>}
                <div className={styles.humanButton}>
                  <sinch-button
                    style={{ width: '100%' }}
                    type="cta"
                    disabled={questionCounter > 5 || agentdetails[Object.keys(agentdetails).length - 1].name.length <= 0 || agentdetails[Object.keys(agentdetails).length - 1].email.length <= 0 || validateEmail(agentdetails[Object.keys(agentdetails).length - 1].email) == null ? true : undefined}
                    onClick={buttonCounter}
                    text={questionCounter <= 5 ? `Add more Agents (Up to ${6 - questionCounter} )` : 'Add more Agents (Up to 0)'}
                  />
                </div>
                <table className={styles.humanDetails}>
                  <thead>
                    <tr className={count > 0 ? styles.human : styles.humanhidden}>
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
              <img className={styles.humanLine} src={verticalLine}/>
              <div className={styles.humanHandover}>
                    <sinch-textarea // eslint-disable-line
                      value={humanhandover}
                      label="Human Handover Message"
                      placeholder="Hi, welcome to Sinch S.P Black Friday. Check out our 50% OFF in all products. "
                      optionalText={undefined}
                      invalidText={undefined}
                      style={{ width: '100%' }}
                      class="humanhandover"
                      additionalText={undefined}
                      disabled={undefined}
                      onChange={(value) => {
                        setHumanhandover(value)
                      }}
                      onFocus={() => {
                        setDisplay(false)
                      }}
                      onBlur={() => {}}
                    />
              </div>
              <div className={styles.botpreviewHuman}>
                <div style={{ backgroundImage: `url(${mobile})` }} className={styles.botImage}>
                  <div className={styles.messagesBot}>
                    <div className={greetingmsg.length > 0 ? styles.botMessage : styles.hide}>
                      {greetingmsg}
                    </div>
                    <div className={greetingmsg.length > 0 ? styles.userMessage : styles.hide}>
                      User greeting
                    </div>
                    {[...Array(Object.keys(botquestion).length)].map((_, i) => {
                      return (
                        <>
                          <div
                            key={`${i}bot`}
                            className={styles.botMessage}
                          >
                            {botquestion[i]}
                          </div>
                          <div key={`${i}user`} className={styles.userMessage}>
                            User Answer
                          </div>
                        </>
                      )
                    })}
                    <div key={'humanhandovermessage'} className={humanhandover.length > 0 && activeelement != 'humanhandover' ? styles.botMessage : styles.hide}>
                      {humanhandover}
                    </div>

                  </div>

                </div>
                <div className={styles.emptyDiv}/>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <div className={styles.backButhum}>
              <sinch-button type="destructive" text="Back" onClick={prevPage}/>
            </div>
            <div className={styles.saveButhum}>
              <sinch-button type="primary" text="Next" onClick={nextPage} disabled={Object.keys(agentdetails).length > 1 ? undefined : true}/>
            </div>
          </div>
        </div>
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ErrorDialog iserror={iserror} setIserror={setIserror}/>
      </div>
    )
  }

  return (
    <div>Sign in First</div>
  )
}
