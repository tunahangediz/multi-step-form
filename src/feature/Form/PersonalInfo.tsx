import { FC } from "react";
import FormHeader from "./FormHeader";
import Input from "../../components/Inputs/Input";

type Props = {
  register: any;
};

const PersonalInfo: FC<Props> = ({ register }) => {
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
        />
        <Input
          label={"  Email Address"}
          name={"email"}
          register={register}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <Input
          label={"Phone Number"}
          name={"phone"}
          register={register}
          placeholder="e.g. +90 555 555 5555"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
