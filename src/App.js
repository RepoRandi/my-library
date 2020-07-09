import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Add from "./pages/Add";
import AllBook from "./pages/AllBook";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import DashboardBook from "./pages/DashboardBook";
import DashboardGenre from "./pages/DashboardGenre";
import DashboardAuthor from "./pages/DashboardAuthor";
import DashboardBorrow from "./pages/DashboardBorrow";
import "./styles/Navbar.css";
import "./styles/Jumbotron.css";
import "./styles/Search.css";
import "./styles/Cards.css";
import "./styles/Footer.css";
import "./styles/Register.css";
import "./styles/Login.css";
import "./styles/AddBook.css";
import "./styles/Detail.css";
import "./styles/Sliders.css";
import "./styles/DashboardAdmin.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard/borrow" component={DashboardBorrow} />
        <Route path="/dashboard/author" component={DashboardAuthor} />
        <Route path="/dashboard/genre" component={DashboardGenre} />
        <Route path="/dashboard/book" component={DashboardBook} />
        <Route path="/dashboard" component={Dashboard} />
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
