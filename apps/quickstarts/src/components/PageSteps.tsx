// @ts-ignore
import Stepper from 'react-stepper-horizontal'
import type { FC } from 'react'

type PageStepProps = {
  activeStep: number,
}

export const PageSteps: FC<PageStepProps> = (props) => {
  const activeStep = props.activeStep

  return (
    <div style={{ fontFamily: 'Gilroy', fontSize: '10px' }}>
      <Stepper style={{ fontFamily: 'Gilroy', fontSize: '10px' }} activeColor="#3B5264" completeColor="#3B5264" steps={[{ title: 'Current' }, { title: 'Upcoming' }]} activeStep={activeStep}/>
    </div>
  )
}
