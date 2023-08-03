import { useAppSelector } from "@redux/hooks";
import { useFetchWithError } from "@hooks/useFetchWithError";

import FormLogin from "@components/Login/FormLogin";

import styles from "./Login.module.scss";

const Login = () => {
  const error = useAppSelector((state) => state.auth.error);
const errorTSX = useFetchWithError(error)
  
return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <FormLogin />
        {errorTSX}
      </div>
    </div>
  );
};

export default Login;
