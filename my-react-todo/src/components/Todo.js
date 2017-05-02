import React, {Component} from 'react'

class Todo extends Component {
	render(){
		return(
			<p data-todos-index={this.props.todo._id}>
				<span>{this.props.todo.body}</span>
				<span 
				className='deleteButton'
				onClick={() => this.props.onDeleteTodo(this.props.todo)}>
					(X)
					</span>
			</p>
		)
	}
}
//  track - where else will we see 'Todo' data ?
export default Todo