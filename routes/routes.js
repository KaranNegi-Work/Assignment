const express = require('express');
const employeeController =require('../controllers/controller');
const router =express.Router();
const {validateForNew , validateForUpdate} = require('../validation/validator');
console.log("Routes file");

//Create new Employee
router.post('/', validateForNew() ,employeeController.createNewEmployee);

//fetch all active employees
router.get('/',employeeController.findActiveEmployees);

//fetch employee data with id
router.get('/:id', employeeController.findByPk);

//delete the employee fom ActiveEmoployees list
router.delete('/:id', employeeController.deleteById)

//update the employee details
router.put('/:id',validateForUpdate() ,employeeController.updateEmployeeData);



module.exports = router;