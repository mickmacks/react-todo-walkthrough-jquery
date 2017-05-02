import React, {Component} from 'react'
import TodoModel from '../models/Todo'   // ajax GET statement
import TodoList from '../components/TodoList' // gets array, adds ID and body
import CreateTodoForm from '../components/CreateToDoForm.js'

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

	createTodo(newBody) {
		
		let newTodo = {
			body: newBody,
			completed: false
		}
		TodoModel.create(newTodo).then((res) => {
			console.log('created todo', res)
			let todos = this.state.todos
			todos.push(res)
			this.setState({todos: todos})
		})

	}

	render() {

		return (

			<div className="todosContainer">
				<CreateTodoForm 
				 createTodo={this.createTodo.bind(this)}/>
		        <TodoList
		          todos={this.state.todos}
		       	/>
			</div>

		)
	}
}

export default TodosContainer