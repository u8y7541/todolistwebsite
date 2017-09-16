import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js';
import { connect } from 'react-redux';
import { ADD_TODO } from './actions';

class App extends Component {
  addTodo = () => {
    this.props.store.dispatch({type: ADD_TODO, text: document.getElementById('todo').value})
  }

  render() {
    let todoList = this.props.todos.map((todo, index)=><Todo store = {this.props.store} index = {index} text = {`${index + 1}. ${todo.text}`} />)
    return (
      <div className="App">
        <div className="header">
          <p className="heading">Todo List</p>
        </div>
        <br/><br/>
        {todoList}
        <input id='todo' placeholder="New todo"/>
        <button onClick = {this.addTodo}>Add todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

const mapDispatchToProps = (dispatch) => null

export default connect(mapStateToProps, mapDispatchToProps)(App);
