const mongoose = require('mongoose');

const contschema = mongoose.Schema({
    
    
    
    
    first_name :{
        
        type: String,
        required: true
        
    },
    
        last_name :{
        
        type: String,
        required: true
        
    },
            code :{
        
        type: String,
        required: true
        
    },

    
});


const contact = module.exports = mongoose.model('contact', contschema);