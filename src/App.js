import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import RootPage from './pages/root'
import UserPage from './pages/user'
import CommentPage from './pages/comment'
import Header from './routes/header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <Header />

        <Switch>
          <Route exact path={'/'} component={RootPage} />
          <Route exact path={'/user'} component={UserPage} />
          <Route exact path={'/comment'} component={CommentPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
