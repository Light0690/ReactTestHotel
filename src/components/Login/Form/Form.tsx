import * as Yup from "yup";
import { useFormik } from "formik";
import { isEmptyObj } from "minoru";
import { Navigate, Link } from "react-router-dom";
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { authSelector } from "@redux/slices/Auth/authSlice";

import UiFormButton from "@components/UI/UiFormButton";
import UiFormInput from "@components/UI/UiFormInput";

import styles from "./Form.module.scss";

interface Props {
  header: string;
  text: JSX.Element;
  link: JSX.Element;
  onSubmitFunc: Function;
}

export const Form = ({ header, text, link, onSubmitFunc }: Props) => {
  const isAuth = useAppSelector(authSelector);
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
      dispatch(onSubmitFunc({ email, password }));
    },
  });

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={formik.handleSubmit} className={cn('block',styles.form)}>
      <h1 className={styles.form__title}>{header}</h1>
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
      <div className={styles.form__footer}>
        <UiFormButton title={"Войти"} disabled={!isEmptyObj(formik.errors)} />
        <div className={styles.form__link}>
          {text}
          <Link to="">{link}</Link>
        </div>
      </div>
    </form>
  );
};

export default Form;
