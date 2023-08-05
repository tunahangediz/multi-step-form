import { FC } from "react";
import FormHeader from "../FormHeader";
import CustomCheckBox from "./CustomCheckBox";

type Props = {
  control: any;
  yearly: boolean;
};

const checkboxData = [
  {
    name: "addOns1",
    label: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "addOns2",
    label: "Larger storage",
    desc: "Access to multiplayer games",
    price: 2,
  },
  {
    name: "addOns3",
    label: "Customizable Profile",
    desc: "Access to multiplayer games",
    price: 2,
  },
];

const AddOns: FC<Props> = ({ control, yearly }) => {
  return (
    <div>
      <FormHeader
        title={"Pick add-ons"}
        description="Add-ons help enhance your gaming experience."
      />
      <div className="mt-12">
        {checkboxData.map((item, index) => (
          <CustomCheckBox
            item={item}
            control={control}
            index={index}
            yearly={yearly}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
