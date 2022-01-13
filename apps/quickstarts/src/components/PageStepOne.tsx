//import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import { usePageOneControl } from './PageStepOneContext'
import facebook from './images/facebookbg.jpg'
import google from './images/googlebg.jpg'
import signupimage from './images/signup.jpg'
import sinchlogo from './images/sinchlogo.jpg'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/select'

export const PageStepOne: FC = () => {
  const { next } = usePageControl()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('')
  const [emailInvalidtext, setEmailInvalidtext] = useState('')
  const [firstnameInvalidtext, setfirstnameInvalidtext] = useState('')
  const [lastnameInvalidtext, setlastnameInvalidtext] = useState('')
  const [roleInvalidtext, setroleInvalidtext] = useState('')
  const [disabled, setDisabled] = useState(false)
  const { accountId, setAccountId } = usePageOneControl()

  async function sendData() {
    const res = await fetch('https://quickstart.default.labengage.sinch.com/account', {
      method: 'POST',
      body: JSON.stringify({ email, firstName, lastName, role }),
    })
    const k = await res.json()

    if (k.data.firstName === firstName) {
      console.log('Creation of user sucessful')
      console.log(typeof (k.data.ID))
      console.log(k.data.ID)
      setAccountId(k.data.ID)
      console.log(accountId)
      next()
    }
  }

  function getUsers() {
    try {
      const body = new FormData()
      let flag = true

      setEmailInvalidtext('')
      setfirstnameInvalidtext('')
      setlastnameInvalidtext('')
      setroleInvalidtext('')

      body.append('email', email)
      body.append('firstName', firstName)
      body.append('lastName', lastName)
      body.append('role', role)

      const validateNames = (name: string) => {
        return /\d/.test(name)
      }

      const validateEmail = (email: String) => {
        return String(email)
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      }

      if (!(email.length > 0)) {
        setEmailInvalidtext('Email should not be empty')

        if (flag) {
          flag = false
        }
      }

      if (!(firstName.length > 0)) {
        setfirstnameInvalidtext('First name should not be empty')

        if (flag) {
          flag = false
        }
      }

      if (!(lastName.length > 0)) {
        setlastnameInvalidtext('Last name should not be empty')

        if (flag) {
          flag = false
        }
      }

      if (!(role.length > 0)) {
        setroleInvalidtext('Role should not be empty')

        if (flag) {
          flag = false
        }
      }

      if (firstName.length > 0) {
        if (validateNames(firstName)) {
          setfirstnameInvalidtext('Last name should not contain numbers')

          if (flag) {
            flag = false
          }
        }
      }

      if (lastName.length > 0) {
        if (validateNames(lastName)) {
          setlastnameInvalidtext('Last name should not contain numbers')

          if (flag) {
            flag = false
          }
        }
      }

      if (email.length > 0) {
        if (validateEmail(email) != null) {
          if (flag) {
            console.log('Valid Mail')
            setDisabled(true)
          }
        } else {
          setEmailInvalidtext('Email entered is not valid')

          if (flag) {
            flag = false
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [firstName])
  useEffect(() => {
    getUsers()
  }, [lastName])
  useEffect(() => {
    getUsers()
  }, [email])
  useEffect(() => {
    getUsers()
  }, [role])

  // async function getPostsData() {
  //   const response = await axios.get('/account')

  //   console.log(response)
  // }

  return (
    <div className={styles.page}>
      <div className={styles.parent}>
        <div className={styles.signUp}>
          <h2 className={styles.fontNameTitle}> Sign up to Sinch </h2>
          <form className={styles.form}>
            <sinch-input
              className={styles.sinchInput}
              value=""
              onChange={(value) => {
                setEmail(value)
              }}
              invalidText={emailInvalidtext.length > 0 ? emailInvalidtext : undefined}
              label="E-mail"
              placeholder="john.doe@gmail.com"
            />
            {/* <sinch-input
              value=""
              onChange={() => {
              }}
              label="Password"
              placeholder="Placeholder"
              optionalText="8+ characters"
            /> */}
            <sinch-input
              value={firstName}
              onChange={(value) => {
                setFirstName(value)
              }}
              label="First Name"
              invalidText={firstnameInvalidtext.length > 0 ? firstnameInvalidtext : undefined}
              placeholder="John"
            />
            <sinch-input
              value={lastName}
              onChange={(value) => {
                setLastName(value)
              }}
              invalidText={lastnameInvalidtext.length > 0 ? lastnameInvalidtext : undefined}
              label="Last Name"
              placeholder="Doe"
            />
            <sinch-select
              value={role}
              onChange={(value) => {
                setRole(value)
              }}
              invalidText={roleInvalidtext.length > 0 ? roleInvalidtext : undefined}
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
              disabled={disabled ? undefined : false}
              onClick={sendData}
              text="Create Account"
            />
            <div className={styles.signupLogin}>
              <sinch-button
                style={{ width: '75%' }}
                type="secondary"
                onClick={() => {}}
                text="Login"
              />
            </div>
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
          <h1 className={styles.fontName}>Welcome to Sinch! </h1>
          <img src={sinchlogo} className={styles.sinchlogo}/>
        </div>
        <div className={styles.signupDescription}>
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
