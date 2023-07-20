import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { setAuth } from "@redux/slices/authSlice";

import UiButton from "@ui/UiButton";
import UiInput from "@ui/UiInput";

import styles from "./FormLogin.module.scss";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("*некорректный email")
    .required("*поле обязательно"),
  password: Yup.string()
    .matches(/^[^А-яёЁ]+$/, "*поле не может содержать кириллицу")
    .min(8, "*слишком короткий пороль")
    .required("*поле обязательно"),
});

export const FormLogin = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(setAuth(true));
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <h1 className={styles.form__title}>Simple Hotel Check</h1>
            <Field
              component={UiInput}
              type="email"
              name="email"
              title="Логин"
            />
            <Field
              component={UiInput}
              type="password"
              name="password"
              title="Пороль"
            />
            <UiButton type="submit" disabled={isSubmitting} title={"Войти"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
