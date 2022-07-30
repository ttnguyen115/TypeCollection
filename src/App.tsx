import PageRender from 'components/Container/PageRender';
import Header from 'components/global/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<PageRender />} />
        <Route path="/:page" element={<PageRender />} />
        <Route path="/:page/:slug" element={<PageRender />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
