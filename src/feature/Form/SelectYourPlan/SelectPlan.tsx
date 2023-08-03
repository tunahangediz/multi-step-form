import { FC, useEffect, useMemo, useState } from "react";
import FormHeader from "../FormHeader";
import PlanCard from "./PlanCard";
import Toggle from "./Toggle";

type Props = {
  register: any;
  yearly: boolean;
  setYearly: (bool: boolean) => void;
  getValues: () => any;
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
const SelectPlan: FC<Props> = ({ register, setYearly, yearly, getValues }) => {
  const value =
    typeof getValues().plan == "string"
      ? JSON.parse(getValues().plan)
      : getValues().plan;

  const [selected, setSelected] = useState<string>(value.title);
  useEffect(() => {
    setSelected(value.title);
    console.log(value.title + "fdsf");
  }, []);

  return (
    <div>
      <FormHeader
        title="Select your plan"
        description="You have the selection of monthly or yearly billing"
      />
      <div className="flex justify-between gap-4 mt-12">
        {cards.map((card, index) => (
          <label
            htmlFor={card.title}
            className="w-full peer-disabled:bg-red-500 "
            onClick={() => setSelected(card.title)}
          >
            <PlanCard
              key={index}
              title={card.title}
              price={card.price}
              yearly={yearly}
              src={card.src}
              isSelected={selected == card.title}
            />

            <input
              name={card.title}
              id={card.title}
              className="invisible"
              {...register("plan")}
              type="radio"
              value={JSON.stringify({ title: card.title, price: card.price })}
            />
          </label>
        ))}
      </div>
      <div className="mt-8">
        <Toggle setYearly={setYearly} yearly={yearly} />
      </div>
    </div>
  );
};

export default SelectPlan;
