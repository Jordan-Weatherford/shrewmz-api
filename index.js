const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
	console.log('server hit')	
	res.send('Hello World!')
})

app.post('/create', (req, res) => {
	console.log('create route!')
	console.log('req.bodylocation = ', Object.keys(req.body.location))
	console.log('req.body.photos = ', Object.keys(req.body.photos))

	res.json({"success": true})
})


app.listen(port, () => {
	console.log("Server fired up on port: ", port)
})