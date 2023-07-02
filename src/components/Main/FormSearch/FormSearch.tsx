import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import UiButton from "../../UI/UiButton/UiButton";
import UiInput from "../../UI/UiInput/UiInput";
import UiHeart from "../../UI/UiHeart/UiHeart";

import styles from "./FormSearch.module.scss";

const SignupSchema = Yup.object().shape({
  location: Yup.string().required("*поле обязательно"),
  Date: Yup.string().required("*поле обязательно"),
  countDays: Yup.number()
    .typeError("*поле должно содержать только цифры")
    .required("*поле обязательно"),
});

export const FormSearch = () => {
  let date = new Date();
  const year = `${date.getFullYear()}`;
  const month = `${
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  }`;
  const day = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

  return (
    <div>
      <Formik
        initialValues={{
          location: "Москва",
          Date: `${year}-${month}-${day}`,
          countDays: 1,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field component={UiInput} name="location" title="Локация" />
            <Field
              component={UiInput}
              name="Date"
              type="Date"
              title="Дата заселения"
            />
            <Field
              component={UiInput}
              name="countDays"
              title="Колличество дней"
            />
            <UiButton type="submit" disabled={isSubmitting} title={"Найти"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSearch;
