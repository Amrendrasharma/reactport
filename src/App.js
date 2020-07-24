import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoute from "./route";

function App() {
  return (
    <Router>
      <BaseRoute />
    </Router>
  );
}
export default App;
