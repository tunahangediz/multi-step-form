import { FC } from "react";
import FormHeader from "./FormHeader";

type Props = {
  yearly: boolean;
  getValues: () => any;
};

const Summary: FC<Props> = ({ yearly, getValues }) => {
  // const total = yearly ?

  const calcTotal = (yearly: boolean, values: any) => {
    let total: number = 0;
    const addOns1 = values["addOns1"];
    const addOns2 = values["addOns2"];
    const addOns3 = values["addOns3"];
    const plan =
      typeof values.plan == "string" ? JSON.parse(values.plan) : values.plan;

    total += addOns1 ? 1 : 0;
    total += addOns2 ? 2 : 0;
    total += addOns3 ? 2 : 0;
    total += plan.price;

    if (yearly) total = total * 10;

    return { total, addOns1, addOns2, addOns3, values, plan };
  };
  const { total, addOns1, addOns2, addOns3, values, plan } = calcTotal(
    yearly,
    getValues()
  );
  const addOnes = [
    { active: addOns1, name: "Online service", price: 1 },
    { active: addOns2, name: "Larger storage", price: 2 },
    { active: addOns3, name: "Customizable profile", price: 2 },
  ];

  return (
    <div>
      <FormHeader
        title={"Finishing up"}
        description="Double-check everything looks OK before confirming."
      />

      <div className="mt-12 ">
        <div className="rounded-md p-6 bg-magnolia">
          <div className="flex justify-between">
            <div>
              <p>
                {plan.title} ({yearly ? "per year" : "per month"})
              </p>
              <button type="button" className="text-purplishBlue">
                Change
              </button>
            </div>
            <p className="text-marineBlue font-semibold">
              ${yearly ? plan.price * 10 : plan.price}
              {yearly ? "/yr" : "/mo"}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-2">
            {addOnes.map((addOn, index) => {
              if (addOn.active) {
                return (
                  <div key={index} className="flex justify-between text-sm">
                    <p className="text-coolGray">{addOn.name}</p>
                    <p className="text-gray-700 font-medium">
                      +$
                      {yearly ? addOn.price * 10 + "/yr" : addOn.price + "/mo"}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="flex justify-between mt-2 p-6">
          <p className="text-sm text-coolGray">
            Total ({yearly ? "per year" : "per month"})
          </p>
          <p className="text-lg font-semibold text-purplishBlue">
            +${total}/{yearly ? "yr" : "mo"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
