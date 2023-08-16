import React, { useEffect, useState } from "react";

import "./App.css";
import ArticleViewer from "./components/articleviewer/ArticleViewer";
import MenuBar from "./components/menubar/MenuBar";
import { SearchMenu } from "./components/searchmenu";
import { fetchCorpus } from "./services";

function App() {
  const [corpusText, setCorpusText] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  useEffect(() => {
    const initFetch = async () => {
      try {
        setCorpusText(await fetchCorpus());
      } catch (e: any) {
        console.error(e);
      }
    };

    initFetch();
  }, []);

  const openMenu = () => {
    setShowSearch(true);
  };

  const closeMenu = () => {
    setShowSearch(false);
  };

  return (
    <div className="App">
      {/*TODO: toggle visibility in component */}
      {!showSearch && <MenuBar onMenuClick={openMenu} />}
      {showSearch && <SearchMenu onCloseClick={closeMenu} updateText={setCorpusText}/>}
      <ArticleViewer text={corpusText} />
    </div>
  );
}

export default App;
