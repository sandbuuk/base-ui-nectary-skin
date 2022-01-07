// // import { makeStyles } from '@material-ui/core'
// // import { Box, Step, StepLabel, Stepper } from '@mui/material'
// import { NONAME } from 'dns'
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   StepButton,
//   makeStyles,
// } from '@material-ui/core'
// import { useStepperControl } from './StepperContext'
// import type { FC } from 'react'

// // export const PageSteps: FC = () => {   e5e5e5
// //   const useStyles = makeStyles(() => ({
// //     root: {
// //       //.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed
// //       //.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active
// //       //.makeStyles-step-20 .Mui-disabled .MuiStepIcon-root
// //       // '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
// //       //   color: '#FFBE3C',
// //       // },
// //       // '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
// //       //   color: '#FFBE3C',
// //       // },
// //       // '& .Mui-disabled .MuiStepIcon-root': { color: '#D4DADD' },
// //       // '& .MuiStepIcon-text': { display: 'none', visibility: 'hidden' },
// //       // '& .css-qivjh0-MuiStepLabel-label': { 'font-weight': '600', 'font-family': 'Gilroy' },
// //       //"& .css-qivjh0-MuiStepLabel-label": { font-weight: "600"},
// //       '& .MuiStepIcon-active': { color: 'black' },
// //       '& .MuiStepIcon-completed': { color: 'green' },
// //       //'& .Mui-disabled .MuiStepIcon-root'

// //       // '& .MuiStepIcon-active': { color: '#FFBE3C' },
// //       // '& .MuiStepIcon-completed': { color: '#FFBE3C' },
// //       // '& .Mui-disabled .MuiStepIcon-root': { color: 'D4DADD' },
// //       // '& .MuiStepLabel-label': { 'font-weight': '600', 'font-family': 'Gilroy' },
// //     },
// //   }))

// //   const { activeStep } = useStepperControl()

// //   const steps = [
// //     {
// //       label: 'Whatsapp Message Flow',
// //     },
// //     {
// //       label: 'Human Handover',
// //     },
// //     {
// //       label: 'Testing Number',
// //     },
// //   ]

// //   const c = useStyles()

// //   return (
// //     <div className={c.root}>
// //       <Box sx={{ maxWidth: 400 }}>
// //         <Stepper
// //           activeStep={activeStep}
// //           orientation="vertical"
// //         >
// //           {steps.map((step /* index*/) => (
// //             <Step key={step.label}>
// //               <StepLabel>
// //                 {step.label}
// //               </StepLabel>
// //             </Step>
// //           ))}
// //         </Stepper>
// //       </Box>
// //     </div>
// //   )
// // }

// export const PageSteps: FC = () => {
//   const useStyles = makeStyles(() => ({
//     root: {
//       '& .MuiStepIcon-active': { color: '#FFBE3C' },
//       '& .MuiStepIcon-completed': { color: '#FFBE3C' },
//       '& .Mui-disabled .MuiStepIcon-root': { color: '#D4DADD' },
//       '& .MuiPaper-root': { 'background-color': '#e5e5e5', 'justify-content': 'center' },
//       '& .MuiStepLabel-label': { 'font-weight': '600', 'font-family': 'Gilroy' },
//       '& .MuiStepIcon-text': { display: 'none', visibility: 'hidden' },
//     },
//   }))

//   const c = useStyles()

//   return (
//     <div className={c.root}>
//       <Stepper orientation="vertical" activeStep={1}>
//         <Step>
//           <StepButton>Whatsapp Message Flow</StepButton>
//         </Step>
//         <Step>
//           <StepLabel>Human Handover</StepLabel>
//         </Step>
//         <Step>
//           <StepLabel>CTesting Number</StepLabel>
//         </Step>
//       </Stepper>
//     </div>
//   )
// }

import { makeStyles } from '@material-ui/core'
import { Box, Step, StepLabel, Stepper } from '@mui/material'
import { useStepperControl } from './StepperContext'
import type { FC } from 'react'

export const PageSteps: FC = () => {
  const useStyles = makeStyles(() => ({
    root: {
      //.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed
      //.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active
      //.makeStyles-step-20 .Mui-disabled .MuiStepIcon-root
      '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
        color: '#FFBE3C',
      },
      '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
        color: '#FFBE3C',
      },
      '& .Mui-disabled .MuiStepIcon-root': { color: '#D4DADD' },
      '& .MuiStepIcon-text': { display: 'none', visibility: 'hidden' },
      '& .css-qivjh0-MuiStepLabel-label': { 'font-weight': '600', 'font-family': 'Gilroy' },
      //"& .css-qivjh0-MuiStepLabel-label": { font-weight: "600"},
    },
  }))

  const { activeStep } = useStepperControl()

  const steps = [
    {
      label: 'Whatsapp Message Flow',
    },
    {
      label: 'Human Handover',
    },
    {
      label: 'Testing Number',
    },
  ]

  const c = useStyles()

  return (
    <div className={c.root}>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((step /* index*/) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  )
}
