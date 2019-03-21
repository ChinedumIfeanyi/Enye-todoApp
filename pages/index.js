import React, { useState } from 'react'
import Layout from './components/Layout'

import FormInput from './components/FormInput'
import TodoTasks from './components/TodoTasks'


function Todo(){

	const [ todos, setTodo ] = useState([
		{
		  text: "Learn about React",
		  isCompleted: false
		},
		{
		  text: "Meet friend for lunch",
		  isCompleted: false
		},
		{
		 	text: "Build really cool todo app",
		  isCompleted: false
		}

	])

	const addTodo = text => {
		const newTodo = [...todos, { text, isCompleted: false }]
		setTodo(newTodo)
	}

	const removeTodo = index => {
		const newTodo = [ ...todos ]
		newTodo.splice(index, 1)
		setTodo( newTodo )
	}

	return (

		<div>

			<Layout>
				<FormInput addTodo={addTodo}/>
				
				{ 
					todos.map((todo,index) => (
						//console.log(todo)
						<TodoTasks
							key={index}
							index={index}
							task={todo.text}
							isCompleted= {todo.isCompleted}
							removeTodo={removeTodo}
						/>
					))
				}

			</Layout>

		</div>

	)
}

export default Todo