

export default (props) => (
	<div>
		<header>
			<h2> You no longer lose track of tasks </h2>
			<h4> Keep all your tasks in one place </h4>
		</header><hr />
		<section>
			{ props.children }
		</section>
		<style jsx>{`
			
			header {
				color: #32CD32;
				font-size: 23px;
				text-align: center;
				height: 6rem;
				margin-bottom: 3rem;

			}

			section{
				text-align: center;
			}

		`}

		</style>
	</div>
	
)