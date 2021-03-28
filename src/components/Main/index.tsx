import React, { FC } from "react";
import { Header } from "./components";

import "./styles.scss";

interface Props {
  title: string;
  handleClick?: () => void;
}

const Main: FC<Props> = ({ children, title, handleClick }) => {
  return (
    <main>
      <Header title={title} handleClick={handleClick} />
      {children}
    </main>
  );
};

export { Main };
