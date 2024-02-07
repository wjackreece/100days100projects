import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataFetching from "./components/DataFetching/DataFetching";
import Day002 from "./components/Day002/Day002";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/001" element={<DataFetching />} />
        <Route path="/002" element={<Day002 />} />

        <Route path="*" element={<ProjectList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
