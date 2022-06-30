require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")
const contactRoute =require('./route/contactRoute')

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 6000;
app.listen(port, console.log(`listening to port 5000`));