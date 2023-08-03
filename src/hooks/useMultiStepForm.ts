import { ReactElement, useState } from "react";

type step = {
  title?: string;
  element: ReactElement;
};

export type stepsType = step[];

const useMultiStepForm = (steps: stepsType) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  function next(): void {
    if (currentStepIndex >= steps.length - 1) return;
    setCurrentStepIndex((prevStep) => prevStep + 1);
    console.log("next");
  }

  function back(): void {
    if (currentStepIndex === 0) return;
    setCurrentStepIndex((prevStep) => prevStep - 1);
  }

  function goTo(index: number): void {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    goTo,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
