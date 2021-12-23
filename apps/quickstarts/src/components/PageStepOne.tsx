//import axios from 'axios'
import { useState } from 'react'
import styles from './Page.module.css'
import facebook from './images/facebookbg.jpg'
import google from './images/googlebg.jpg'
import signupimage from './images/signup.jpg'
import sinchlogo from './images/sinchlogo.jpg'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/select'

export const PageStepOne: FC = () => {
  //const { next } = usePageControl()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('')

  async function getUsers() {
    try {
      const body = new FormData()

      body.append('email', email)
      body.append('firstName', firstName)
      body.append('lastName', lastName)
      body.append('role', role)

      const res = await fetch('https://quickstart.default.labengage.sinch.com/account', {
        method: 'POST',
        body: JSON.stringify({ email, firstName, lastName, role }),
      })
      const k = await res.json()

      console.log(k)
    } catch (error) {
      console.log(error)
    }
  }

  // async function getPostsData() {
  //   const response = await axios.get('/account')

  //   console.log(response)
  // }

  return (
    <div className={styles.page}>
      <div className={styles.parent}>
        <div className={styles.signUp}>
          <h2 className={styles.fontName}> Sign up to Sinch </h2>
          <form className={styles.form}>
            <sinch-input
              className={styles.sinchInput}
              value=""
              onChange={(value) => {
                setEmail(value)
              }}
              label="E-mail"
              placeholder="john.doe@gmail.com"
            />
            <sinch-input
              value=""
              onChange={() => {
              }}
              label="Password"
              placeholder="Placeholder"
              optionalText="8+ characters"
            />
            <sinch-input
              value={firstName}
              onChange={(value) => {
                setFirstName(value)
              }}
              label="First Name"
              placeholder="John"
            />
            <sinch-input
              value={lastName}
              onChange={(value) => {
                setLastName(value)
              }}
              label="Last Name"
              placeholder="Doe"
            />
            <sinch-select
              value={role}
              onChange={(value) => {
                setRole(value)
              }}
              label="Your role"
            >
              <sinch-select-option
                value="Software Engineer"
                text="Software Engineer"
                slot="select"
              />
              <sinch-select-option
                value="Data Analyst"
                text="Data Analyst"
                slot="select"
              />
              <sinch-select-option
                value="Product Manager"
                text="Product Manager"
                slot="select"
              />
              <sinch-select-option
                value="Software Architect"
                text="Software Architect"
                slot="select"
              />
            </sinch-select>
            <sinch-button
              className={styles.createAcc}
              style={{ width: '75%' }}
              type="cta"
              onClick={getUsers}
              text="Create Account"
            />
            <div className={styles.signupFG}>
              <sinch-button
                style={{ width: '75%' }}
                type="secondary"
                onClick={() => {}}
                text="Signup with Google"
              >
                <img className={styles.googleImg} src={google}/>
              </sinch-button>
              <div className={styles.facebookSignup}>
                <sinch-button
                  style={{ width: '75%' }}
                  type="secondary"
                  onClick={() => {}}
                  text="Signup with Facebook"
                >
                  <img className={styles.googleImg} src={facebook}/>
                </sinch-button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.nameAlogo}>
          <h1>Welcome to Sinch! </h1>
          <img src={sinchlogo} className={styles.sinchlogo}/>
        </div>
        <div className={styles.description}>
          <h3>
            We help you deliver outstanding conversational customer experiences
          </h3>
        </div>
        <div className={styles.image}>
          <img src={signupimage} className={styles.signupImage}/>
        </div>
      </div>
    </div>
  )
}
