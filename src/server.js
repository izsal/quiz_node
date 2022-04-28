const express = require('express')
const app = express()
const mysql_connector = require('mysql')
const routes = require('./routes') // includes the routes.js file
const cors = require('cors') // includes cors module
const connection = mysql_connector.createConnection({
    host : 'localhost',
    user : 'root',
    password  :'root',
    database : 'test'
  });


app.use(cors()) // We're telling express to use CORS
app.use(express.json()) // we need to tell server to use json as well
app.use(routes) // tells the server to use the routes in routes.js

app.get('/allUsers', (req, res) => {
    connection.connect();
    connection.query("select * from user", function(error, results){
      console.log("query response is ", results);
      res.json(results);
    })
    connection.end();
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})