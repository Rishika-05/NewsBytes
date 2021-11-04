import './App.css';
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
// import PropTypes from 'react';

const App = () => {

  const apiKey = '8e0c6bc688794507970f6e13e04d2721';
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          // height='3'
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country='in' category='general' />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} country='in' category='business' />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country='in' category='entertainment' />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} country='in' category='health' />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} apiKey={apiKey} key="scienece" pageSize={9} country='in' category='science' />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} country='in' category='sports' />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} country='in' category='technology' />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App