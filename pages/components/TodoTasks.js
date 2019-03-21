import React from 'react'

function TodoTasks({ index, task, removeTodo }) {

	return (
		<div>
				<section >
					
					<div className="task">
						{task} <br />
						<button onClick={() => removeTodo(index) }> Delete </button>
					</div>
				
				</section>

			<style jsx>{`

				section {
					background-color: #9ACD32;
					height: 10rem;
					width: 20rem;
					font-size: 25px;
					margin: 1rem 1rem;
					border-radius: 1rem;
				}

				.task {
					margin: 1rem 0;
					padding: 0.6rem;
				}

				button {
					color: red;
					margin: 2rem 0;
					postion: fixed;
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