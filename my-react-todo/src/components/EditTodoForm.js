import React, {Component} from 'react'

class EditTodoForm extends Component {

  constructor() {
    super()
    this.state = {
      updatedTodoBody: ''
    }
  }

  onInputChange(event){
    console.log('changing a todo!')
    this.setState({
      updatedTodoBody: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault()
    console.log('edit todo form submitted')
    this.props.onUpdateTodo(this.state.updatedTodoBody)
    this.setState({
      updatedTodoBody: ''
    })

    // get the value of the current edit form field or state
    // put the form field value as the DB.body
    // update the value of the editted todo to match form field value
    // send the value up to higher components by calling a method from this.props
    // empty out the form value

  }

  render(){
    return (
      <div className='editTodoForm'>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Write updated todo here...'
            type='text'
            value={this.state.updatedTodoBody} />
          <button type='submit'>Update Todo!</button>
        </form>
      </div>
    )
  }
}

export default EditTodoForm