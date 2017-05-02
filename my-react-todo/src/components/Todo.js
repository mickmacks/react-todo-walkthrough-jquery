import React, {Component} from 'react'

class Todo extends Component {
	render(){
		return(
			<p data-todos-index={this.props.todo._id}>
				<span>{this.props.todo.body}</span>
			</p>
		)
	}
}
//  track - where else will we see 'Todo' data ?
export default Todo