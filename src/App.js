import SwvlEnglish from "./Component/SwvlEnglish.js";
import React from 'react'
import { Route, Routes } from "react-router";
import NotFound from "./Component/NotFound.js";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<SwvlEnglish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
