import { FC, JSXElementConstructor, ReactElement } from "react";
import FormHeader from "./FormHeader";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import classNames from "classnames";

type Props = {
  control: any;
  yearly: boolean;
};

const AddOns: FC<Props> = ({ control, yearly }) => {
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
  return (
    <div>
      <FormHeader
        title={"Pick add-ons"}
        description="Add-ons help enhance your gaming experience."
      />
      <div className="mt-12">
        {checkboxData.map((item, index) => (
          <Controller
            key={index}
            name={item.name}
            control={control}
            render={({ field }) => (
              <div className="my-4">
                <label
                  htmlFor={item.name}
                  className={classNames(
                    "flex gap-4 border border-purplishBlue rounded-md p-4",
                    { "bg-magnolia": field.value }
                  )}
                >
                  <input
                    id={item.name}
                    type="checkbox"
                    {...field}
                    checked={field.value}
                    value={5}
                  />
                  <div className="flex w-full justify-between items-center">
                    <div>
                      <h4 className="text-marineBlue font-semibold">
                        {item.label}
                      </h4>
                      <p className="text-coolGray">{item.desc}</p>
                    </div>
                    <p className="text-sm text-purplishBlue">
                      {`+$${
                        yearly ? item.price * 10 + "/yr" : item.price + "/mo"
                      }`}
                    </p>
                  </div>
                </label>
              </div>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
