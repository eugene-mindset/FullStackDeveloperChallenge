import React from "react";

import Button from "../button/Button";
import { MenuIcon } from "../icons";

import styles from "./MenuBar.module.css";

interface Props {
  onMenuClick: () => void;
}

// TODO: write test cases for component

const MenuBar = (props: Props): JSX.Element => {
  return (
    <div className={styles.menu}>
      <Button className={styles.menu_button} onClick={props?.onMenuClick}>
        <MenuIcon style={{ marginRight: "10px" }} />
        Menu
      </Button>
    </div>
  );
};

export default MenuBar;
