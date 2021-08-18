import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import { anonymousRouters } from "./routing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Loading />
        <Switch>
          {anonymousRouters.map((route,index) => {
            return <Route key={index} path={route.href} component={route.component} exact />
          })}
        </Switch>
      </Router >
    </div>
  );
}

export default App;
