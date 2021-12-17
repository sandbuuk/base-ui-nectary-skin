import styles from "./Page.module.css";
import { usePageControl } from "./PageContext";
import type { FC } from "react";
import sinchlogo from "./images/sinchlogo.jpg";
import signinimage from "./images/signin.jpg";
import google from "./images/googlebg.jpg";
import facebook from "./images/facebookbg.jpg";

export const PageStepTwo: FC = () => {
  const { next } = usePageControl();

  return (
    <div className={styles.page}>
      <div className={styles.parentLogin}>
        <div className={styles.signIn}>
          <h2 className={styles.fontName}> Log in </h2>
          <form className={styles.form}>
            <sinch-input
              className={styles.sinchInput}
              value=""
              onChange={() => {}}
              label="E-mail"
              placeholder="john.doe@gmail.com"
            ></sinch-input>
            <sinch-input
              value=""
              onChange={() => {}}
              label="Password"
              placeholder="Placeholder"
              optionalText="8+ characters"
            ></sinch-input>
            
            <div className={styles.createAccdiv}>
              <sinch-button
                className={styles.createAcc}
                style={{ height: "30px", width: "200px" }}
                type="cta"
                onClick={next}
                text="Login"
              />
            </div>
          </form>
          <div className={styles.signinFG}>
            <sinch-button
              type="secondary"
              onClick={() => {}}
              text="Login with Google"
            >
              <img className={styles.googleImg} src={google} />
            </sinch-button>
            <div className={styles.facebookSignup}>
              <sinch-button
                type="secondary"
                onClick={() => {}}
                text="Login with Facebook"
              >
                <img className={styles.googleImg} src={facebook} />
              </sinch-button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.nameAlogo}>
          <h1>Welcome back to Sinch! </h1>
          <img src={sinchlogo} className={styles.sinchlogo} />
        </div>
        <div className={styles.description}>
          <h3>
            We help you deliver outstanding conversational customer experiences
          </h3>
        </div>
        <div className={styles.simage}>
          <img src={signinimage} className={styles.signinImage} />
        </div>
      </div>
    </div>
  );
};
