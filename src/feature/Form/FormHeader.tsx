import { FC } from "react";

type Props = {
  title: string;
  description?: string;
};

const FormHeader: FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h2 className="pb-2 text-4xl font-semibold text-marineBlue">{title}</h2>
      <p className=" text-coolGray ">{description}</p>
    </div>
  );
};

export default FormHeader;
