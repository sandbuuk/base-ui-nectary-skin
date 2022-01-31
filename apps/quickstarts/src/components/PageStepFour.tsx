import axios from 'axios'
import { useState } from 'react'
import { Congratsbox } from './CongratsBox'
import { useOnBoardingControl } from './OnBoardingcontext'
import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import { usePageOneControl } from './PageStepOneContext'
import { usePageThreeControl } from './PageStepThreeContext'
import { PageSteps } from './PageSteps'
import { useStepperControl } from './StepperContext'
import contactlogo from './images/contactlogo.jpg'
import mobile from './images/mobile.png'
import verticalLine from './images/verticalLine.png'
import type { FC } from 'react'

type WhatsappquestionProps={
  i: number,
  questionCounter: number,
  agentdetails: any[],
  setAgentdetails: (value: any) => void,
  setDisplay: (value: any) => void,
}

type AgentInformationProps={
  agentdetails: { name: string, email: string }[],
  setAgentdetails: (value: any) => void,
}

const WhatsappQuestion: FC<WhatsappquestionProps> = (props) => {
  const { agentdetails, questionCounter, setAgentdetails, setDisplay } = props

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

  const [display, setDisplay] = useState(true)

  const [iserror, setIserror] = useState(false)

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

  const [open, setOpen] = useState(false)

  const [count, setCount] = useState(0)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
                <div className={iserror ? styles.errorAlert : styles.hiddenerrorAlert}>
                  <sinch-alert
                    type="error"
                    text="Error in saving trail configuration"
                  />
                </div>
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
                { <WhatsappQuestion setDisplay={setDisplay} questionCounter={questionCounter} agentdetails={agentdetails} setAgentdetails={setAgentdetails} key={count} i={count}/>}
                <div className={styles.humanButton}>
                  <sinch-button
                    style={{ width: '100%' }}
                    type="cta"
                    disabled={questionCounter > 5 || agentdetails[Object.keys(agentdetails).length - 1].name.length <= 0 || agentdetails[Object.keys(agentdetails).length - 1].email.length <= 0 || validateEmail(agentdetails[Object.keys(agentdetails).length - 1].email) == null ? true : undefined}
                    onClick={buttonCounter}
                    text="Add more Agents (Up to 5)"
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
              <div className={styles.botpreview}>
                <div style={{ backgroundImage: `url(${mobile})` }} className={styles.botImage}>
                  <div className={styles.messagesBot}>
                    <div className={greetingmsg.length > 0 ? styles.botMessage : styles.hide}>
                      {greetingmsg}
                    </div>
                    <div className={styles.userMessage}>
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
                    <div key={'humanhandovermessage'} className={humanhandover.length > 0 && display ? styles.botMessage : styles.hide}>
                      {humanhandover}
                    </div>

                  </div>

                </div>
                <div className={styles.emptyDiv}/>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <div className={styles.backBut}>
              <sinch-button type="destructive" text="Back" onClick={prevPage}/>
            </div>
            <div className={styles.saveBut}>
              { <Congratsbox open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/> }
              <sinch-button type="primary" text="Next" onClick={nextPage} disabled={Object.keys(agentdetails).length > 1 ? undefined : true}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>Sign in First</div>
  )
}
