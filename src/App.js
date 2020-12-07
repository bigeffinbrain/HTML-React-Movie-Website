import React from 'react';
import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/Login'
import MovieTitles from './components/MovieTitles'
import AboutMovie from './components/AboutMovie'

import './App.css';

class App extends Component {
  render() { 
    return (
      <div className='App'>
        <header>
            <h1>GMDB</h1>
            <div class="search">
                <input type="text" id="search-bar" value="" placeholder="Search"/>
                <button id="submit-button">Search</button>
            </div>
        </header>
          <Router>
              <Link exact to='/'>Home</Link>
              <Link to='/login'>Login</Link>

              <Switch>
                <Route exact path='/'>
                  <MovieTitles />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/aboutmovie'>
                  <AboutMovie />
                </Route>
              </Switch>  
          </Router>      
      </div>
    );
  }
}



export default App;
