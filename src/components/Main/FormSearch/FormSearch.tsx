import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

import UiButton from "../../UI/UiButton/UiButton";
import UiInput from "../../UI/UiInput/UiInput";

import styles from "./FormSearch.module.scss";

interface FormValues {
  location: string;
  Date: string;
  countDays: number;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { isSubmitting } = props;

  return (
    <Form className={styles.form}>
      <Field component={UiInput} name="location" title="Локация" />
      <Field
        component={UiInput}
        name="Date"
        type="Date"
        title="Дата заселения"
      />
      <Field component={UiInput} name="countDays" title="Колличество дней" />
      <UiButton type="submit" disabled={isSubmitting} />
    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    let date = new Date();

    return {
      location: "Москва",
      Date: `${date.getFullYear()}-0${date.getMonth()}-${date.getDate()}`,
      countDays: 1,
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if(!values.location) errors.location = '*Поле обязательно'
    if(!values.Date) errors.Date = '*Поле обязательно'
    if(!values.countDays) errors.countDays = '*Поле обязательно'

    return errors;
  },

  handleSubmit: (values) => {
    console.log(1);
  },
})(InnerForm);

const FormSearch = () => {
  return (
    <div>
      <MyForm  />
    </div>
  );
};

export default FormSearch;
