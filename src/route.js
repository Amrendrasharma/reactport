import React from "react";
import { Route } from "react-router-dom";
//import { createBrowserHistory } from "history";

import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
//const history = createBrowserHistory();
const BaseRoute = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/projects/" component={Projects} />
    </div>
  );
};
export default BaseRoute;
