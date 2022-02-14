//import axios from 'axios'
import { useEffect, useState } from 'react'
import { TokenContext } from '../contexts'
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
  const [phoneNumber, setphoneNumber] = useState('')
  const [emailInvalidtext, setEmailInvalidtext] = useState('')
  const [firstnameInvalidtext, setfirstnameInvalidtext] = useState('')
  const [lastnameInvalidtext, setlastnameInvalidtext] = useState('')
  const [roleInvalidtext, setroleInvalidtext] = useState('')
  const [phoneInvalidtext, setphoneInvalidtext] = useState('')
  const [iserror, setIserror] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const { accountId, setAccountId, setToken } = usePageOneControl()

  async function sendData() {
    function validateInputs() {
      let flag = true
      const validateEmail = (email: String) => {
        return String(email)
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      }

      const validatePhone = (phone: String) => {
        return String(phone)
          .match(/^[0-9\b]+$/)
      }

      const validateNames = (name: string) => {
        return /\d/.test(name)
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

      if (phoneNumber.length > 0) {
        if (validatePhone(phoneNumber) == null) {
          setphoneInvalidtext('Phone Number should contain only numbers')

          if (flag) {
            flag = false
          }
        }
      }

      if (email.length > 0) {
        if (validateEmail(email) != null) {
          if (flag) {
            console.log('Valid Mail')
          }
        } else {
          setEmailInvalidtext('Email entered is not valid')

          if (flag) {
            flag = false
          }
        }
      }

      return flag
    }

    if (validateInputs()) {
      const res = await fetch('https://quickstart.default.labengage.sinch.com/account', {
        method: 'POST',
        body: JSON.stringify({ email, firstName, phoneNumber, lastName, role }),
      })
      const k = await res.json()

      if (typeof k.data == 'undefined') {
        setIserror(true)
      } else if (k.data.firstName === firstName) {
        console.log('Creation of user sucessful')
        console.log(typeof (k.data.ID))
        console.log(k.data.ID)
        setToken(k.data.MPToken)
        setAccountId(k.data.ID)
        console.log(accountId)
        next()
      }
    }
  }

  function getUsers() {
    try {
      const body = new FormData()

      setEmailInvalidtext('')
      setfirstnameInvalidtext('')
      setlastnameInvalidtext('')
      setroleInvalidtext('')
      setphoneInvalidtext('')

      body.append('email', email)
      body.append('firstName', firstName)
      body.append('lastName', lastName)
      body.append('role', role)
      body.append('phoneNumber', phoneNumber)

      if (email.length > 0 && firstName.length > 0 && lastName.length > 0 && role.length > 0 && phoneNumber.length > 0) {
        // if (!(email.length > 0)) {
        //   setEmailInvalidtext('Email should not be empty')

        //   if (flag) {
        //     flag = false
        //   }
        // }

        // if (!(firstName.length > 0)) {
        //   setfirstnameInvalidtext('First name should not be empty')

        //   if (flag) {
        //     flag = false
        //   }
        // }

        // if (!(lastName.length > 0)) {
        //   setlastnameInvalidtext('Last name should not be empty')

        //   if (flag) {
        //     flag = false
        //   }
        // }

        // if (!(role.length > 0)) {
        //   setroleInvalidtext('Role should not be empty')

        //   if (flag) {
        //     flag = false
        //   }
        // }

        // if (!(phoneNumber.length > 0)) {
        //   setphoneInvalidtext('Phone Number should not be empty')

        //   if (flag) {
        //     flag = false
        //   }
        // }
        setDisabled(false)
      } else {
        setDisabled(true)
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
  useEffect(() => {
    getUsers()
  }, [phoneNumber])

  // async function getPostsData() {
  //   const response = await axios.get('/account')

  //   console.log(response)
  // }

  console.log(disabled)

  return (
    <TokenContext.Consumer>{
      (data) => {
        if (data !== null) {
          // data.token is what one would send for example in the `Authentication:` header when doing backend calls.
          console.log('Here is the a small piece of the latest token inside the MFE!', data.token.substr(-10))
          // @ts-ignore
          console.log('Here is the username from the parsed token:', data.parsedToken.preferred_username)

          return (
            <div className={styles.page}>
              <div className={styles.parent}>
                <div className={styles.signUp}>
                  <h2 className={styles.fontNameTitle}> Sign up to Sinch </h2>
                  <form className={styles.form}>
                    <sinch-input
                      className={styles.sinchInput}
                      value={email}
                      onChange={(e) => {
                        const value = e.nativeEvent.detail

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
                      onChange={(e) => {
                        const value = e.nativeEvent.detail

                        setFirstName(value)
                      }}
                      label="First Name"
                      invalidText={firstnameInvalidtext.length > 0 ? firstnameInvalidtext : undefined}
                      placeholder="John"
                    />
                    <sinch-input
                      value={lastName}
                      onChange={(e) => {
                        const value = e.nativeEvent.detail

                        setLastName(value)
                      }}
                      invalidText={lastnameInvalidtext.length > 0 ? lastnameInvalidtext : undefined}
                      label="Last Name"
                      placeholder="Doe"
                    />
                    <sinch-select
                      placeholder="Select"
                      value={role}
                      onChange={(e) => {
                        const value = e.nativeEvent.detail

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
                    <sinch-input
                      value={phoneNumber}
                      optionalText="ex: +55(11)91234-5678"
                      onChange={(e) => {
                        const value = e.nativeEvent.detail

                        setphoneNumber(value)
                      }}
                      invalidText={phoneInvalidtext.length > 0 ? phoneInvalidtext : undefined}
                      label="Phone Number"
                      placeholder="0123456789"
                    />
                    <sinch-button
                      className={styles.createAcc}
                      type="cta"
                      disabled={disabled ? disabled : undefined} //{disabled ? undefined : false}
                      onClick={sendData}
                      text="Create Account"
                    />
                    <sinch-button
                      type="secondary"
                      style={{ marginTop: '3%' }}
                      onClick={() => {}}
                      text="Login"
                    />
                    <div className={styles.signupFG}>
                      <sinch-button
                        style={{ width: '100%' }}
                        type="secondary"
                        onClick={() => {}}
                        text="Signup with Google"
                      >
                        <img className={styles.googleImg} src={google}/>
                      </sinch-button>
                      <div className={styles.facebookSignup}>
                        <sinch-button
                          style={{ width: '100%' }}
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
                  <h3 className={styles.signupDescriptionText}>
                    We help you deliver outstanding conversational customer experiences
                  </h3>
                </div>
                <div className={styles.image}>
                  <img src={signupimage} className={styles.signupImage}/>
                </div>
                <div className={iserror ? styles.errorAlert : styles.hiddenerrorAlert}>
                  <sinch-alert
                    type="error"
                    text="Email already exists"
                  />
                </div>
              </div>
            </div>
          )
        }

        console.log('Currently we have no token. Are you logged in?')

        return <div>Login First</div>
      }
    }
    </TokenContext.Consumer>

  )
}
