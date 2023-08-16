import React, { useRef } from "react";

import styles from "./SearchMenu.module.css";
import TextField from "../textfield/TextField";
import Button from "../button/Button";

interface Props {
  onReplaceClick: (word: string) => void;
}

const SearchMenuReplace = (props: Props): JSX.Element => {
  const {onReplaceClick} = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (inputRef.current?.value){
      onReplaceClick(inputRef.current?.value);
    }
  }

  return (
    <div className={styles.replace_panel}>
      <TextField
        ref={inputRef}
        fieldTitle="Replace With"
        after={
          <Button onClick={handleOnClick} className={styles.replace_button_replace}>Replace</Button>
        }
      />
      <div className={styles.replace_warning}>This cannot be reversed!</div>
    </div>
  );
};

export default SearchMenuReplace;
