import { useState } from 'react'
import TodoTasks from './TodoTasks'


export default ({addTodo}) => {

	const [ value, setValue ] = useState("")

	const SubmitTodo = e => {
		e.preventDefault()
		if(!value || value == " ") return false
			const text = `${value.charAt(0).toUpperCase()}${value.substring(1).toLowerCase() }`
		addTodo(text)
		setValue("")
	}

	return (
		<div className="form-input">

			<form onSubmit={ SubmitTodo } >

				<div>

					<input 
						type="text"
						value={value}
						onChange={e => setValue( e.target.value )}
						placeholder="Enter Task"
					/>
					<div>
						<input type="submit" value="ADD" />
					</div>
				</div>
				
			</form>


			<style jsx>{`
				.form-input {
					width: 30rem;
					margin: 2rem auto;
				}
				input[type='text'] {
					width: 20rem;
					height: 2.5rem;
					border-radius: 0.7rem;
					margin-bottom: 0.5rem;
					font-size: 1rem;
					font-weight: bold;
				}

				input[type='submit'] {
					width: 6rem;
					height: 2.3rem;
					color: green;
					font-size: 1.5rem;
					font-weight: bold;
					padding: 0.07rem;
					border: none;
					border-radius: 0.5rem;
					cursor: pointer;
				}
			`}
			</style>

		</div>
	)

}