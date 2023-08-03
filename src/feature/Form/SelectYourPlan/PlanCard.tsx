import classNames from "classnames";
import { FC } from "react";

type Props = {
  title: string;
  price: number;
  src: string;
  yearly: boolean;

  isSelected: boolean;
};

const PlanCard: FC<Props> = ({ title, price, src, yearly, isSelected }) => {
  const priceText = yearly ? `${price * 10}/yr` : price + "/mo";

  return (
    <div
      className={classNames("border rounded-md p-4  max-w-xs w-full ", {
        "outline outline-purplishBlue": isSelected,
      })}
    >
      <img src={src} alt="arcade image" />
      <div className="mt-10">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-coolGray">${priceText} </p>
        {yearly && (
          <p className="text-sm text-marineBlue mt-1">2 months free </p>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
