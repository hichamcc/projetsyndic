const express = require('express');
const router = express.Router();

const contact = require('../models/contacts');
const reunion = require('../models/reunions');

// router.use('/',express.static('app',{redirect:false}));
//router.get('*',function(req,res,next){res.sendFile(path.resolve('app/index.html'))};

router.get('/contacts',(req, res, next)=>{
   
    contact.find(function(err,contacts){
        res.json(contacts);
    })
    
});



/* module.exports = function(app, db, contact) {
    app.post('/contacts', function(req,res){    
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.number = req.body.number;

        contact.save(function(err, data){
          res.json(data);
        });
    });
};  */ 


router.post('/contact',(req, res, next)=>{
    let newContact = new contact({
        name: req.body.name,
        appart: req.body.appart, 
        tel: req.body.tel,
        code: req.body.code
        
    });
    
    newContact.save((err, contact)=>{ 
    
    if(err)
        {
            res.json({msg: 'failed to add'});
          
        }
      else{

          res.json({msg: 'contact added successfully'});
          console.log('contact added successfully');
      }
        
    });
    
});



router.delete('/contact/:id',(req,res,next)=>{
   contact.remove({_id: req.params.id},function(err,result){
       if(err){
           res.json(err);
       } 
        else{
            res.json(result);
            
        }
    });
});
/*router.delete('/contact/:id', function(req, res, next) {
    Contact.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });*/

  /************************************************************** */
  router.get('/reunions',(req, res, next)=>{
   
   reunion.find(function(err,reunions){
        res.json(reunions);
    })
    
});
  router.post('/reunion', (req, res, next) => {
    let newReunion = new reunion({
        dater: req.body.dater,
        objetr: req.body.objetr,
       
    });
    newReunion.save((err, reunion)=>{ 
    
        if(err)
            {
                res.json({msg: 'failed to add'});
              
            }
          else{
    
              res.json({msg: 'reunion added successfully'});
              console.log('reunion added successfully');
          }
            
        });
        
    });
    router.delete('/reunion/:id',(req,res,next)=>{
        reunion.remove({_id: req.params.id},function(err,result){
            if(err){
                res.json(err);
            } 
             else{
                 res.json(result);
                 
             }
         });
     });
module.exports = router ; 