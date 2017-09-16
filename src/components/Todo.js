import React, { Component } from 'react';
import './Todo.css';
import { REMOVE_TODO } from '../actions';
import { connect } from 'react-redux';

export default class Todo extends Component {
	removeTodo = () => {
		this.props.store.dispatch({type: REMOVE_TODO, index: this.props.index})
	}

	render() {
		return (
			<div className = 'todo'>
				<p>{this.props.text}</p>
				<p className = 'removeButton' onClick = {this.removeTodo}>Remove</p>
			</div>
		)
	}
}