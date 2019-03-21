import React, { useState } from 'react'
import Layout from './components/Layout'

import FormInput from './components/FormInput'
import TodoTasks from './components/TodoTasks'


function Todo(){

	const [ todos, setTodo ] = useState([
		{
		  text: "Learn React and Next Js",
		},
		{
		 	text: "Build really cool todo app",
		},
		{
			text: "Get enrolled for Enye developers program"
		},
		{
		  text: "Become a fullstack developer",
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
							removeTodo={removeTodo}
						/>
					))
				}

			</Layout>


			<style jsx global>{`
				body,html {
					overflow-x: hidden;
					background-color: #dcd9cd;
					width: 100%;
				}

			`}
			</style>

		</div>

	)
}

export default Todo