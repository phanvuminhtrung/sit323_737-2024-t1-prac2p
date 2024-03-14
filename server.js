// Import the express module
var express = require("express")

// Create an instance of express
var app = express()

// Set the port to the environment variable 'port' if it exists, otherwise use 3000
var port = process.env.port || 3000;

// Start the server listening on the specified port
app.listen(port,()=>{
  // Log a message to the console when the server starts listening
  console.log("App listening to: "+port)
})