import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Portfolio from "./pages/Portfolio";
import About from './pages/About'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { isCompositeComponent } from 'react-dom/test-utils';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path={"/reactPortfolio"} component={Jumbotron} />
        <Route exact path={"reactPortfolio/portfolio"} component={Portfolio} />
        <Route exact path={"reactPortfolio/about"} component={About} />
      </Switch>
      {/* <Route exact path ="/" component={HomePage}/> */}
    </div>
  </BrowserRouter>
  );
}

export default App;
