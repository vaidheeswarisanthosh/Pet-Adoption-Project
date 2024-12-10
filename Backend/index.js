const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');

        // listen for requests
        app.listen(3006, () => {
            console.log(`Server is running on port`);
        });
    })
    .catch((error) => {
        console.log('Connection failed!');
        console.log(error);
    })
