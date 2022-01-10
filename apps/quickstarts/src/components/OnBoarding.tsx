import styles from './Page.module.css'
import capturing from './images/capturing.png'
import correct from './images/correct.png'
import decision from './images/decision.png'
import greeting from './images/greeting.png'
import integration from './images/integration.png'
import integrationsLogo from './images/integrationsLogo.png'
import offering from './images/offering.png'
import onboardingLogo from './images/onboardingLogo.png'
import mobile from './images/onboardingMobile.png'
import shopping from './images/shopping.png'
import stepper from './images/stepper.png'
import whatsappLogo from './images/whatsappLogo.png'
import type { FC } from 'react'

export const OnBoarding: FC = () => {
  return (
    <div className={styles.onboardingPage}>
      <div className={styles.onboardingHeader}>
        <div className={styles.onboardingHeading}>
          Quick Bot + Human Handover
          <p className={styles.OnboardingCaption}>Redirect customers to a Whatsapp Chatbot with Human Handover through Click to Whatsapp Adbutton</p>
        </div>
        <div className={styles.onbaordingLogodiv}>
          <img className={styles.onbaordingLogodiv} src={onboardingLogo}/>
        </div>
      </div>
      <div className={styles.onboardingBody}>
        <div className={styles.quickstartDeal}>
          <img className={styles.onboardingMobile} src={mobile}/>
          <div className={styles.quickstartIdeal}>
            <div className={styles.quickstartIdealTitle}>This Quick Start is ideal for:</div>
            <div className={styles.iconsDiv}>
              <div className={styles.iconsDivfirstRow}>
                <div className={styles.iconDiv}>
                  <img className={styles.onboardingIcons} src={capturing}/>
                  <p className={styles.iconMatter}>Capturing qualified leads</p>
                </div>
                <div className={styles.iconDiv}>
                  <img className={styles.onboardingIcons} src={greeting}/>
                  <p className={styles.iconMatter}>Offering customer support</p>
                </div>
                <div className={styles.iconDiv}>
                  <img className={styles.onboardingIcons} src={integration}/>
                  <p className={styles.iconMatter}>Integrating all channels into one</p>
                </div>
              </div>
              <div className={styles.iconsDivsecondRow}>
                <div className={styles.iconDiv}>
                  <img className={styles.onboardingIcons} src={offering}/>
                  <p className={styles.iconMatter}>Offering customer support</p>
                </div>
                <div className={styles.iconDiv}>
                  <img className={styles.onboardingIcons} src={decision}/>
                  <p className={styles.iconMatter}>Making decisions based on Marketing Campaigns data</p>
                </div>
                <div className={styles.iconDiv}/>
              </div>
              <div className={styles.features}>
                <div className={styles.featuresTitle}>Features</div>
                <div className={styles.featureDiv}>
                  <img className={styles.correct} src={correct}/>
                  <div className={styles.feature}>Create up to 5 questions in order to assess more assertive leads</div>
                </div>
                <div className={styles.featureDiv}>
                  <img className={styles.correct} src={correct}/>
                  <div className={styles.feature}>Answer customers from all platforms at one place</div>
                </div>
                <div className={styles.featureDiv}>
                  <img className={styles.correct} src={correct}/>
                  <div className={styles.feature}>Have access to real time data and generate reports at any time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.onboardingStepsDiv}>
          <div className={styles.stepsParentDiv}>
            <div className={styles.stepperIntegration}>
              <div className={styles.stepsLeft}>
                <div className={styles.stepsTitle}>Steps</div>
                <div className={styles.onboardingSteps}>
                  <div className={styles.stepperImagediv}>
                    <img className={styles.stepperImage} src={stepper}/>
                  </div>
                  <div className={styles.stepperDiv}>
                    <div className={styles.stepperoneText}>
                      <div className={styles.stepperHeading}>Greeting message and dialog configuration</div>
                      <p className={styles.stepperText}>Configure the greeting message and create up to 5 questions.</p>
                    </div>

                    <div className={styles.steppertwoText}>
                      <div className={styles.stepperHeading}>Human handover configuration</div>
                      <p className={styles.stepperText}>Configure the agents that will be responsible for contacting the customers.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className={styles.stepperBottom}>
                <div className={styles.onboardingChannelsDiv}>
                  <div className={styles.onboardingChannels}>Channels</div>
                  <img className={styles.whatsappLogo} src={whatsappLogo}/>
                </div>

                <div className={styles.onboardingIntegrations}>
                  <div className={styles.onboardingChannelsDiv}>
                    <div className={styles.onboardingChannels}>Integrations</div>
                    <img className={styles.integrationsLogo} src={integrationsLogo}/>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.shoppingImage}>
              <img className={styles.shoppingIm} src={shopping}/>
            </div>
          </div>

          <div className={styles.onboardingBottom}>
            <div className={styles.onboardingStartname}>
              <sinch-input class={styles.startnameInput} label="Quick Start Name" placeholder="My first Quick start" onChange={() => {}} value=""/>
            </div>
            <div>
              <sinch-button class={styles.startnameButton} type="cta" text="start" onClick={() => {}}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

