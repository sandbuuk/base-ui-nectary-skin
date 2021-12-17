import { FC, useContext, useState } from "react";
import styles from "./Page.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import { Component } from "react";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useStepperControl } from './StepperContext';
import Context from "@mui/base/TabsUnstyled/TabsContext";
import React from "react";

export const PageSteps: FC = () => {
  const useStyles = makeStyles(() => ({
    root: {
      //.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed
      //.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active
      //.makeStyles-step-20 .Mui-disabled .MuiStepIcon-root
      "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
        color: "#FFBE3C",
      },
      "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
        color: "#FFBE3C",
      },
      "& .Mui-disabled .MuiStepIcon-root": { color: "#D4DADD" },
      "& .MuiStepIcon-text": { display: "none", visibility: "hidden" },
      "& .css-qivjh0-MuiStepLabel-label": { "font-weight": "600", "font-family": "Gilroy"},
       //"& .css-qivjh0-MuiStepLabel-label": { font-weight: "600"},
    },
  }));
  const c = useStyles();

  const { activeStep, handleNext, handleBack } = useStepperControl();

  const steps = [
    {
      label: "Whatsapp Message Flow",
    },
    {
      label: "Human Handover",
    },
    {
      label: "Testing Number",
    },
  ];
  
  return (
    <div>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper
            className={c.root}
            activeStep={ activeStep}
            orientation="vertical"
          >
            {steps.map((step, index) => (
              <Step className={styles.stepperLabel} key={step.label}>
                <StepLabel>
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
    </div>
  );
};
