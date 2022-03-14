import { useContext, useState } from 'react'
import { TokenContext } from '../contexts'
import styles from './Page.module.css'
import { PageBottom } from './PageBottom'
import { usePageControl } from './PageContext'
import { PageHeader } from './PageHeader'
import { usePageThreeControl } from './PageStepThreeContext'
import { PhonePreview } from './PhonePreview/PhonePreview'
import chatlayerlogo from './images/chatlayerlogo.jpg'
import type { FC } from 'react'

type Props = {
  name: number,
  botquestion: string[],
  setBotquestion: (value: any) => void,
}

type PageBodyProps ={

  greetingmsg: string,
  buttonCounter: () => void,
  flowCounter: number,
  setGreetingmsg: (arg0: string) => void,
  botquestion: string[],
  setBotquestion: (value: string) => void,
}

const WhatsappDetails: FC<Props> = (props): JSX.Element => {
  const { name, botquestion, setBotquestion } = props
  const k = name

  return (
    <div className={styles.botmessagesInput}>
      <sinch-input
        key={k}
        class={`${k}`}
        value={botquestion[k - 1]}
        style={{ width: '100%' }}
        onChange={(e) => {
          const value = e.nativeEvent.detail

          setBotquestion((datas: string[]) => ({
            ...datas,
            [k - 1]: value,
          }))
        }}
        onFocus={() => {
        }}
        label={`Question ${k}`}
        placeholder="What is your name?"
      />
    </div>
  )
}

const PageBody = (props: PageBodyProps) => {
  const { greetingmsg, buttonCounter, flowCounter, setGreetingmsg, botquestion, setBotquestion } = props
  const chats = []

  chats.push({ sender: 'left', msg: greetingmsg })
  Object.keys(botquestion).map((i: any) => {
    chats.push({ sender: 'left', msg: botquestion[i] })
    chats.push({ sender: 'right', msg: 'user message' })
  })

  return (
    <div className={styles.botwhatsappBody}>
      <div className={styles.botmessagesParent}>
        <div className={styles.botstartingSpace}/>
        <div className={styles.bothumanMessages}>
          <div className={styles.botquestions}>
            <div className={styles.botGreet}>
                <sinch-textarea // eslint-disable-line
                  value={greetingmsg}
                  class="0"
                  label="Greeting"
                  placeholder="Hi, welcome to Sinch S.P Black Friday. Check out our 50% OFF in all products. "
                  optionalText={undefined}
                  invalidText={undefined}
                  style={{ width: '100%' }}
                  additionalText={undefined}
                  disabled={undefined}
                  onChange={(e) => {
                    const value = e.nativeEvent.detail

                    setGreetingmsg(value)
                  }}
                  onFocus={() => {
                  }}
                  onBlur={() => {}}
                />
              <hr style={{ border: '1px solid #e5e5e5' }}/>
              <p className={styles.whatsappDescription}>
                You can add up to 5 questions before transfering your customer to your agent.
              </p>
            </div>
            { [...Array(flowCounter)].map((_, i) => <WhatsappDetails botquestion={botquestion} setBotquestion={setBotquestion} name={i + 1} key={i}/>)}
            <div className={styles.questionBtn}>
              <sinch-button
                style={{ width: '100%' }}
                type="cta"
                onClick={buttonCounter}
                text="Add new question"
              />
            </div>
          </div>
        </div>

        <PhonePreview chats={chats as ({msg: string, sender: 'left' | 'right', blur?: boolean})[]}/>
        {/* <PhonePreview botquestion={botquestion} greetingmsg={greetingmsg} flowCounter={flowCounter} humanhandover=""/> */}
      </div>
    </div>
  )
}

export const PageStepThree: FC = () => {
  const { botquestion, setBotquestion, greetingmsg, setGreetingmsg } = usePageThreeControl()
  const token = useContext(TokenContext)
  const { next } = usePageControl()
  const { prev } = usePageControl()
  const [flowCounter, setCounter] = useState(Object.keys(botquestion).length == 0 ? 1 : Object.keys(botquestion).length)

  const buttonCounter = () => {
    if (flowCounter < 5) {
      setCounter((prevCounter) => prevCounter + 1)
    }
  }

  const nextPage = () => {
    next()
  }

  const prevPage = () => {
    prev()
  }

  if (token === null) {
    return <div>Login First</div>
  }

  return (
    <div className={styles.botpageWhatsapp}>
      <div className={styles.botmainBodyWhatsapp}>

        {/* Page Header */}

        <PageHeader title="WhatsApp Message Flow" description="Configure the messages that are displayed on the conversation" activeStep={0} imageSrc={chatlayerlogo}/>

        {/* Page Body */}

        <PageBody setBotquestion={setBotquestion} botquestion={botquestion} greetingmsg={greetingmsg} setGreetingmsg={setGreetingmsg} buttonCounter={buttonCounter} flowCounter={flowCounter}/>

        {/* Page Bottom */}

        <PageBottom backText="Back" backFunction={prevPage} nextText="Next" nextFunction={nextPage}/>
      </div>
    </div>
  )
}
