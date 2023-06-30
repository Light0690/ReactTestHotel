import { FC } from "react";

import styles from "./UiButton.module.scss";

interface Props {
  type     : 'submit';
  disabled : boolean;
  title    : string;
}

const UiButton: FC<Props> = ({ type,disabled,title }) => {
  return (
    <button type={type} disabled={disabled} className={styles.button}>
      {title}
    </button>
  );
};

export default UiButton;
