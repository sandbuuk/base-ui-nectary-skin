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
import type { FC } from 'react'

export const PageStepFour: FC = () => {
  //const { next } = usePageControl()

  const [agentdetails, setAgentdetails] = useState([{ name: '', email: '' }])
  type WhatsappquestionProps={
    i: number,
  }

  const { accountId } = usePageOneControl()

  console.log(accountId)

  const { botquestion, greetingmsg, humanhandover } = usePageThreeControl()

  const { handleBack } = useStepperControl()
  //handleNext(1);
  const [questionCounter, setCounter] = useState(1)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const buttonCounter = () => {
    console.log(questionCounter)

    if (questionCounter < 5) {
      setCounter((prevCounter) => prevCounter + 1)
    }
  }

  async function nextPage() {
    const questions = []

    questions.push({ questionText: greetingmsg })

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

  const WhatsappQuestion: FC<WhatsappquestionProps> = (props) => {
    console.log(props.i)
    console.log(agentdetails)

    if (questionCounter > 1) {
      const ob = agentdetails

      ob.push({ name: '', email: '' })
      setAgentdetails(ob)
    }

    return (
      <div className={styles.messagesInput}>
        <div className={styles.Input}>
          <sinch-input
            key={`${props.i}name`}
            className={styles.agentName}
            value={agentdetails[props.i].name}
            onChange={(value) => {
              const ob = agentdetails

              ob[props.i].name = value
              setAgentdetails(ob)
            }}
            label="Agent name"
            placeholder="What is your name?"
          />
        </div>
        <div className={styles.Input}>
          <sinch-input
            key={`${props.i}email`}
            value={agentdetails[props.i].email}
            onChange={(value) => {
              const ob = agentdetails

              ob[props.i].email = value
              setAgentdetails(ob)
            }}
            label="Agent e-mail"
            placeholder="What is your email?"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.pageWhatsapp}>
      <div className={styles.steps}>
        <PageSteps/>
      </div>
      <div className={styles.mainBodyWhatsapp}>
        <div className={styles.whatsappHeading}>
          <div className={styles.whatsappMatter}>
            <h2 className={styles.whatsappMatterHeading}>Human Handover</h2>
            <p className={styles.whatsappMatterBody}>
              Configure the agents that will be responsible for contacting the
              customers
            </p>
          </div>

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
              { [...Array(questionCounter)].map((_, i) => <WhatsappQuestion key={i} i={i}/>) }
              <div>
                <sinch-button
                  style={{ width: '100%' }}
                  type="primary"
                  onClick={buttonCounter}
                  text={questionCounter < 5 ? `Add more Agents (Up to ${5 - questionCounter} )` : 'Add more Agents (Up to 0)'}
                />
              </div>

            </div>
            <div className={styles.preview}>
              <img
                className={styles.mobilegif}
                src="https://i2.wp.com/chatlayer.ai/wp-content/uploads/2021/11/CL_21_HERO.gif?fit=472%2C1000&ssl=1"
              />
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.backBut}>
            <sinch-button type="destructive" text="Cancel" onClick={prevPage}/>
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

