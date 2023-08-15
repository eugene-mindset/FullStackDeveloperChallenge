import React, { useEffect, useState } from 'react';

import './App.css';
import ArticleViewer from './components/articleviewer/ArticleViewer';
import { fetchCorpus } from './services/searchAPI';
import MenuBar from './components/menubar/MenuBar';

function App() {
  const [corpusText, setCorpusText] = useState<string>("");

  useEffect(() => {
    const initFetch = async () => {
      try {
        setCorpusText(await fetchCorpus());
      } catch (e: any) {
        console.error(e);
      }
    }

    initFetch();
  }, []);

  return (
    <div className="App">
      <MenuBar />
      <ArticleViewer text={corpusText} />
    </div>
  );
}

export default App;
