import { motion } from "framer-motion";

import styles from "./UiSortButton.module.scss";

interface Props {
  onClick: (type: "stars" | "priceAvg", desc: boolean) => void;
  title: string;
  desc: boolean;
  type: "stars" | "priceAvg";
}

const UiSortButton = ({ onClick, title, desc, type }: Props) => {
  const handleClick = () => {
    onClick(type, desc);
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} className={styles.wrapper}>
      <button className={styles.wrapper__button} onClick={handleClick}>
        <div className={styles.wrapper__title}>{title}</div>
        <div>
          <svg
            className={styles.wrapper__icon}
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
    </motion.div>
  );
};

export default UiSortButton;
