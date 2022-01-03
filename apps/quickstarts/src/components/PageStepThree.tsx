import { useState } from 'react'
import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import { usePageThreeControl } from './PageStepThreeContext'
import { PageSteps } from './PageSteps'
import { useStepperControl } from './StepperContext'
import chatlayerlogo from './images/chatlayerlogo.jpg'
import info from './images/info.png'
import type { FC } from 'react'

type Props = {
  name: number,
}

export const PageStepThree: FC = () => {
  const { next } = usePageControl()
  const { handleNext } = useStepperControl()
  const { botquestion, setBotquestion, greetingmsg, setGreetingmsg, humanhandover, setHumanhandover } = usePageThreeControl()
  //handleNext(0);

  const [flowCounter, setCounter] = useState(2)
  const WhatsappDetails: FC<Props> = (props): JSX.Element => {
    const k = props.name

    console.log(botquestion)

    return (
      <div className={styles.botmessagesInput}>
        <sinch-input
          key={k}
          value={botquestion[k - 1]}
          style={{ width: '100%' }}
          onChange={(value) => {
            const ob = botquestion

            ob[k - 1] = value
            setBotquestion(botquestion)
          }}
          label={`Question ${k}`}
          placeholder="What is your name?"
        />
      </div>
    )
  }

  const buttonCounter = () => {
    console.log(flowCounter)

    if (flowCounter < 5) {
      setCounter((prevCounter) => prevCounter + 1)
    }
  }

  const nextPage = () => {
    next()
    handleNext()
  }

  return (
    <div className={styles.botpageWhatsapp}>
      <div className={styles.botsteps}>
        <PageSteps/>
      </div>
      <div className={styles.botmainBodyWhatsapp}>
        <div className={styles.botwhatsappHeading}>
          <div className={styles.botwhatsappMatter}>
            <h2 className={styles.botwhatsappMatterHeading}>
              WhatsApp Message Flow
            </h2>
            <p className={styles.botwhatsappMatterBody}>
              Configure the messages that are displayed on the conversation
            </p>
          </div>

          <div className={styles.chatlayerLogo}>
            <div className="empty"/>
            <div className="actualLogo">
              <p className={styles.poweredBy}>Powered By:</p>
              <img className={styles.chatLayer} src={chatlayerlogo}/>
            </div>
          </div>
        </div>
        <div className={styles.botwhatsappBody}>
          <div className={styles.botmessagesParent}>
            <div className={styles.bothumanMessages}>
              <div className={styles.botquestions}>
                <div className={styles.botGreet}>
                  <sinch-input
                    style={{ width: '100%' }}
                    value={greetingmsg}
                    onChange={(value) => {
                      setGreetingmsg(value)
                    }}
                    label="Greeting"
                    placeholder="Hi, welcome to Sinch S.P Black Friday. Check out our 50% OFF in all products. "
                  />
                  <p>
                    You can add up to 5 questions before transfering your
                    customer to your sales person.
                  </p>
                  <div className={styles.botexclamation}>
                    <div className={styles.infoData}>
                      <img className={styles.infoImg} src={info}/>
                      <h4 className={styles.infoHead}>Don't worry!</h4>
                    </div>
                    <p className={styles.infoBody}>You will have all the answers once...</p>
                  </div>
                </div>
                { [...Array(flowCounter)].map((_, i) => <WhatsappDetails name={i + 1} key={i}/>)}
                <div className={styles.questionBtn}>
                  <sinch-button
                    style={{ width: '100%' }}
                    type="primary"
                    onClick={buttonCounter}
                    text="Add new question"
                  />
                </div>
                <div className={styles.humanHandover}>
                  <sinch-input
                    style={{ width: '100%' }}
                    value={humanhandover}
                    onChange={(value) => {
                      setHumanhandover(value)
                    }}
                    label="Human Handover"
                    placeholder="Hi, welcome to Sinch S.P Black Friday. Check out our 50% OFF in all products. "
                  />
                </div>
              </div>
            </div>

            <div className={styles.botpreview}>
              <img
                className={styles.botmobilegif}
                src="https://i2.wp.com/chatlayer.ai/wp-content/uploads/2021/11/CL_21_HERO.gif?fit=472%2C1000&ssl=1"
              />
            </div>
          </div>
        </div>

        <div className={styles.botbuttons}>
          <div className={styles.botbackBut}>
            <sinch-button type="destructive" text="Cancel" onClick={nextPage}/>
          </div>
          <div className={styles.botsaveBut}>
            <sinch-button type="primary" text="Next" onClick={nextPage}/>
          </div>
        </div>
      </div>
    </div>
  )
}
