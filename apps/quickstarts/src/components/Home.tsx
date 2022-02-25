import { useContext } from 'react'
import { TokenContext } from '../contexts'
import styles from './Home.module.css'
import { usePageControl } from './PageContext'
import card1 from './images/card1.png'
import card3 from './images/card3.png'
import homeimage2 from './images/homeimage2.png'
import offering from './images/offering.png'
import type { FC } from 'react'
import '@sinch-engage/nectary/tabs'
import '@sinch-engage/nectary/tag'

export const Home: FC = () => {
  const { next } = usePageControl()
  const token = useContext(TokenContext)

  if (token !== null) {
    return (
      <div className={styles.HomePage}>
        {/* <div className={styles.HomeLeftPage}>
                <div className={styles.HomeLeftPageTitle}>Quick Starts</div>
                <p className={styles.HomeLeftPageTitleMatter}>Get up and running fast</p>
                <div className={styles.Homesubmenu}>
                  <hr style={{ border: '1px solid #e5e5e5', marginRight: '10px', marginLeft: '5px' }}/>
                  <div className={styles.HomeLeftPageContent}>
                    <p className={styles.HomeLeftPageContentMatter}>Overview</p>
                    <p className={styles.HomeLeftPageContentMatter}>Dashboard</p>
                    <p className={styles.HomeLeftPageContentMatter}>Active Quick Starts</p>
                    <p className={styles.HomeLeftPageContentMatter}>Integrations</p>
                  </div>
                </div>
              </div> */}
        <div className={styles.HomeRightPage}>
          <div className={styles.HomeRightPageHeading}>
            <h2 className={styles.HomeRightPageHeadingMatter}>Quick Starts</h2>
            <p className={styles.HomeRightPageContentMatter}>Get up and running fast</p>
          </div>
          <div className={styles.HomeRightPageMiddle}>
            <div className={styles.HomeLeftPageMiddleHeading}>
              <div className={styles.HomeRightPageMiddleMatter}>
                We value your time. Accelerate solutions to your customers by customizing all set Quick Starts templates.
              </div>
              <p className={styles.HomeRightPageMiddleBody}>Quick Starts are customizable ready-to-go solutions that can be deployed within minutes. </p>
            </div>
            <div className={styles.HomeImage}>
              <img className={styles.HomeRightPageImage} src={homeimage2}/>
            </div>
          </div>
          {/* <div className={styles.HomeRightPageCapabilities}>
                  <div className={styles.HomeRightPageCapabilitiesTitle}>What can Quick Starts do for you?</div>
                  <div className={styles.HomeRightPageCapabilitiesBody}>
                    <div className={styles.HomeIconDivRow}>
                      <div className={styles.HomeIconDiv}>
                        <img className={styles.homeIcon1} src={homeicon1}/>
                        <p className={styles.HomeIconMatter}>Omnichannel customer support</p>
                      </div>
                      <hr style={{ border: '1px solid #e5e5e5' }}/>
                      <div className={styles.HomeIconDiv2}>
                        <img className={styles.homeIcon1} src={homeicon2}/>
                        <p className={styles.HomeIconMatter}>Improve customer satisfaction</p>
                      </div>
                      <hr style={{ border: '1px solid #e5e5e5' }}/>
                      <div className={styles.HomeIconDiv2}>
                        <img className={styles.homeIcon1} src={homeicon3}/>
                        <p className={styles.HomeIconMatter}>Grow sales via messaging</p>
                      </div>
                    </div>
                  </div>
                </div> */}
          <div className={styles.HomeRightPageTemplate}>
            <div className={styles.HomeRightPageCapabilitiesTitle}>Quick Starts Templates</div>
            {/* <div className={styles.Hometabs}>
                    <sinch-tabs
                      value={value}
                      onChange={(e) => {
                        const value = e.nativeEvent.detail

                        setValue(value)
                      }}
                    >
                      <sinch-tabs-option style={{ marginTop: '20px', backgroundColor: '#FFFFFF', marginRight: '15px' }} value="1" text="All Quick Starts"/>
                      <sinch-tabs-option style={{ marginTop: '20px', backgroundColor: '#F7F7F7', marginRight: '15px' }} value="2" text="Active Quick Starts" disabled/>
                      <sinch-tabs-option style={{ marginTop: '20px', backgroundColor: '#F7F7F7', marginRight: '15px' }} value="3" text="Paused Quick Starts" disabled>
                        <sinch-icon-tooltip/>
                      </sinch-tabs-option>
                    </sinch-tabs>
                  </div> */}
            <div className={styles.HomeCardsdiv}>
              <div className={styles.HomeContainer1}>
                <div className={styles.HomeCard1}>
                  <div className={styles.cardimage1}>
                    <img className={styles.card1} src={card1}/>
                  </div>
                  <sinch-tag style={{ marginLeft: '5%' }} text="New" category="grass"/>
                  <p className={styles.HomeCard1Title}> Quick Leads Converter </p>
                  <p className={styles.HomeCard1Body}> Generate potential leads via WhatsApp.</p>
                </div>
                <div className={styles.Homecard1Matter}>
                  <p className={styles.Homecard1MatterContent}>Conect and qualify leads via WhatsApp and lorem ipsum lorem ipsum lorem ipsum.</p>
                  <p className={styles.Homecard1MatterContentBody}>Lorem ipsum lorem ipsum Lorem</p>
                </div>
                <div className={styles.Card1Button}>
                  <sinch-button type="cta" text="Click to see more" onClick={next}/>
                </div>
              </div>
              <div className={styles.HomeContainer1}>
                <div className={styles.HomeCard2}>
                  <div className={styles.cardimage2}>
                    <img className={styles.card2} src={offering}/>
                  </div>
                  <sinch-tag style={{ marginLeft: '5%' }} text="Coming Soon" category="aqua"/>
                  <p className={styles.HomeCard2Title}> Quick Customer Support </p>
                  <p className={styles.HomeCard2Body}> Offer 24/7 Customer Support across various channels.</p>
                </div>
                <div className={styles.Homecard1Matter}>
                  <p className={styles.Homecard1MatterContent}>Conect and qualify leads via WhatsApp and lorem ipsum lorem ipsum lorem ipsum.</p>
                  <p className={styles.Homecard1MatterContentBody}>Lorem ipsum lorem ipsum Lorem</p>
                </div>
                <div className={styles.Card1Button}>
                  <sinch-button type="cta" text="Click to see more" onClick={() => {}}/>
                </div>
              </div>
              <div className={styles.HomeContainer1}>
                <div className={styles.HomeCard3}>
                  <div className={styles.cardimage3}>
                    <img className={styles.card3} src={card3}/>
                  </div>
                  <sinch-tag style={{ marginLeft: '5%' }} text="Coming Soon" category="aqua"/>
                  <p className={styles.HomeCard3Title}>Quick FAQ Chatbot</p>
                  <p className={styles.HomeCard3Body}> Increase customer satisfaction by offering a 24/7 Chatbot.</p>
                </div>
                <div className={styles.Homecard1Matter}>
                  <p className={styles.Homecard1MatterContent}>Conect and qualify leads via WhatsApp and lorem ipsum lorem ipsum lorem ipsum.</p>
                  <p className={styles.Homecard1MatterContentBody}>Lorem ipsum lorem ipsum Lorem</p>
                </div>
                <div className={styles.Card1Button}>
                  <sinch-button type="cta" text="Click to see more" onClick={() => {}}/>
                </div>
              </div>
            </div>
            <div className={styles.HomeCardsdiv}>
              <div className={styles.HomeContainer1}>
                <div className={styles.HomeCard2}>
                  <div className={styles.cardimage2}>
                    <img className={styles.card2} src={offering}/>
                  </div>
                  <sinch-tag style={{ marginLeft: '5%' }} text="Coming Soon" category="aqua"/>
                  <p className={styles.HomeCard2Title}> Quick Customer Support </p>
                  <p className={styles.HomeCard2Body}> Offer 24/7 Customer Support across various channels.</p>
                </div>
                <div className={styles.Homecard1Matter}>
                  <p className={styles.Homecard1MatterContent}>Conect and qualify leads via WhatsApp and lorem ipsum lorem ipsum lorem ipsum.</p>
                  <p className={styles.Homecard1MatterContentBody}>Lorem ipsum lorem ipsum Lorem</p>
                </div>
                <div className={styles.Card1Button}>
                  <sinch-button type="cta" text="Click to see more" onClick={() => {}}/>
                </div>
              </div>
              <div className={styles.HomeContainer1}>
                <div className={styles.HomeCard3}>
                  <div className={styles.cardimage3}>
                    <img className={styles.card3} src={card3}/>
                  </div>
                  <sinch-tag style={{ marginLeft: '5%' }} text="Coming Soon" category="aqua"/>
                  <p className={styles.HomeCard3Title}>Quick FAQ Chatbot</p>
                  <p className={styles.HomeCard3Body}> Increase customer satisfaction by offering a 24/7 Chatbot.</p>
                </div>
                <div className={styles.Homecard1Matter}>
                  <p className={styles.Homecard1MatterContent}>Conect and qualify leads via WhatsApp and lorem ipsum lorem ipsum lorem ipsum.</p>
                  <p className={styles.Homecard1MatterContentBody}>Lorem ipsum lorem ipsum Lorem</p>
                </div>
                <div className={styles.Card1Button}>
                  <sinch-button type="cta" text="Click to see more" onClick={() => {}}/>
                </div>
              </div>
              <div className={styles.HomeContainer1}>
                <div className={styles.HomeCard1}>
                  <div className={styles.cardimage1}>
                    <img className={styles.card1} src={card1}/>
                  </div>
                  <sinch-tag style={{ marginLeft: '5%' }} text="New" category="grass"/>
                  <p className={styles.HomeCard1Title}> Quick Leads Converter </p>
                  <p className={styles.HomeCard1Body}> Generate potential leads via WhatsApp.</p>
                </div>
                <div className={styles.Homecard1Matter}>
                  <p className={styles.Homecard1MatterContent}>Conect and qualify leads via WhatsApp and lorem ipsum lorem ipsum lorem ipsum.</p>
                  <p className={styles.Homecard1MatterContentBody}>Lorem ipsum lorem ipsum Lorem</p>
                </div>
                <div className={styles.Card1Button}>
                  <sinch-button type="cta" text="Click to see more" onClick={next}/>
                </div>
              </div>
            </div>

            <div/>
          </div>
        </div>
      </div>
    )
  }

  return <div>Login First</div>
}
