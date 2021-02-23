const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())


app.get('/', (req, res) => {
	console.log('server hit')	
	res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})