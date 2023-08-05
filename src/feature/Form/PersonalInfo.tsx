import { FC } from "react";
import FormHeader from "./FormHeader";
import Input from "../../components/Inputs/Input";
import { FieldErrors } from "react-hook-form";

type Props = {
  register: any;
  errors: any;
};

const PersonalInfo: FC<Props> = ({ register, errors }) => {
  return (
    <div>
      <FormHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <div className="flex flex-col  gap-6 mt-12">
        <Input
          label={"Name"}
          name={"name"}
          register={register}
          placeholder={"e.g. Stephen King"}
          isInValid={errors.name}
          errorMessage={errors?.name?.message}
        />
        <Input
          label={"Email Address"}
          name={"email"}
          register={register}
          placeholder={"e.g. stephenking@lorem.com"}
          isInValid={errors?.email}
          errorMessage={errors?.email?.message}
        />
        <Input
          label={"Phone Number"}
          name={"phone"}
          register={register}
          placeholder="e.g. +90 555 555 5555"
          isInValid={errors?.phone}
          errorMessage={errors?.phone?.message}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
