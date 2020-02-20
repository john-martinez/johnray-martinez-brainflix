import React, { Component } from 'react';
import Header from './components/Header/Header';
import Video from './pages/Video/Video';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" render={props=><Video {...props}/>} />
            <Route exact path="/:videoId" component={Video}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
