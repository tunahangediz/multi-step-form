import { FC } from "react";

type Props = {
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
  handleSubmit: any;
  isValid: boolean;
  onSubmit: any;
};

const NavigationButtonGroup: FC<Props> = ({
  isFirstStep,
  back,
  next,
  isValid,
  handleSubmit,
  isLastStep,
  onSubmit,
}) => {
  return (
    <div className="flex justify-end items-end w-full mt-auto">
      {!isFirstStep && (
        <button
          className=" mr-auto mt-4 text-coolGray"
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
          disabled={!isValid}
          className="bg-marineBlue mt-4 text-white py-2 px-4 rounded-md disabled:bg-gray-500"
        >
          Next Step
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="bg-purplishBlue mt-4 text-white py-2 px-4 rounded-md hover:opacity-80 disabled:opacity-80"
          disabled={!isValid}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default NavigationButtonGroup;
