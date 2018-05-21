const mongoose = require('mongoose');

const reunschema = mongoose.Schema({
    
    
    
    dater :{
        
        type: Date,
        required: true
        
    },
    
        objetr :{
        
        type: String,
        required: true
        
    }
  
});


const reunion = module.exports = mongoose.model('reunion', reunschema);
