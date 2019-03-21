import { useState } from 'react'
import TodoTasks from './TodoTasks'


export default ({addTodo}) => {

	const [ value, setValue ] = useState("")

	const SubmitTodo = e => {
		e.preventDefault()
		if(!value) return false

		addTodo(value)
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

					<input type="submit" value="Add" />

				</div>
				
			</form>


			<style jsx>{`
				.form-input {
					text-align: center
				}
			`}
			</style>

		</div>
	)

}