import styles from "./UiAlert.module.scss";

interface Props {
  message: String;
}

const UiAlert = ({ message }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h3>{message}</h3>
    </div>
  );
};

export default UiAlert;
