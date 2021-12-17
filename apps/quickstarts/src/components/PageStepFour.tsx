import styles from "./Page.module.css";
import { usePageControl } from "./PageContext";
import { FC, useState } from "react";
import contactlogo from "./images/contactlogo.jpg";
import { PageSteps } from "./PageSteps";
import { useStepperControl } from "./StepperContext";

export const PageStepFour: FC = () => {
  const { reset, next } = usePageControl();
  const { activeStep, handleNext, handleBack } = useStepperControl();
  //handleNext(1);

  const nextPage = ()=>{
    next();
    handleNext();
  }

  const prevPage = ()=>{
    handleBack();
  }

  return (
    <div className={styles.pageWhatsapp}>
      <div className={styles.steps}>
        <PageSteps />
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
            <div className="empty"></div>
            <div className="actualLogo">
              <p className={styles.poweredBy}>Powered By:</p>
              <img className={styles.chatLayer} src={contactlogo} />
            </div>
          </div>
        </div>
        <div className={styles.whatsappBody}>
          <div className={styles.messagesParent}>
            <div className={styles.humanMessages}>
              <div className={styles.messagesInput}>
                <div className={styles.Input}>
                  <sinch-input
                    value=""
                    onChange={() => {}}
                    label="Agent name"
                    placeholder="What is your name?"
                  ></sinch-input>
                </div>
                <div className={styles.Input}>
                  <sinch-input
                    value=""
                    onChange={() => {}}
                    label="Agent e-mail"
                    placeholder="What is your email?"
                  ></sinch-input>
                </div>
              </div>

              <div>
                 <sinch-button
                  type="primary"
                  onClick={()=>{}}
                  text="Add more agents (Up to 5)"
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
            <sinch-button type="destructive" text="Cancel" onClick={prevPage} />
          </div>
          <div className={styles.saveBut}>
            <sinch-button type="primary" text="Next" onClick={nextPage} />
          </div>
        </div>
      </div>
    </div>
  );
};
