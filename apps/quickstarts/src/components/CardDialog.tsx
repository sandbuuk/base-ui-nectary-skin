import styles from './Dialog.module.css'
import { usePageControl } from './PageContext'
import pointsimage from './images/pointsimage.png'
import type { FC } from 'react'

type Props = {
  next: (event: React.MouseEvent<HTMLElement>) => void,
  isOpen: boolean,
  setIsOpen: (value: any) => void,
  buttonbgcolor: string,
  headerbgcolor: string,
  imagesource: string|undefined,
  statusbgcolor: string,
  statuscolor: string,
  heading: string,
  headingContent: string,
  bodyContent: string[],
  disabled: boolean,
}

export const CardDialog: FC<Props> = (props): JSX.Element => {
  const { isOpen, setIsOpen, buttonbgcolor, headerbgcolor, imagesource, statusbgcolor, statuscolor, heading, headingContent, bodyContent, disabled } = props
  const { next } = usePageControl()
  let carddialog = (
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
      <div className={styles.customerConverterHeader} style={{ backgroundColor: headerbgcolor }}>
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
            backgroundColor: buttonbgcolor,
          }}
          onClick={() => {
            setIsOpen((isOpen: boolean) => {
              return !isOpen
            })
          }}
        >x
        </button>
        <p style={{ backgroundColor: statusbgcolor, marginRight: '90%', paddingLeft: '5px', marginBottom: '0%', color: statuscolor }}> Soon</p>
        <img src={imagesource} className={styles.customerConverterImage}/>

      </div>
      <div className={styles.quickLeadsConverterBody}>
        <h3 className={styles.quickLeadsConverterBodyHeading}>{heading}</h3>
        <h3 className={styles.quickLeadsConverterBodyHeadingContent}>{headingContent}</h3>
        <div className={styles.quickLeadsConverterBodyContent}>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>{bodyContent[0]}</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>{bodyContent[1]}</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>{bodyContent[2]}</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>{bodyContent[3]}</p>
          </div>
          <div className={styles.quickLeadsConverterBodyContentPoints}>
            <img src={pointsimage} className={styles.pointsImage}/>
            <p className={styles.quickLeadsConverterBodyContentPointsMatter}>{bodyContent[4]}</p>
          </div>
        </div>
      </div>
      <div className={styles.quickLeadsConverterFooter}>
        <div className={styles.quickLeadsConverterFooterCancel}>
          <sinch-button
            type="secondary"
            text="Cancel"
            onClick={() => {
              setIsOpen((isOpen: boolean) => {
                return !isOpen
              })
            }}
            small
          />
        </div>
        <div className={styles.quickLeadsConverterFooterContinue}>
          <sinch-button type="primary" text="Continue" onClick={next} small disabled={disabled}/>
        </div>
      </div>
    </div>
  )

  if (isOpen == false) {
    carddialog = null as any
  }

  return (
    <div>
      {carddialog}
    </div>
  )
}
