import { FC, useEffect, useMemo, useState } from "react";
import FormHeader from "../FormHeader";
import PlanCard from "./PlanCard";
import Toggle from "./Toggle";

type Props = {
  register: any;
  yearly: boolean;
  setYearly: (bool: boolean) => void;
  getValues: () => any;
  setValue: any;
};
const cards = [
  { title: "Arcade", price: 9, src: "/assets/images/icon-arcade.svg" },
  {
    title: "Advanced",
    price: 12,
    src: "/assets/images/icon-advanced.svg",
  },
  { title: "Pro", price: 15, src: "/assets/images/icon-pro.svg" },
];
const SelectPlan: FC<Props> = ({
  register,
  setYearly,
  yearly,
  getValues,
  setValue,
}) => {
  const value =
    typeof getValues().plan == "string"
      ? JSON.parse(getValues().plan)
      : getValues().plan;

  const [selected, setSelected] = useState<string>(value.title);

  useEffect(() => {
    setSelected(value.title);
  }, []);

  return (
    <div>
      <FormHeader
        title="Select your plan"
        description="You have the selection of monthly or yearly billing"
      />
      <div className="flex justify-between gap-4 mt-12 flex-col md:flex-row ">
        {cards.map((card, index) => (
          <PlanCard
            key={index}
            title={card.title}
            price={card.price}
            yearly={yearly}
            src={card.src}
            isSelected={selected == card.title}
            setSelected={setSelected}
            register={register}
            setValue={setValue}
          />
        ))}
      </div>
      <div className="md:mt-8">
        <Toggle setYearly={setYearly} yearly={yearly} />
      </div>
    </div>
  );
};

export default SelectPlan;
