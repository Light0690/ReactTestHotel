import { useAppSelector } from "@redux/hooks";

import FormLogin from "@components/Login/FormLogin";

import FetchWithError from "@ux/FetchWithError";

import styles from "./Login.module.scss";

const Login = () => {
  const error = useAppSelector((state) => state.auth.error);

  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <FormLogin />
      </div>
      <FetchWithError error={error} />
    </div>
  );
};

export default Login;
