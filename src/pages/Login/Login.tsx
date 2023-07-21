import FormLogin from "@components/Login/FormLogin";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
