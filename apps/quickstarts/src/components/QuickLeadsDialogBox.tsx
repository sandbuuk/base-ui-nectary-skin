import styles from './Home.module.css'
import { usePageControl } from './PageContext'
import pointsimage from './images/pointsimage.png'
import quickleadsconverter from './images/quickleadsconverter.png'
import type { FC } from 'react'

type Props = {
  next: (event: React.MouseEvent<HTMLElement>) => void,
  quickisOpen: boolean,
  quicksetIsOpen: (value: any) => void,
}

export const Dialog: FC<Props> = (props): JSX.Element => {
  const { next } = usePageControl()
  const { quickisOpen, quicksetIsOpen } = props
  let dialog = (
    <div style={{
      width: '600px',
      maxWidth: '100%',
      margin: '0 auto',
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: '999',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)',
      borderRadius: '15px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <div className={styles.quickLeadsConverterHeader}>
        <button
          style={{
            marginLeft: '95%',
            cursor: 'pointer',
            borderRadius: '50%',
            color: 'white',
            border: 'none',
            width: '30px',
            height: '30px',
            fontWeight: 'bold',
            alignSelf: 'center',
            backgroundColor: '#007171',
          }}
          onClick={() => {
            quicksetIsOpen((quickisOpen: boolean) => {
              return !quickisOpen
            })
          }}
        >x
        </button>
        <img src={quickleadsconverter} className={styles.quickLeadsConverterImage}/>

      </div>
      <div className={styles.quickLeadsConverterBody}>
        <h3 className={styles.quickLeadsConverterBodyHeading}>Quick Leads Converter</h3>
        <h3 className={styles.quickLeadsConverterBodyHeadingContent}>Generate qualified leads 24/7 via WhatsApp</h3>
        <div className={styles.quickLeadsConverterBodyContent}>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Automate Leads Qualifaction by gathering users information through a personalized conversational experience.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Generate business opportunities.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Make decisions based on Marketing Campaigns data.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Have access to real time data.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Generate reports at any time.</p>
          </div>
        </div>
      </div>
      <div className={styles.quickLeadsConverterFooter}>
        <div className={styles.quickLeadsConverterFooterCancel}>
          <sinch-button
            type="secondary"
            text="Cancel"
            onClick={() => {
              quicksetIsOpen((quickisOpen: boolean) => {
                return !quickisOpen
              })
            }}
            small
          />
        </div>
        <div className={styles.quickLeadsConverterFooterContinue}>
          <sinch-button type="primary" text="Continue" onClick={next} small/>
        </div>
      </div>
    </div>
  )

  if (quickisOpen == false) {
    dialog = null as any
  }

  return (
    <div>
      {dialog}
    </div>
  )
}
