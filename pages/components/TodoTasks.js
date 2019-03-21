import React from 'react'

function TodoTasks({ index, task, isCompleted, removeTodo }) {

	return (
		<div>

			<section >
				{task}
				<span>
					{isCompleted} 
				</span>
				<button onClick={() => removeTodo(index) }> Delete </button>
			</section>

			<style jsx>{`
				
			`}
			</style>
		</div>
	)

}

export default TodoTasks