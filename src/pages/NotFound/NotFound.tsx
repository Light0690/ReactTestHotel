import { useNavigate, useParams } from "react-router-dom";
import cn from "classnames";

import UiButton from "@components/UI/UiButton";

import notFound404 from "@assets/img/notFound404.png";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const history = useNavigate();
  const params = useParams();

  const onClick = () => {
    history(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={cn("block", styles.wrapper__box)}>
        <div className={styles.wrapper__title}>
          <img
            className={styles.wrapper__img}
            src={notFound404}
            alt="notFound("
          />
          <h3>Упсс, страница - {params["*"]} пока не существует</h3>
          <UiButton title={"назад"} onClick={onClick} size="large" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
