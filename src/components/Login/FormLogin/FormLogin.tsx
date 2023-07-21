import * as Yup from "yup";
import { useFormik } from "formik";
import _ from "lodash";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { setAuth } from "@redux/slices/authSlice";

import UiButton from "@ui/UiButton";
import UiInput from "@ui/UiInput";

import styles from "./FormLogin.module.scss";

export const FormLogin = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
    onSubmit: (values) => {
      dispatch(setAuth(true));
    },
  });

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h1 className={styles.form__title}>Simple Hotel Check</h1>
      <UiInput
        name="email"
        title="Логин"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errors={formik.errors.email}
        touched={formik.touched.email}
      />
      <UiInput
        name="password"
        type="password"
        title="Пороль"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errors={formik.errors.password}
        touched={formik.touched.password}
      />
      <UiButton title={"Найти"} disabled={!_.isEmpty(formik.errors)} />
    </form>
  );
};

export default FormLogin;
