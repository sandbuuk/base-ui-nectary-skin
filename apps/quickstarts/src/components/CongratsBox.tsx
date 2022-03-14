import Dialog from '@mui/material/Dialog'
import styles from './Page.module.css'
import congratsimage from './images/congratsimage.jpg'
import type { FC } from 'react'

export interface SimpleDialogProps {
  open: boolean,
  onClose: () => void,
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={styles.Congrats}>
        <div className={styles.congratsText}>
          <h2 className={styles.congratsTitle}>Congratulations! You've finished your Quick Start!</h2>
        </div>
        <img src={congratsimage} className={styles.congratsimage}/>
        <sinch-button style={{ width: '35%' }} type="cta" text="Try it out!" onClick={() => {}}/>
      </div>
    </Dialog>
  )
}

type CongratsProps = {
  open: boolean,
  handleClickOpen: () => void,
  handleClose: () => void,
}

export const Congratsbox: FC<CongratsProps> = (props): JSX.Element => {
  const open = props.open
  const handleClose = props.handleClose

  return (
    <div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}
