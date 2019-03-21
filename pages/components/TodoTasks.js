import React from 'react'

function TodoTasks({ index, task, removeTodo }) {

	return (
		<div>

			<section >
				<div className="task">
					{task}
					<button onClick={() => removeTodo(index) }> Delete </button>
				</div>

			</section>

			<style jsx>{`
				
				section {
					width: 40rem;
					background-color: #9ACD32;
					border-radius: 1.5rem;
					height: 3rem;
					font-size: 20px;
					padding: 0.2rem;
					margin: 1rem auto;

				}

				.task {
					margin: 0.5rem 2rem;
					font-size: 25px;
					display: flex;
					flex-direction: space-around
				}

				button {
					color: red;
					margin-left: 3rem;
					border: none;
					border-radius: 0.5rem;
					height: 2rem;
					cursor: pointer;
					font-size: 1.5rem;
				}

			`}
			</style>
		</div>
	)

}

export default TodoTasks