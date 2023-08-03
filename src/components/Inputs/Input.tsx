import { FC } from "react";

type Props = {
  label: string;
  name: string;
  register: any;
  placeholder: string;
};

const Input: FC<Props> = ({ label, name, register, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-marineBlue">
        {label}
      </label>
      <input
        {...register(name)}
        placeholder={placeholder}
        className="border py-3 px-4 rounded-md"
      />
    </div>
  );
};

export default Input;
