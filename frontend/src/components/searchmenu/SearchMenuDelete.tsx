import React from "react";

import Button from "../button/Button";
import { TrashIcon } from "../icons";

import styles from "./SearchMenu.module.css";

interface Props {
  instances: number;
  query: string | undefined;
  onDeleteClick: () => void;
}

const SearchMenuDelete = (props: Props): JSX.Element => {
  const { instances, query, onDeleteClick } = props;

  return (
    <div className={styles.delete_panel}>
      Confirm deletion of {instances} instances of "{query}"?
      <Button className={styles.delete_button} onClick={onDeleteClick}>
        <TrashIcon /> Delete
      </Button>
    </div>
  );
};

export default SearchMenuDelete;
