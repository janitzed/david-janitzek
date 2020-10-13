import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import Home from './Website/Pages/Home';

import Header from './Website/Modules/Header';

import './Website/Scss/index.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <span>
              <Header />
              <Route exact path="/" render={(props) => (<Home {...props} />)} />
            </span>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
