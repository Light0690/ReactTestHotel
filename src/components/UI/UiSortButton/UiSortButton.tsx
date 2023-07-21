import { FC } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import styles from "./UiSortButton.module.scss";

interface sortProps {
  onClick: (type: "stars" | "priceAvg", desc: boolean) => void;
  title: string;
  desc: boolean;
  type: "stars" | "priceAvg";
}

const UiSortButton: FC<sortProps> = ({ onClick, title, desc, type }) => {
  const handleClick = () => {
    onClick(type, desc);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.button__title}>{title}</div>
      <div>
        <svg
          className={styles.button__icon}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="select">
            <path
              id="select_2"
              d="M13.5 7.24264L12.4393 8.3033L9.25736 5.12132L6.07538 8.3033L5.01472 7.24264L9.25736 3L13.5 7.24264Z"
              fill="#41522E"
              fillOpacity={!desc ? "0.3" : ""}
            />
            <path
              id="select_3"
              d="M13.5 10.8324L12.4393 9.77179L9.25736 12.9538L6.07538 9.77179L5.01472 10.8324L9.25736 15.0751L13.5 10.8324Z"
              fill="#41522E"
              fillOpacity={desc ? "0.3" : ""}
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default UiSortButton;
