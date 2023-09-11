import { ReactNode } from "react";

import Header from "../Header";

import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
