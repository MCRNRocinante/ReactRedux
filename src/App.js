import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import Store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
