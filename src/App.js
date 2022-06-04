import React from 'react';

import TopBar from './components/TopBar';
import ContentWrapper from './components/ContentWrapper';
import { TwitterDataContextProvider } from './contexts/TwitterDataContext';

function App () {
  return (
    <>
      <TopBar />
      <TwitterDataContextProvider>
        <ContentWrapper />
      </TwitterDataContextProvider>
    </>
  );
}

export default App;
