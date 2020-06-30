import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Add from "./pages/Add";
import AllBook from "./pages/AllBook";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import "./styles/Navbar.css";
import "./styles/Jumbotron.css";
import "./styles/Search.css";
import "./styles/Cards.css";
import "./styles/Footer.css";
import "./styles/Register.css";
import "./styles/Detail.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Signin} />
        <Route path="/register" component={Signup} />
        <Route path="/detail" component={Detail} />
        <Route path="/category" component={Category} />
        <Route path="/all" component={AllBook} />
        <Route path="/add" component={Add} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
