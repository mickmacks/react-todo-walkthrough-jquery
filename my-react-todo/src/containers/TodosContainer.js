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

	updateTodo(newTodo){
		console.log(newTodo)

		// get/store newTodo id
		// store or format the newTodo like in createTodo
		// find a match in TodoModel.update(todo) 
		// run the TodoModel.update(todo) function 
		// set the new state
	}

	deleteTodo(todo) {
		console.log('deleteing todo', todo)
		TodoModel.delete(todo).then((res) => {
			let todos = this.state.todos.filter(function(todo){
				return todo._id !== res._id  // todo is same as res - so only returns in array what has different ID
			});
			this.setState({todos})
		})
	}

	render() {

		return (

			<div className="todosContainer">
				<CreateTodoForm 
				 createTodo={this.createTodo.bind(this)}/>
		        <TodoList
		          todos={this.state.todos}
		      		{/* create onUpdateTodo property (prop) in TodoList,
		      			setting the prop value to updateTodo,
		      			binding this to the TodosContainer 'this' */}
		          onUpdateTodo={this.updateTodo.bind(this)}
		          onDeleteTodo={this.deleteTodo.bind(this)}
		       	/>
			</div>

		)
	}
}

export default TodosContainer