import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import Home from './Website/Pages/Home';

import History from './Website/Pages/History';

import Projects from './Website/Pages/Projects';

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
              <Route exact path="/" render={(props) => (<Home {...props} />)} />
              <Route exact path="/history" render={(props) => (<History {...props} />)} />
              <Route exact path="/projects" render={(props) => (<Projects {...props} />)} />
            </span>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
