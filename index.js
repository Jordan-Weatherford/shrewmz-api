const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
const https = require('https')
const fs = require('fs')

app.use(cors())


app.get('/', (req, res) => {
	console.log('server hit')	
	res.send('Hello World!')
})

// https.createServer({
// 	key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem'),
//     passphrase: 'internet'
// }, app).listen(port)

app.listen(port, () => {
	console.log("I hear you and I see you. I'm listening.")
})