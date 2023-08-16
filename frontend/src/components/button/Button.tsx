import React from "react";

import styles from "./Button.module.css";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button = (props: Props): JSX.Element => {
  const handleOnClick = () => {
    if (props?.onClick) props.onClick();
  };

  return (
    <div
      style={props?.style}
      className={[styles.button, props?.className].join(" ")}
      onClick={handleOnClick}
    >
      {props?.children && props.children}
    </div>
  );
};

export default Button;
