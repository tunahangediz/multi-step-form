import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import AddOns from "./feature/Form/AddOns";
import PersonalInfo from "./feature/Form/PersonalInfo";
import SelectPlan from "./feature/Form/SelectYourPlan/SelectPlan";
import Stepper from "./feature/Form/Stepper";
import Summary from "./feature/Form/Summary";
import useMultiStepForm, { stepsType } from "./hooks/useMultiStepForm";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  addOns1: boolean;
  addOns2: boolean;
  addOns3: boolean;
  plan: { title: string; price: number };
}

function App() {
  const { register, handleSubmit, control, setValue, getValues } =
    useForm<FormData>({
      defaultValues: {
        plan: { title: "Arcade", price: 9 },
      },
    });
  const [yearly, setYearly] = useState(false);
  const stepsData: stepsType = [
    { title: "Your Info", element: <PersonalInfo register={register} /> },
    {
      title: "select Plan",
      element: (
        <SelectPlan
          register={register}
          yearly={yearly}
          setYearly={setYearly}
          getValues={getValues}
        />
      ),
    },
    { title: "Add-Ons", element: <AddOns control={control} yearly={yearly} /> },
    {
      title: "summary",
      element: <Summary getValues={getValues} yearly={yearly} />,
    },
  ];

  const {
    currentStepIndex,
    step,
    steps,
    next,
    back,
    goTo,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(stepsData);

  const onSubmit = (data: any) => {
    console.log("fssdfsd");
    console.log(data);
  };
  // console.log(getValues());
  return (
    <>
      {/* <YoutubeForm /> */}
      <div className="flex w-full items-center justify-center">
        <div className="border-2 rounded-md relative p-4 max-w-4xl w-full flex">
          <Stepper
            goTo={goTo}
            steps={steps}
            currentStepIndex={currentStepIndex}
          />
          <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
            {currentStepIndex + 1 + "/" + steps.length}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between py-12 w-full max-w-lg pl-12"
          >
            {step.element}

            <DevTool control={control} />

            <div className="flex justify-end items-end w-full mt-auto">
              {!isFirstStep && (
                <button
                  className=" mr-auto text-coolGray"
                  type="button"
                  onClick={back}
                >
                  Go Back
                </button>
              )}
              {!isLastStep ? (
                <button
                  type="button"
                  onClick={next}
                  className="bg-marineBlue text-white py-2 px-4 rounded-md"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="bg-purplishBlue text-white py-2 px-4 rounded-md hover:opacity-80 "
                >
                  Confirm
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
