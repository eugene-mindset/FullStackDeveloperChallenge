import React, {} from "react";

import styles from "./ArticleViewer.module.css";

interface Props {
  text: string;
}

const ArticleViewer = (props: Props) : JSX.Element => {
  const {text} = props;
  console.log(text);


  return (
    <div className={styles.viewer}>
      <div className={styles.article}>
        <p>
          {`${text}`}
        </p>
      </div>
    </div>
  );
}

export default ArticleViewer;