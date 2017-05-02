import React, {Component} from 'react'
import TodoModel from '../models/Todo'   // ajax GET statement
import TodoList from '../components/TodoList' // gets array, adds ID and body

class TodosContainer extends Component {
	constructor(){
		super()
		this.state = {
			todos: []
		}
	}
	componentDidMount(){
		this.fetchData()
	}
	fetchData(){
		TodoModel.all().then( (res) => {
			this.setState ({
				todos: res.todos
			})
		})
	}
	render() {

		return (

			<div className="todosContainer">
		        <TodoList
		          todos={this.state.todos}
		       	/>
			</div>

		)
	}
}

export default TodosContainer