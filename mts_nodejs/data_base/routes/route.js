const express = require('express');
const router = express.Router();


const Employee = require('../models/emp');

router.get('/employees',(req,res,next)=>{
    Employee.find(function(err,emp_data){
        res.json(emp_data);
    })
    
});

router.put('/update/:id', function(req, res) 
{
    Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) 
      {
        res.console("error");
      }
      else{
        console.log(" this id:"+req.params.id+" have updated");
        res.json(post);
      }
      });
  });

router.post('/save',(req,res)=>{
    let newEmployee = new Employee({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        emp_id:req.body.emp_id
    });

    newEmployee.save((err,Employee)=>{

        if(err)
        {
            res.json({msg: 'failed to add an employee'});
        }
        else{
            res.json({msg: 'employee added successfully'});
        }
    });

});


router.delete('/delete/:id', function(req, res) 
{Employee.findByIdAndRemove(req.params.id, function (err, messgae) {
    if (err) return next(err);
    res.json(messgae);
  });
  });


module.exports = router;