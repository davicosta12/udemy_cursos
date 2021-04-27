import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import './App.css';

import SimpleForm from '../src/components/SimpleForm'
import TodoList from './components/todoList'
import reducers from './store/reducers/reducers'

const store = createStore(reducers)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SimpleForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
