import { FC, ReactElement } from "react";
import Step from "./Step";
import { stepsType } from "../../../hooks/useMultiStepForm";

type StepperProps = {
  steps: stepsType;
  currentStepIndex: number;
  goTo: (index: number) => void;
  isSmallScreen?: any;
};
const Stepper: FC<StepperProps> = ({
  steps,
  currentStepIndex,
  goTo,
  isSmallScreen,
}) => {
  return isSmallScreen ? (
    <div className="bg-bgMobile bg-no-repeat bg-cover absolute top-0 w-screen   h-52 ">
      <div className="flex items-center justify-center gap-4 pt-8">
        {steps.map((step: any, key: number) => (
          <Step
            onClick={goTo}
            key={key}
            index={key}
            title={step.title}
            isSelected={currentStepIndex == key}
            isSmallScreen={true}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="p-12 bg-bgDesktop  bg-no-repeat w-full md:w-[300px] h-[625px] flex flex-col  bg-cover gap-8 rounded-xl">
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
