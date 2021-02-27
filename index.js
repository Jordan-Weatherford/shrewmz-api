const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
// const https = require('https')
// const fs = require('fs')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
	console.log('server hit')	
	res.send('Hello World!')
})

app.post('/create', (req, res) => {
	console.log('create route!')
	console.log('req.body = ', req.body)
})

// https.createServer({
// 	key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem'),
//     passphrase: 'internet'
// }, app).listen(port)

app.listen(port, () => {
	console.log("Server fired up on port: ", port)
})