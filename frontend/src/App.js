import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AuthProvider >
            <Header>Home</Header>
            <PrivateRoute exact path='/' component={HomePage} />
            <Route path='/login' component={LoginPage} />
          </AuthProvider>
        </Router>
      </div>
    );
  }
}

export default App;
