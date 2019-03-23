const express = require('express'),
			next = require('next')


const dev = process.env.NODE_ENV !=='production'

const app = next({ dev })

const handler = app.getRequestHandler()

const PORT = 3000

const todo = [
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

	]

app.prepare()
.then(() => {
	const server = express()

	server.get('/api/todo', (req,res) => {
		res.json({
			"data": todo
		})
	})


	server.get('*', (req,res)=>{
		return handler(req,res)
	})

	server.listen(PORT, err => {
			if(err) throw err
			console.log(`App ready at ${PORT}`)
	})

})
.catch(ex => {
	console.error(ex.stack)
	process.exit(1)
})