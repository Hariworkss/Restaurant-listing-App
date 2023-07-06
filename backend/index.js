// import json server
const jsonserver = require('json-server');

// create a new server
const server = jsonserver.create()

// setup path for db.json file
const router = jsonserver.router('db.json')

// return a middleware used by json server
const middleware = jsonserver.defaults()

// setup port
const port  = process.env.PORT || 3001

// use in server
server.use(middleware)
server.use(router)

// to run port
server.listen(port,()=>{
    console.log('listening to port 3001')
})

