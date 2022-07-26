const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('../db_config/connections.js');


// View all employees
const showEmployees = () => {
    connection.query(`SELECT * FROM employees;`, (err, result) => {
        console.table(('Showing all employees:\n'), result)
    });
}

// ADD an employee
const addEmployee = () => {
    
}

// UPDATE an employee's role
const updateRole = () => {

}

// BONUS - UPDATE employee's manager
const updateManager = () => {

}

// BONUS - DELETE employees
const deleteEmployee = () => {

}

// BONUS - VIEW employees by manager
const managerEmployees = () => {

}

// BONUS - VIEW employees by departments
const departmentEmployees = () => {

}

module.exports = { showEmployees, addEmployee, updateRole, updateManager, deleteEmployee, managerEmployees, departmentEmployees }
