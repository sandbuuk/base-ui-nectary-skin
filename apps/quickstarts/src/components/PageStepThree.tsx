import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import { PageSteps } from './PageSteps'
import { useStepperControl } from './StepperContext'
import chatlayerlogo from './images/chatlayerlogo.jpg'
import info from './images/info.png'
import type { FC } from 'react'

export const PageStepThree: FC = () => {
  const { next } = usePageControl()
  const { handleNext } = useStepperControl()
  //handleNext(0);

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
                    value=""
                    onChange={() => {}}
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
                <div className={styles.botmessagesInput}>
                  <div className={styles.botInput}>
                    <sinch-input
                      value=""
                      onChange={() => {}}
                      label="Question 1"
                      placeholder="What is your name?"
                    />
                  </div>
                  <div className={styles.botInput}>
                    <sinch-select
                      value=""
                      onChange={() => {}}
                      label="Type"
                      placeholder="Name"
                    >
                      <sinch-select-option
                        value="1"
                        text="Software Engineer"
                        slot="select"
                      />
                      <sinch-select-option
                        value="2"
                        text="Data Analyst"
                        slot="select"
                      />
                      <sinch-select-option
                        value="3"
                        text="Product Manager"
                        slot="select"
                      />
                      <sinch-select-option
                        value="4"
                        text="Software Architect"
                        slot="select"
                      />
                    </sinch-select>
                  </div>
                  <div className={styles.botInput}>
                    <sinch-input
                      value=""
                      onChange={() => {}}
                      label="Save as"
                      placeholder="name"
                    />
                  </div>
                </div>
                <div className={styles.botmessagesInput}>
                  <div className={styles.botInput}>
                    <sinch-input
                      value=""
                      onChange={() => {}}
                      label="Question 2"
                      placeholder="How much do you wanna spent?"
                    />
                  </div>
                  <div className={styles.botInput}>
                    <sinch-select
                      value=""
                      onChange={() => {}}
                      label="Type"
                      placeholder="Custom"
                    >
                      <sinch-select-option
                        value="1"
                        text="Software Engineer"
                        slot="select"
                      />
                      <sinch-select-option
                        value="2"
                        text="Data Analyst"
                        slot="select"
                      />
                      <sinch-select-option
                        value="3"
                        text="Product Manager"
                        slot="select"
                      />
                      <sinch-select-option
                        value="4"
                        text="Software Architect"
                        slot="select"
                      />
                    </sinch-select>
                  </div>
                  <div className={styles.botInput}>
                    <sinch-input
                      value=""
                      onChange={() => {}}
                      label="Save as"
                      placeholder="price_range"
                    />
                  </div>
                </div>
                <div className={styles.questionBtn}>
                  <sinch-button type="primary" text="Add new question" onClick={() => {}}/>
                </div>
                <div>
                  <sinch-input
                    value=""
                    onChange={() => {}}
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
