const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/googlebooks');

mongoose.connection.once('open', function(){ 
    console.log('DB Connection has been made');
}).on('error', function(error){
 console.log('Connection error:', error)
});