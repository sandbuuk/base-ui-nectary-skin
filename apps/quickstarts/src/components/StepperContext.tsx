import { createContext, useContext, useState } from "react";
import type { FC } from "react";

type TStepperContext = {
  activeStep: number;
  handleNext: (num:number) => void;
  handleBack: (num:number) => void
};

const k= (num:number)=>{console.log("Heyyy ayooooo")};

const Context = createContext<TStepperContext>({
  activeStep: 0,
  handleNext: k,
  handleBack: k
});

export const useStepperControl = () => {
  return useContext(Context);
};


export const StepperContext: FC<{}> = ({ children }) => {
  
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (num: number) => {
      console.log(activeStep);
      if (Number(num)>=0 && Number(num)<3){
          setActiveStep(num);
      }
      else
      setActiveStep((prevActiveStep) => prevActiveStep > 2 ? prevActiveStep : prevActiveStep+1);
    };
  
    const handleBack = () => {
      console.log(activeStep);
      setActiveStep((prevActiveStep) => prevActiveStep <= 0 ? prevActiveStep : prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

  const state: TStepperContext = {
    activeStep,
    handleNext,
    handleBack
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
