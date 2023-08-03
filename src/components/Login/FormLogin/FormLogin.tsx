import * as Yup from "yup";
import { useFormik } from "formik";
import { isEmptyObj } from "minoru";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { fetchAuth } from "@redux/async/fetchAuth";

import UiFormButton from "@components/UI/UiFormButton";
import UiFormInput from "@components/UI/UiFormInput";

import styles from "./FormLogin.module.scss";

export const FormLogin = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "test@mail.ru",
      password: "qweqweqwe",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("*некорректный email")
        .required("*поле обязательно"),
      password: Yup.string()
        .matches(/^[^А-яёЁ]+$/, "*поле не может содержать кириллицу")
        .min(8, "*слишком короткий пороль")
        .required("*поле обязательно"),
    }),
    onSubmit: ({ email, password }) => {
      dispatch(fetchAuth({ email, password }));
    },
  });

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h1 className={styles.form__title}>Simple Hotel Check</h1>
      <UiFormInput
        name="email"
        title="Логин"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errors={formik.errors.email}
        touched={formik.touched.email}
      />
      <UiFormInput
        name="password"
        type="password"
        title="Пороль"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errors={formik.errors.password}
        touched={formik.touched.password}
      />
      <UiFormButton title={"Войти"} disabled={!isEmptyObj(formik.errors)} />
    </form>
  );
};

export default FormLogin;
