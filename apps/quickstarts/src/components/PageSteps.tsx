import {
  Stepper,
  Step,
  StepLabel,
  StepButton,
  makeStyles,
} from '@material-ui/core'
import { useStepperControl } from './StepperContext'
import type { FC } from 'react'

export const PageSteps: FC = () => {
  const { activeStep } = useStepperControl()
  const useStyles = makeStyles(() => ({
    root: {
      '& .MuiStepIcon-active': { color: 'black' },
      '& .MuiStepIcon-completed': { color: 'green' },
      '& .Mui-disabled .MuiStepIcon-root': { color: 'cyan' },
    },
  }))

  const c = useStyles()

  return (
    <div className={c.root} style={{ margin: 2 }}>
      <Stepper orientation="vertical" activeStep={activeStep}>
        <Step>
          <StepButton>Register your name</StepButton>
        </Step>
        <Step>
          <StepLabel>Register your email</StepLabel>
        </Step>
        <Step>
          <StepLabel>Click on Finish</StepLabel>
        </Step>
      </Stepper>
    </div>
  )
}

