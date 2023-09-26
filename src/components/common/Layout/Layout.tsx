import { ReactNode } from "react";

import { useAppSelector } from "@redux/hooks";

import { errorSelector } from "@redux/slices/Hotels/hotelsSlice";

import Header from "../Header";
import FetchWithError from "@ux/FetchWithError";

import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const error = useAppSelector(errorSelector);

  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <FetchWithError error={error} />
    </div>
  );
};

export default Layout;
