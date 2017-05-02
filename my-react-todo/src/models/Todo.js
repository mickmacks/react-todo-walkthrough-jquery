import $ from 'jquery-ajax'

class TodoModel {
	static all(){
		let request = $.ajax({
			url: "http://super-crud.herokuapp.com/todos",
			method: 'GET'
		})
		return request
	}
}

export default TodoModel