import React, { Component } from 'react';
import CommentList from './components/CommentList'

const comments = [
  { text: 'Good for you', author: 'Mot', vote: 105 },
  { text: 'Positive', author: 'Sunny', vote: 35 },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <CommentList comments={comments} />
      </div>
    );
  }
}

export default App;
