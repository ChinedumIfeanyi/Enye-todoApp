import React, { useState, useEffect } from 'react'
import Layout from './components/Layout'

import FormInput from './components/FormInput'
import TodoTasks from './components/TodoTasks'

import fetch from 'isomorphic-unfetch'

function Todo({ response:{data} }){
	// console.log(props.data)
	const [ todos, setTodo ] = useState([])

	const addTodo = text => {
		const newTodo = [{ text }, ...todos ]
		setTodo(newTodo)
	}

	const removeTodo = index => {
		const newTodo = [ ...todos ]
		newTodo.splice(index, 1)
		setTodo( newTodo )
	}
	
	//update the component state
	useEffect(()=>{
		//console.log(data)
		setTodo(data)
	})

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



Todo.getInitialProps = async function(){

	const result = await fetch('http://localhost:3000/api/todo')
	
	const response = await result.json()

	return {
		response
	}	
	
}

export default Todo