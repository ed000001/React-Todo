import React, { useEffect, useState, useReducer } from 'react';
import AddTodo from './components/AddTodo.js';
import reducer from './reducers/reducer';
import { Context } from './contexts/context';
import { TodoList } from './components/TodoList';
import { Typography } from '@material-ui/core';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, { todos: JSON.parse(localStorage.getItem('todos')) || [] });
  const [title, setTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);


  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="container App">
        <div className="main-content">
          <Typography 
            variant="h4"
            align="center"
            children="React Todo App"
            style={{marginBottom: '32px'}}
          />

          <AddTodo 
            title={title} 
            setTitle={setTitle}
          />

          <TodoList 
            todos={state.todos}
          />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
