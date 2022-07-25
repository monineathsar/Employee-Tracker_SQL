const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('../db_config/connections.js');


// VIEW all departments
const showDepartments = () => {
    connection.query(`SELECT * FROM departments;`, (err, results) => {
        console.table(('Showing all departments:\n'), results)
    });
};

// ADD a new department
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new department?'
        }
    ])
    .then(answer => {
        const mysql = `INSERT INTO departments (name)
                        VALUE (?)`;
        connection.query(mysql, answer.name, (err, result) => {
            console.log('Sucessfully added' + answer.name + ' to departments!');
            showDepartments();
        });
    });
};

// BONUS - DELETE department
const deleteDepartment = () => {
}

// BONUS - VIEW department's budget
const viewBudget = () => {
}




module.exports = { showDepartments, addDepartment, }