const express = require('express');
require('dotenv').config;
const app = express();



app.listen(PORT, ()=>{
    console.log(`Successfully connected to ${PORT}`);
});