import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";
import logo from '../src/dbslogo.png';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src = {logo} alt = "Logo" />
        <h1 className='App-title'>TechTrek</h1>

        <div id ="content">
          <img src ="userblack.png"/>
        </div>
        
      </header>

      <div class="topnav">
      <a href="#">Wallet Balance</a>
      <a href="#">Buy & Sell</a>
      <a href="#">Past Transactions</a>
      </div>

      {/* Specifies components to handle specific routes */}
      <Router>
        <div>
          {/* This line specifies that if the browser URL matches /,
          the ArticleListing component should be rendered in this place. */}
          <Route exact path='/' component={ArticleListing} />
          {/* Paths can contain parameters, for example, path="/post/:slug",
          which are delivered to the target component through react props. */}
          <Route path='/post/:slug' component={ArticleView} />
        </div>
      </Router>
    </div>
  );
}

export default App;