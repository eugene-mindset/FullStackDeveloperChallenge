import React, { useRef, useState } from "react";

import { Result } from "../../types";
import { CloseIcon } from "../icons";

import SearchMenuResults from "./SearchMenuResults";
import SearchMenuDelete from "./SearchMenuDelete";
import SearchMenuReplace from "./SearchMenuReplace";
import SearchMenuMsg from "./SearchMenuMsg";

import Button from "../button/Button";
import TextField from "../textfield/TextField";

import { deleteQueryInCorpus, queryCorpus, replaceQueryInCorpus } from "../../services";

import styles from "./SearchMenu.module.css";

interface Props {
  onCloseClick: () => void;
  updateText: (text: string) => void;
}

export const SearchMenu = (props: Props): JSX.Element => {
  const { onCloseClick, updateText} = props;

  const [results, setResults] = useState<Result[]>([]);
  const [counts, setCounts] = useState<number>(0);
  const [subPanel, setSubPanel] = useState<'replace' | 'delete' | undefined>();

  const [pastSubPanel, setPastSubPanel] = useState<'replace' | 'delete' | undefined>();
  const [pastQuery, setPastQuery] = useState<string>('');
  const [pastReplace, setPastReplace] = useState<string>('');

  const [topMatch, setTopMatch] = useState<string>('');
  const [topCount, setTopCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = async () => {
    try {
      setPastSubPanel(undefined);
      if (inputRef.current?.value) {
        const data = await queryCorpus(inputRef.current?.value);

        setCounts(data?.totalCount);
        setResults(data?.previewResults);
        setTopMatch(data?.counts[0].word);
        setTopCount(data?.counts[0].count);
      } else {
        setCounts(0);
        setResults([]);
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  const performOperation = (operation: 'replace' | 'delete') => {
    setSubPanel(operation);
  }

  const handleReplace = async (word: string) => {
    try {
      if (inputRef.current?.value) {
        const data = await replaceQueryInCorpus(inputRef.current?.value, word);
        setPastQuery(inputRef.current?.value);
        setPastReplace(word);
        updateText(data?.updatedCorpus);
        setPastSubPanel('replace')
        setSubPanel(undefined);
        inputRef.current.value = '';
      }

      setCounts(0);
      setResults([]);
    } catch (e: any) {
      console.error(e);
    }
  }

  const handleDelete = async () => {
    try {
      if (topMatch) {
        const data = await deleteQueryInCorpus(topMatch);
        setPastQuery(topMatch);
        updateText(data?.updatedCorpus);
        setPastSubPanel('delete')
        setSubPanel(undefined);
      }

      setCounts(0);
      setResults([]);
    } catch (e: any) {
      console.error(e);
    }
  }

  const onClose = () => {
    setSubPanel(undefined);
    onCloseClick();
  }

  return (
    <div className={styles.searchmenu}>
      <div className={styles.searchmenu_header}>
        Menu
        <Button onClick={onClose} className={styles.close}>
          <CloseIcon />
        </Button>
      </div>
      {subPanel !== 'delete' && <div className={styles.searchmenu_content}>
        <TextField
          fieldTitle="Search"
          placeholder="search text"
          ref={inputRef}
          onChange={handleSearch}
        />
        <div className={styles.result_count}>
          {counts ? counts : "No"} instance{counts !== 1 && "s"} found
        </div>
      </div>}
      {!subPanel && <SearchMenuResults results={results} onOperationPress={performOperation} />}
      {subPanel === 'replace' && <SearchMenuReplace onReplaceClick={handleReplace} />}
      {subPanel === 'delete' && <SearchMenuDelete onDeleteClick={handleDelete} instances={topCount} query={topMatch} />}
      <SearchMenuMsg operation={pastSubPanel} query={pastQuery} replace={pastReplace} />
    </div>
  );
};
