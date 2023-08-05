import classNames from "classnames";
import { FC } from "react";

type Props = {
  label: string;
  name: string;
  register: any;
  placeholder: string;
  isInValid: any;
  errorMessage: string;
};

const Input: FC<Props> = ({
  label,
  name,
  register,
  placeholder,
  isInValid,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-marineBlue flex justify-between">
        {label}
        {errorMessage && (
          <p className="text-red-700 font-semibold text-sm">{errorMessage} </p>
        )}
      </label>
      <input
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className={classNames("border py-3 px-4 rounded-md", {
          "border-red-700": isInValid,
        })}
      />
    </div>
  );
};

export default Input;
