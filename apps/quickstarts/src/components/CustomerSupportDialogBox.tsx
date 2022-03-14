import styles from './Home.module.css'
import customersupportdialog from './images/customersupportdialog.png'
import pointsimage from './images/pointsimage.png'
import type { FC } from 'react'

type CustomerProps = {
  next: (event: React.MouseEvent<HTMLElement>) => void,
  customerisOpen: boolean,
  customersetIsOpen: (value: any) => void,
}

export const CustomerDialog: FC<CustomerProps> = (props): JSX.Element => {
  const { customerisOpen, customersetIsOpen } = props
  let customerdialog = (
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
      <div className={styles.customerConverterHeader}>
        <button
          style={{
            marginLeft: '95%',
            cursor: 'pointer',
            borderRadius: '50%',
            color: 'black',
            border: 'none',
            width: '30px',
            height: '30px',
            fontWeight: 'bold',
            alignSelf: 'center',
            backgroundColor: ' #F1F3F4',
          }}
          onClick={() => {
            customersetIsOpen((customerisOpen: boolean) => {
              return !customerisOpen
            })
          }}
        >x
        </button>
        <img src={customersupportdialog} className={styles.customerConverterImage}/>

      </div>
      <div className={styles.quickLeadsConverterBody}>
        <h3 className={styles.quickLeadsConverterBodyHeading}>Quick Customer Support</h3>
        <h3 className={styles.quickLeadsConverterBodyHeadingContent}>Save customers valuable time and effort by offering support across various channels</h3>
        <div className={styles.quickLeadsConverterBodyContent}>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Give customers quick answers to their questions.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Automate customer support through various channels.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Speed up customer resolutions.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Customize your bot based on a specific audience.</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>Increase customer satisfaction by offering a personalized support.</p>
          </div>
        </div>
      </div>
      <div className={styles.quickLeadsConverterFooter}>
        <div className={styles.quickLeadsConverterFooterCancel}>
          <sinch-button
            type="secondary"
            text="Cancel"
            onClick={() => {
              customersetIsOpen((customerisOpen: boolean) => {
                return !customerisOpen
              })
            }}
            small
          />
        </div>
        <div className={styles.quickLeadsConverterFooterContinue}>
          <sinch-button type="primary" text="Continue" onClick={() => {}} small disabled/>
        </div>
      </div>
    </div>
  )

  if (customerisOpen == false) {
    customerdialog = null as any
  }

  return (
    <div>
      {customerdialog}
    </div>
  )
}
