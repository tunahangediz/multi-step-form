import classNames from "classnames";
import { FC } from "react";

type Props = {
  title: string;
  price: number;
  src: string;
  yearly: boolean;
  register: any;
  isSelected: boolean;
  setValue: any;
  setSelected: (value: string) => void;
};

const PlanCard: FC<Props> = ({
  title,
  price,
  src,
  yearly,
  isSelected,
  register,
  setValue,
  setSelected,
}) => {
  const priceText = yearly ? `${price * 10}/yr` : price + "/mo";

  return (
    <label
      htmlFor={title}
      className="w-full peer-disabled:bg-red-500 "
      onClick={() => setSelected(title)}
    >
      <div
        className={classNames(
          "border rounded-md p-4 md:gap-4 md:gap-0 md:max-w-xs w-full flex  md:flex-col items-center md:items-start",
          {
            "outline outline-purplishBlue": isSelected,
          }
        )}
      >
        <img src={src} alt="arcade image" />
        <div className="md:mt-10 text-left">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-coolGray">${priceText} </p>
          {yearly && (
            <p className="text-sm text-marineBlue mt-1">2 months free </p>
          )}
        </div>
      </div>
      <input
        name={title}
        id={title}
        className="invisible"
        {...register("plan")}
        type="radio"
        onChange={() => setValue("plan", { title: title, price: price })}
      />
    </label>
  );
};

export default PlanCard;
