import classNames from "classnames";
import { FC } from "react";

type Props = {
  index: number;
  title?: string;
  isSelected: boolean;
  onClick?: (index: number) => void;
  isSmallScreen?: boolean;
};

const Step: FC<Props> = ({
  index,
  title,
  isSelected,
  onClick,
  isSmallScreen,
}) => {
  const step = index + 1;
  return (
    <div onClick={() => onClick?.(index)} className="flex items-end gap-4">
      <div
        className={classNames(
          "rounded-full flex justify-center items-center w-10 h-10 border ",
          { "bg-lightBlue": isSelected, "text-white": !isSelected }
        )}
      >
        {step}
      </div>
      {!isSmallScreen && (
        <div>
          <span className="text-sm text-coolGray">STEP {step}</span>
          <p className="text-white font-semibold ">{title?.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
};

export default Step;
