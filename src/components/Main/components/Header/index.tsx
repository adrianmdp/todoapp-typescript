import React, { FC } from "react";

interface Props {
  title: string;
  handleClick?: () => void;
}

const Header: FC<Props> = ({ title, handleClick }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <button onClick={handleClick}>Agregar</button>
    </header>
  );
};

export { Header };
