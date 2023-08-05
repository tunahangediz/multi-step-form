import classNames from "classnames";
import { FC } from "react";
import { Controller } from "react-hook-form";

type Props = {
  item: {
    name: string;
    label: string;
    desc: string;
    price: number;
  };
  control: any;
  index: number;
  yearly: boolean;
};

const CustomCheckBox: FC<Props> = ({ item, control, index, yearly }) => {
  return (
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
                <h4 className="text-marineBlue font-semibold">{item.label}</h4>
                <p className="text-coolGray">{item.desc}</p>
              </div>
              <p className="text-sm text-purplishBlue">
                {`+$${yearly ? item.price * 10 + "/yr" : item.price + "/mo"}`}
              </p>
            </div>
          </label>
        </div>
      )}
    />
  );
};

export default CustomCheckBox;
