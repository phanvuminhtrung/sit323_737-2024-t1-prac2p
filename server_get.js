// Import the express module
const express= require("express");

// Create an instance of express
const app= express();

// Define a function to add two numbers
const addTwoNumber= (n1,n2) => {
    return n1+n2;
}

// Define a route to add two numbers, the numbers are passed as query parameters
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    // Send the result as a JSON response
    res.json({statuscocde:200, data: result }); 
});

// Define a route for the root path
app.get("/", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
    // Set the content type of the response to HTML
    res.set('Content-Type', 'text/html');
    // Send the HTML as a response
    res.send(Buffer.from(n1));     
})

// Log the result of adding 19 and 12
console.log (addTwoNumber(19,12));

// Set the port to 3040
const port=3040;

// Start the server listening on the specified port
app.listen(port,()=> {
    // Log a message to the console when the server starts listening
    console.log("hello i'm listening to port "+port);
})