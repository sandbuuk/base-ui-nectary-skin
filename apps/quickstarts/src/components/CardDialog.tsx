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
      <div className={styles.header} style={{ backgroundColor: headerbgcolor }}>
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
        <img src={imagesource} className={styles.image}/>

      </div>
      <div className={styles.body}>
        <h3 className={styles.bodyHeading}>{heading}</h3>
        <h3 className={styles.bodyHeadingContent}>{headingContent}</h3>
        <div className={styles.bodyContent}>
          {bodyContent.map((content, i: number) => {
            return (
              <div key={`${i}`} className={styles.bodyContentPoints}>
                <img src={pointsimage} className={styles.pointsImage}/>
                <p className={styles.bodyContentPointsMatter}>{content}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerCancel}>
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
        <div className={styles.footerContinue}>
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
