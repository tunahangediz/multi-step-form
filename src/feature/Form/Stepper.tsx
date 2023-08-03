import { FC, ReactElement } from "react";
import Step from "./Step";
import { stepsType } from "../../hooks/useMultiStepForm";

type StepperProps = {
  steps: stepsType;
  currentStepIndex: number;
  goTo: (index: number) => void;
};
const Stepper: FC<StepperProps> = ({ steps, currentStepIndex, goTo }) => {
  return (
    <div className="p-12 bg-bgDesktop  bg-no-repeat w-full h-[625px] flex flex-col max-w-[310px] bg-cover gap-8 rounded-xl">
      {steps.map((step: any, key: number) => (
        <Step
          onClick={goTo}
          key={key}
          index={key}
          title={step.title}
          isSelected={currentStepIndex == key}
        />
      ))}
    </div>
  );
};

export default Stepper;
