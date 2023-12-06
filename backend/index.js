// import express library
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// import routes
const routes = require('./routes');

const port = 8000;
const dbUrl = "mongodb+srv://profsainhm:24434salah@cluster0.hgibgln.mongodb.net/gmcdatabase?retryWrites=true&w=majority"

// connect to database
mongoose
    .connect(dbUrl, { useNewUrlParser: true })
    .then(() => {
        console.log("Database connected");

        // create express app
        const app = express();

        // add middleware
        app.use(cors());
        app.use(express.json());
        // use routes
        app.use('/api', routes);


        // listen to port
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    });