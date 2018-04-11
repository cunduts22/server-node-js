const express = require('express')
const bodyparser = require("body-parser")
const SourceMapSupport = require('source-map-support');
const path = require('path')
const router = require('./router.server')
const app = express()



app.use(bodyparser.urlencoded({extended: true}))

app.use(bodyparser.json())

app.use(express.static(path.join(__dirname)))

SourceMapSupport.install()


const PORT = process.env.PORT || 8080;

app.use((res, err, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/', router);

app.use((req, res, next) => {
  res.status(404).send(
    '<h2 align="center">Page Not Found</h2> '
  )
})

app.get('/', (err, res, req) => {
  res.json(
    'connected'
  )
})


app.listen(PORT, () => {
  console.log("You're server in", PORT)
})