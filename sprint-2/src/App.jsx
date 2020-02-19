import React, { Component } from 'react';
import Header from './components/Header/Header';
import Video from './pages/Video/Video';
import NotFound from './pages/NotFound/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Video  /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
