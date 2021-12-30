import { useState } from 'react'
import { Congratsbox } from './CongratsBox'
import styles from './Page.module.css'
//import { usePageControl } from './PageContext'
import { PageSteps } from './PageSteps'
import { useStepperControl } from './StepperContext'
import contactlogo from './images/contactlogo.jpg'
import type { FC } from 'react'

export const WhatsappQuestion: FC = () => {
  return (
    <div className={styles.messagesInput}>
      <div className={styles.Input}>
        <sinch-input
          className={styles.agentName}
          value=""
          onChange={() => {}}
          label="Agent name"
          placeholder="What is your name?"
        />
      </div>
      <div className={styles.Input}>
        <sinch-input
          value=""
          onChange={() => {}}
          label="Agent e-mail"
          placeholder="What is your email?"
        />
      </div>
    </div>
  )
}

export const PageStepFour: FC = () => {
  //const { next } = usePageControl()
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

  const nextPage = () => {
    handleClickOpen()
  }

  const prevPage = () => {
    handleBack()
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
              { [...Array(questionCounter)].map((_, i) => <WhatsappQuestion key={i}/>) }
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
