import { FC, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import _ from "lodash";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { setHotels, setSearchForm } from "@redux/slices/hotelsSlice";
import { hotelsAPI } from "@redux/query/hotelsQuery";

import UiFormButton from "@components/UI/UiFormButton";
import UiFormInput from "@components/UI/UiFormInput";

import styles from "./FormSearch.module.scss";

interface formValues {
  location: string;
  checkInDate: string;
  countDays: number;
}

export const FormSearch: FC = () => {
  const location = useAppSelector((state) => state.hotels.location);
  const checkInDate = useAppSelector((state) => state.hotels.checkInDate);
  const checkOutDate = useAppSelector((state) => state.hotels.checkOutDate);
  const countDays = useAppSelector((state) => state.hotels.countDays);

  const dispatch = useAppDispatch();
  const {
    data: hotels = [],
    error,
    isLoading,
  } = hotelsAPI.useFetchHotelsQuery({
    location,
    checkInDate,
    checkOutDate,
  });

  useEffect(() => {
    if (hotels.length) {
      dispatch(setHotels(hotels));
    }
  }, [hotels]);

  const submitForm = (values: formValues) => {
    dispatch(setSearchForm(values));
    dispatch(setHotels(hotels));
  };

  const formik = useFormik({
    initialValues: {
      location,
      checkInDate,
      countDays,
    },
    validationSchema: Yup.object().shape({
      location: Yup.string().required("*поле обязательно"),
      checkInDate: Yup.string().required("*поле обязательно"),
      countDays: Yup.number()
        .typeError("*поле должно содержать только цифры")
        .required("*поле обязательно"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <UiFormInput
        name="location"
        title="Локация"
        type="string"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.location}
        errors={formik.errors.location}
        touched={formik.touched.location}
      />
      <UiFormInput
        name="checkInDate"
        type="date"
        title="Дата заселения"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.checkInDate}
        errors={formik.errors.checkInDate}
        touched={formik.touched.checkInDate}
      />
      <UiFormInput
        name="countDays"
        type="number"
        title="Количество дней"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.countDays}
        errors={formik.errors.countDays}
        touched={formik.touched.countDays}
      />
      <UiFormButton title={"Найти"} disabled={!_.isEmpty(formik.errors)} />
    </form>
  );
};

export default FormSearch;
