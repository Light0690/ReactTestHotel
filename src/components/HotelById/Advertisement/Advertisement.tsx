import cn from "classnames";

import styles from "./Advertisement.module.scss";

const Advertisement = () => {
  return (
    <div className={cn("block", styles.wrapper)}>
      <h4>здесь могла бы быть ваша реклама</h4>
    </div>
  );
};

export default Advertisement;
