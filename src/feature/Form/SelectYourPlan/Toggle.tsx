import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { FC, useState } from "react";

type Props = { setYearly: (state: any) => void; yearly: boolean };

const Toggle: FC<Props> = ({ setYearly, yearly }: Props) => {
  const handleChange = () => {
    setYearly((prev: any) => !prev);
  };

  return (
    <div className="w-full bg-magnolia flex items-center justify-center gap-8 p-2 rounded-md">
      <p
        className={classNames("text-sm font-bold", {
          "text-coolGray": yearly,
        })}
      >
        Monthly
      </p>
      <Switch
        checked={yearly}
        onClick={handleChange}
        className={`${
          yearly ? "bg-marineBlue" : "bg-marineBlue"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            yearly ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <p
        className={classNames("text-sm font-bold", {
          "text-coolGray": !yearly,
        })}
      >
        Yearly
      </p>
    </div>
  );
};

export default Toggle;
