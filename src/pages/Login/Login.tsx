import { FC } from "react";

import FormLogin from "../../components/Login/FormLogin/FormLogin";

import styles from "./Login.module.scss";

const Login: FC = () => {
  return (
    <div className={styles.wrapper}>
        <FormLogin />
      {/* <div className={styles.blur}>
        <Form />
      </div> */}
    </div>
  );
};

export default Login;
