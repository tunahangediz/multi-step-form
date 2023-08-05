import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import AddOns from "./feature/Form/AddOns/AddOns";
import PersonalInfo from "./feature/Form/PersonalInfo";
import SelectPlan from "./feature/Form/SelectYourPlan/SelectPlan";
import Stepper from "./feature/Form/Stepper/Stepper";
import Summary from "./feature/Form/Summary";
import useMultiStepForm, { stepsType } from "./hooks/useMultiStepForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMediaQuery } from "usehooks-ts";
import NavigationButtonGroup from "./feature/Form/NavigationButtonGroup";

const planSchema = yup.object({
  title: yup.string().required(),
  price: yup.number().required(),
});

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  addOns1: yup.boolean(),
  addOns2: yup.boolean(),
  addOns3: yup.boolean(),
  plan: planSchema,
});

type FormData = yup.InferType<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      plan: { title: "Arcade", price: 9 },
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const [yearly, setYearly] = useState(false);

  const stepsData: stepsType = [
    {
      title: "Your Info",
      element: <PersonalInfo register={register} errors={errors} />,
    },
    {
      title: "select Plan",
      element: (
        <SelectPlan
          register={register}
          yearly={yearly}
          setYearly={setYearly}
          getValues={getValues}
          setValue={setValue}
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

  const isSmallDevice = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {/* <YoutubeForm /> */}
      <div className="flex w-full md:items-center justify-center md:h-screen px-4 md:px-0 bg-magnolia">
        {isSmallDevice && (
          <Stepper
            goTo={goTo}
            steps={steps}
            currentStepIndex={currentStepIndex}
            isSmallScreen={true}
          />
        )}
        <div className="top-24 md:top-0 border-2 rounded-2xl relative md:mt-0 p-4 max-w-4xl w-full flex bg-white">
          <div className="hidden md:block">
            <Stepper
              goTo={goTo}
              steps={steps}
              currentStepIndex={currentStepIndex}
            />
          </div>

          {/* <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
            {currentStepIndex + 1 + "/" + steps.length}
          </div> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between py-2 md:py-12 w-full md:px-12"
          >
            {/* current form element appear */}
            {step.element}

            <DevTool control={control} />

            <NavigationButtonGroup
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              isValid={isValid}
              back={back}
              next={next}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
