import cn from "classnames";

import styles from "./UiAlert.module.scss";

interface Props {
  message: string;
}

const UiAlert = ({ message }: Props) => {
  return (
    <div className={cn(styles.wrapper)}>
      <h3>{message}</h3>
    </div>
  );
};

export default UiAlert;
