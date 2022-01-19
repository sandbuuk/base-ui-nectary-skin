import axios from 'axios'
import { useState } from 'react'
import { Congratsbox } from './CongratsBox'
import styles from './Page.module.css'
//import { usePageControl } from './PageContext'
import { usePageOneControl } from './PageStepOneContext'
import { usePageThreeControl } from './PageStepThreeContext'
import { PageSteps } from './PageSteps'
import { useStepperControl } from './StepperContext'
import contactlogo from './images/contactlogo.jpg'
import humanMobile from './images/humanMobile.png'
import verticalLine from './images/verticalLine.png'
import type { FC } from 'react'

type WhatsappquestionProps={
  i: number,
  questionCounter: number,
  agentdetails: any[],
  setAgentdetails: (value: any) => void,
}

type AgentInformationProps={
  agentdetails: { name: string, email: string }[],
}

const WhatsappQuestion: FC<WhatsappquestionProps> = (props) => {
  const { agentdetails, questionCounter, setAgentdetails } = props

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
              [props.i]: { name: value, email: '' },
            }))
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
          onChange={(value) => {
            setAgentdetails((datas: string[]) => ({
              ...datas,
              [props.i]: { name: agentdetails[props.i].name, email: value },
            }))
          }}
          label="Agent e-mail"
          placeholder="What is your email?"
        />
      </div>
    </div>
  )
}

const AgentInformation: FC<AgentInformationProps> = (props) => {
  const { agentdetails } = props

  return (
    <>
      { [...Array(Object.keys(agentdetails).length - 1)].map((_, i) => (
        <tr key={i} className={styles.humanValues}>
          <td className={styles.humanName}>
            <p>{agentdetails[i].name}</p>
          </td>
          <td className={styles.humanEmail}>
            <p>{agentdetails[i].email}</p>
          </td>
          <td className={styles.humanAction}>
            <div className={styles.humanDetailsbuttons}>
              <sinch-button type="primary" text="Edit" onClick={() => {}}/>
              <sinch-button type="destructive" text="Delete" onClick={() => {}}/>
            </div>
          </td>
        </tr>
      )) }
    </>
  )
}

export const PageStepFour: FC = () => {
  //const { next } = usePageControl()

  const [agentdetails, setAgentdetails] = useState([{ name: '', email: '' }])

  console.log(agentdetails)

  const { accountId } = usePageOneControl()

  console.log(accountId)

  const { botquestion, humanhandover, setHumanhandover } = usePageThreeControl()

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

    questions.push({ questionText: humanhandover })

    const botquestions = botquestion.map((val, index) => {
      console.log(index)

      questions.push({ questionText: val })
    })

    console.log(botquestions)
    questions.push({ questionText: humanhandover })

    let agents: { name: string, email: string }[] = []
    const agentsDetails = agentdetails.map((val, index) => {
      console.log(index)

      if (val.name.length > 0 && val.email.length > 0) {
        agents.push({ name: val.name, email: val.email })
      }
    })

    agents = agents.filter((val) => {
      if (val != null) {
        return val
      }
    })

    console.log(agentsDetails)

    const content = JSON.stringify({
      accountId,
      questions,
      agents,
    })
    const url = 'https://quickstart.default.labengage.sinch.com/configuration'
    const config = { headers: { 'Content-Type': 'application/json' } }
    const response = await axios.put(url, content, config)

    console.log(response)
    handleClickOpen()
  }

  const prevPage = () => {
    handleBack()
  }

  return (
    <div className={styles.pageWhatsapp}>
      <div className={styles.mainBodyWhatsapp}>
        <div className={styles.whatsappHeading}>
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
        </div>
        <div className={styles.whatsappBody}>
          <div className={styles.messagesParent}>
            <div className={styles.humanMessages}>
              { <WhatsappQuestion questionCounter={questionCounter} agentdetails={agentdetails} setAgentdetails={setAgentdetails} key={count} i={count}/>}
              <div className={styles.humanButton}>
                <sinch-button
                  style={{ width: '100%' }}
                  type="cta"
                  disabled={questionCounter > 5 || agentdetails[Object.keys(agentdetails).length - 1].name.length <= 0 || agentdetails[Object.keys(agentdetails).length - 1].email.length <= 0 ? true : undefined}
                  onClick={buttonCounter}
                  text="Add more Agents (Up to 5)"
                />
              </div>
              <div className={styles.humanDetails}>
                <th className={count > 0 ? styles.human : styles.humanhidden}>
                  <td className={styles.humanName}>
                    Name
                  </td>
                  <td className={styles.humanEmail}>
                    E-mail
                  </td>
                  <td className={styles.humanAction}>
                    Action
                  </td>
                </th>
                <hr className={count > 0 ? styles.horizontaLine : styles.horizontaLinehidden}/>
                <AgentInformation agentdetails={agentdetails}/>
              </div>
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
                    onFocus={() => {}}
                    onBlur={() => {}}
                  />
            </div>
            <div className={styles.preview}>
              <img
                className={styles.mobilegif}
                src={humanMobile}
              />
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.backBut}>
            <sinch-button type="destructive" text="Back" onClick={prevPage}/>
          </div>
          <div className={styles.saveBut}>
            { <Congratsbox open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/> }
            <sinch-button type="primary" text="Next" onClick={nextPage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

