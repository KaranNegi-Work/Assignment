const express = require('express');
const employeeController =require('../controllers/controller');
const router =express.Router();
console.log("Routes file");

//Create new Employee
router.post('/',employeeController.createNewEmployee);

//fetch all active employees
router.get('/',employeeController.findActiveEmployees);

//fetch employee data with id
router.get('/:id', employeeController.findByPk);

//delete the employee fom ActiveEmoployees list
router.delete('/:id', employeeController.deleteById)

//update the employee details
router.put('/:id', employeeController.updateEmployeeData);



module.exports = router;