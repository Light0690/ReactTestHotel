import { useState } from "react";

import { useAppSelector } from "@redux/hooks";
import { errorSelector } from "@redux/slices/Auth/authSlice";

import { fetchAuth } from "@redux/async/Auth/fetchAuth";
import { fetchRegistr } from "@redux/async/Auth/fetchRegistr";

import Form from "@components/Login/Form";
import FetchWithError from "@ux/FetchWithError";

import styles from "./Login.module.scss";

const Login = () => {
  const error = useAppSelector(errorSelector);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const RegistrTextTSX = <p>Уже есть аккаунт?</p>;
  const RegistrLinkTSX = (
    <p onClick={() => setIsLoginForm((prev) => !prev)}>Логин</p>
  );
  const LoginTextTSX = <p>Ещё нет аккаунта?</p>;
  const LoginLinkTSX = (
    <p onClick={() => setIsLoginForm((prev) => !prev)}>Регистрация</p>
  );
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        {isLoginForm ? (
          <Form
            header={"Логин"}
            text={LoginTextTSX}
            link={LoginLinkTSX}
            onSubmitFunc={fetchAuth}
          />
        ) : (
          <Form
            header={"Регистрация"}
            text={RegistrTextTSX}
            link={RegistrLinkTSX}
            onSubmitFunc={fetchRegistr}
          />
        )}
      </div>
      <FetchWithError error={error} />
    </div>
  );
};

export default Login;
