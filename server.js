// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pkg from 'hodor-api';
const { hodor } = pkg;
//import { hodor } from 'hodor-api';

// Create an instance of an express application
const app = express();
app.use(express.json());

// Set the port the application will be running on
const port = process.env.PORT || 3001;

// Get the directory name using fileURLToPath and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

//testing hodor
var response = pkg('Hodor, bring my brother here.');
//console.log(response);


// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public')));

// Serve HTML form to submit data
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Handle POST requests
app.get('/submit', (req, res) => {
  // Send the JSON data as the response
  console.log(response);
  //res.json(req.body);
});

// Set the application to listen on a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});