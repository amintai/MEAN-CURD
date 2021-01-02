var express = require('express');
var router = express.Router();
var employee = require('./../models/db');


router.post('/create' , (req,res,next) => {
    var newEmployee = new employee({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        Email : req.body.Email,
        Dob : req.body.Dob,
        Bio : req.body.Bio,
    });
    newEmployee.save((err,employee) => {
        if(err) {
            res.status(500).json({ errmsg : err});
        } 
        res.status(200).json({msg :employee});
    });
    
});

router.get('/view' , (req,res,next) => {
   employee.find({} , (err,employies) => {
       if(err) {
           res.status(500).json({errmsg : err});
       } 
       res.status(200).json({ msg : employies });
   })
});

router.put('/update' , (req,res,next) => {
    
    employee.findById(req.body._id , (err , employee) => {
        if(err) {
            res.status(500).json({ errmsg : err });
        } 
        employee.FirstName=req.body.FirstName;
        employee.LastName=req.body.LastName;
        employee.Email=req.body.Email;
        employee.Dob = req.body.Dob;
        employee.Bio = req.body.Bio;
        
        employee.save((err,employee) => {
            if(err){
                res.status(500).json({ errmsg : err });
            }
            res.status(200).json({ msg: employee});
        })
    });
});

router.delete('/delete/:id' , (req,res,next) => {
    employee.findByIdAndRemove({ _id: req.params.id} , (err,employee) => {
        if(err) {
            res.status(500).json({errmsg : err });
        } 
        res.status(200).json({ msg:employee});
    });
});


module.exports = router;
