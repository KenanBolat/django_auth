import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={LoginPage} />
          </div>

        </Router>
        <p>Here is the demo</p>
      </div>
    );
  }
}

export default App;
