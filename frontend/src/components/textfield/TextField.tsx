import React, { forwardRef } from "react";

import styles from "./TextField.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  fieldTitle?: string;
  after?: React.ReactNode;
}

const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={styles.container}>
      <span className={styles.inputName}>{props?.fieldTitle}</span>
      <div className={styles.inline}>
        <input
          {...props}
          type="text"
          className={[styles.inputField, props?.className].join(" ")}
          ref={ref}
        />
        {props?.after && props.after}
      </div>
    </div>
  );
});

export default TextField;
