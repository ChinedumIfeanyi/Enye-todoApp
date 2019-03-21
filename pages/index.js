import React, { useState } from 'react'
import Layout from './components/Layout'

import FormInput from './components/FormInput'
import TodoTasks from './components/TodoTasks'


function Todo(){

	const [ todos, setTodo ] = useState([
		{
		  text: "Become a fullstack developer",
		},
		{
			text: "Get enrolled for Enye developers program"
		},
		{
		 	text: "Build really cool todo app",
		},
		{
		  text: "Learn React and Next Js",
		}

	])

	const addTodo = text => {
		const newTodo = [{ text }, ...todos ]
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
				
				<section>{ 
					todos.map((todo,index) => (
						//console.log(todo)
						<TodoTasks
							key={index}
							index={index}
							task={todo.text}
							removeTodo={removeTodo}
						/>
					))
				}</section>

			</Layout>


			<style jsx global>{`
				body,html {
					background-color: #dcd9cd;
					width: 99%;
				}

			`}
			</style>

			<style jsx>{`
				section {
					display: flex;
					justify-content: flex-around;
					flex-wrap: wrap;
				}
			`}
			</style>

		</div>

	)
}

export default Todo