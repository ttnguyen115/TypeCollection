import PageRender from "components/Container/PageRender";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <h2 className="text-green-500">hello</h2>
      <Routes>
        <Route path="/" element={<PageRender />} />
        <Route path="/:page" element={<PageRender />} />
        <Route path="/:page/:slug" element={<PageRender />} />
      </Routes>
    </React.Fragment>
  );
}

export default React.memo(App);
