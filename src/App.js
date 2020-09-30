import React, { Component } from 'react';
import './public/main.css';
import Password from './password';
import PasswordList from './password-list';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import {saveState, loadState} from './local-store'
// const store = createStore(reducers)
const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App-header">
          <Password />
          <PasswordList/>
        </div>
      </Provider>
    );
  }
}

export default App;