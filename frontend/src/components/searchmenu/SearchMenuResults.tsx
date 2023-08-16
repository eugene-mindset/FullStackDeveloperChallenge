import React from "react";

import { Result } from "../../types";
import styles from "./SearchMenu.module.css";
import Button from "../button/Button";
import { ReplaceIcon, TrashIcon } from "../icons";

interface Props {
  results: Result[];
  onOperationPress: (operation: 'replace' | 'delete') => void;
}

const SearchMenuResults = (props: Props): JSX.Element => {
  const { results, onOperationPress } = props;

  const handleReplaceOnClick = () => {
    onOperationPress('replace');
  }

  const handleDeleteOnClick = () => {
    onOperationPress('delete');
  }

  const ResultItem = (props: { result: Result }): JSX.Element => {
    return (
      <li>
        ...{props.result.text.substring(0, props.result.start)}
        <b>{props.result.text.substring(props.result.start, props.result.end)}</b>
        {props.result.text.substring(props.result.end)}...
      </li>
    );
  };

  return results.length ? (
    <div className={styles.results}>
      Results
      <ul>
        {results.map((result: Result, index: number) => (
          <ResultItem result={result} key={`${result.text}_${index}`} />
        ))}
      </ul>
      <div className={styles.operations}>
        <Button className={styles.replace_button} onClick={handleReplaceOnClick}>
          <ReplaceIcon /> Replace
        </Button>
        <Button className={styles.delete_button} onClick={handleDeleteOnClick}>
          <TrashIcon /> Delete
        </Button>
      </div>
    </div>
  ) : <></>;
};

export default SearchMenuResults;
