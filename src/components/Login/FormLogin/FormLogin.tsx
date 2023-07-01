import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import UiButton from "../../UI/UiButton/UiButton";
import UiInput from "../../UI/UiInput/UiInput";

import styles from "./FormLogin.module.scss";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("*некорректный email")
    .required("*поле обязательно"),
  password: Yup.string()
    .min(8, "*слишком короткий пороль")
    .required("*поле обязательно"),
});

export const FormLogin = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className={styles.form}>
          <h1 className={styles.form__title}>Signup</h1>
          <Field component={UiInput} type="email" name="email" title="Логин" />
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

export default FormLogin;
