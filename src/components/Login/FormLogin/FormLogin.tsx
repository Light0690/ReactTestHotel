import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

import UiButton from "../../UI/UiButton/UiButton";

import styles from "./FormLogin.module.scss";
import UiInput from "../../UI/UiInput/UiInput";

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {  isSubmitting, message } = props;

  return (
    <Form className={styles.form}>
      <h1 className={styles.form__title}>{message}</h1>
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
      <UiButton type="submit" disabled={isSubmitting} />
    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "*Поле обязательно";
    } else if (!values.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g)) {
      errors.email = "*Неверный почтовый адрес";
    }
    if (!values.password) {
      errors.password = "*Поле обязательно";
    } else if (/[а-яё]/gi.test(values.password) || values.password.length < 8) {
      errors.password =
        "*Пороль не может содержать кириллицу или быть меньше 8 символов";
    }
    return errors;
  },

  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerForm);

const FormLogin = () => (
  <div>
    <MyForm message="Simple Hotel Check" />
  </div>
);

export default FormLogin;
