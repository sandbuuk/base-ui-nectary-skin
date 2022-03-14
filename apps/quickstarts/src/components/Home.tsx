import { useContext, useState } from 'react'
import { TokenContext } from '../contexts'
import { CardDialog } from './CardDialog'
import styles from './Home.module.css'
import { QuickstartCards } from './QuickstartCards'
import abandonedcart from './images/abandonedcart.png'
import card1 from './images/card1.png'
import card3 from './images/card3.png'
import offering from './images/customersupport.png'
import customersupportdialog from './images/customersupportdialog.png'
import feedback from './images/feedback.png'
import homeimage2 from './images/homeimage2.png'
import quickleadsconverter from './images/quickleadsconverter.png'
import status from './images/status.png'
import type { FC } from 'react'
import '@nectary/components/tabs'
import '@nectary/components/tag'
import '@nectary/components'

export const Home: FC = () => {
  const [quickisOpen, quicksetIsOpen] = useState(false)
  const [customerisOpen, customersetIsOpen] = useState(false)
  const quickLeadshandleClickOpen = () => {
    quicksetIsOpen(true)
  }
  const quickLeadsConverterPage = () => {
    quickLeadshandleClickOpen()
  }
  const customerhandleClickOpen = () => {
    customersetIsOpen(true)
  }
  const customerConverterPage = () => {
    customerhandleClickOpen()
  }
  const token = useContext(TokenContext)

  if (token === null) {
    return <div>Login First</div>
  }

  return (
    <div className={styles.HomePage}>
      <div className={styles.HomeRightPage}>
        <div className={styles.HomeRightPageHeading}>
          <h2 className={styles.HomeRightPageHeadingMatter}>Quick Starts</h2>
          {/* <p className={styles.HomeRightPageContentMatter}>Redirect customers to a WhatsApp Chatbot with Human Handover through Click to WhatsApp Ad button</p> */}
        </div>
        <div className={styles.HomeRightPageMiddle}>
          <div className={styles.HomeLeftPageMiddleHeading}>
            <div className={styles.HomeRightPageMiddleMatter}>
              Pre-built solutions for your business
            </div>
            <p className={styles.HomeRightPageMiddleBody}>Offer conversational experiences with ready-to-use solutions </p>
          </div>
          <div className={styles.HomeImage}>
            <img className={styles.HomeRightPageImage} src={homeimage2}/>
          </div>
        </div>
        <div className={styles.HomeRightPageTemplate}>
          <div className={styles.HomeRightPageCapabilitiesTitle}>Quick Starts</div>
          <div className={styles.HomeCardsdiv}>
            <QuickstartCards clickFunction={quickLeadsConverterPage} bgColor="#007171" mainTag={{ text: 'New', category: 3 }} headerTitle="Quick Leads Converter" headerBody="Automate Leads Qualification by gathering users information through a personalized  conversational experience." mainBody="Qualify leads by collecting name, e-mail, and other basic info from visitors." imageSource={card1} descriptionTags={[{ text: 'Easy', category: 3 }, { text: '2 minutes', category: 8 }, { text: 'Marketing', category: 2 }]} headerColor="white"/>

            <QuickstartCards clickFunction={customerConverterPage} bgColor="#FFCC66" mainTag={{ text: 'Coming Soon', category: 2 }} headerTitle="Quick Customer Support" headerBody="Save customers valuable time and effort by offering support across various channels." mainBody="Deliver a consistent Customer Support and solve issues at hand by making support interactive." imageSource={offering} descriptionTags={[{ text: 'Easy', category: 3 }, { text: '2 minutes', category: 8 }, { text: 'Customer Support', category: 2 }]} headerColor="black"/>

            <QuickstartCards clickFunction={() => {}} bgColor="#0A273D" mainTag={{ text: 'Coming Soon', category: 2 }} headerTitle="Quick FAQ Chatbot" headerBody="Engage customers by giving quick answers to their questions." mainBody="Build a chatbot to answer frequently asked questions." imageSource={card3} descriptionTags={[{ text: 'Easy', category: 3 }, { text: '3 minutes', category: 8 }, { text: 'Customer Support', category: 2 }]} headerColor="white"/>
          </div>

          <div className={styles.HomeCardsdiv}>
            <QuickstartCards clickFunction={() => {}} bgColor="#FFCC66" mainTag={{ text: 'Coming Soon', category: 2 }} headerTitle="Quick Abandoned Cart Recovery" headerBody="Boost Shopping-Cart Conversions by re-engaging users." mainBody="Create a Chatbot that sends personalized reminders to users." imageSource={abandonedcart} descriptionTags={[{ text: 'Easy', category: 3 }, { text: '2 minutes', category: 8 }, { text: 'E-commerce', category: 2 }]} headerColor="black"/>

            <QuickstartCards clickFunction={() => {}} bgColor="#0A273D" mainTag={{ text: 'Coming Soon', category: 2 }} headerTitle="Quick Product Feedback" headerBody="Collect feedback user feedback about products using a conversational experience." mainBody="Create a Chatbot that compiles product feedback through personalized user conversations." imageSource={feedback} descriptionTags={[{ text: 'Easy', category: 3 }, { text: '3 minutes', category: 8 }, { text: 'Surveys', category: 2 }]} headerColor="white"/>

            <QuickstartCards clickFunction={() => {}} bgColor="#007171" mainTag={{ text: 'New', category: 3 }} headerTitle="Quick Order Status & Package Tracking Update" headerBody="Automate order status and deliveries by offering a customized converstional experience." mainBody="Build a Chatbot that allows users to check the status of their purchases and track their deliveries at any time." imageSource={status} descriptionTags={[{ text: 'Easy', category: 3 }, { text: '3 minutes', category: 8 }, { text: 'Marketing', category: 2 }]} headerColor="white"/>
          </div>

          <div/>
        </div>
      </div>
      <CardDialog
        isOpen={quickisOpen}
        setIsOpen={quicksetIsOpen}
        next={() => {}}
        buttonbgcolor="#007171"
        headerbgcolor="#007171"
        imagesource={quickleadsconverter}
        statusbgcolor="#007171"
        statuscolor="#007171"
        heading="Quick Leads Converter"
        headingContent="Generate qualified leads 24/7 via WhatsApp"
        bodyContent={['Automate Leads Qualifaction by gathering users information through a personalized conversational experience.', 'Generate business opportunities.', 'Make decisions based on Marketing Campaigns data.', 'Have access to real time data.', 'Generate reports at any time.']}
        disabled={false}
      />
      <CardDialog
        isOpen={customerisOpen}
        setIsOpen={customersetIsOpen}
        next={function(): void {
          throw new Error('Function not implemented.')
        }}
        buttonbgcolor=" #F1F3F4"
        headerbgcolor="#F1F3F4"
        imagesource={customersupportdialog}
        statusbgcolor="#FFBE3C"
        statuscolor="black"
        heading="Quick Customer Support"
        headingContent="Save customers valuable time and effort by offering support across various channels"
        bodyContent={['Give customers quick answers to their questions.', 'Automate customer support through various channels.', 'Speed up customer resolutions.', 'Customize your bot based on a specific audience.', 'Increase customer satisfaction by offering a personalized support.']}
        disabled
      />
    </div>
  )
}
