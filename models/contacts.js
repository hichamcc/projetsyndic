const mongoose = require('mongoose');

const contschema = mongoose.Schema({
    
    
    
    
    name :{
        
        type: String,
        required: true
        
    },
    
        appart :{
        
        type: String,
        required: true
        
    },
    tel :{
        
        type: String,
        required: true
        
    },
    code :{
        
        type: String,
        required: true
        
    },

    
});


const contact = module.exports = mongoose.model('contact', contschema);