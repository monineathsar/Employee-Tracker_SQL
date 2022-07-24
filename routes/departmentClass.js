const mysql = require('mysql2');
const cTable = require('console.table');
const connection = require('../db_config/connections.js');

class DepartmentJs {
    constructor () {
        // VIEW all departments
        showDepartments = () => {
            console.log('Showing all departments:\n');
            connection.query('SELECT * FROM departments', function (err, results) {

            });


        }

        // ADD a new department
        addDepartment = () => {

        }

        // BONUS - DELETE department
        deleteDepartment = () => {

        }

        // BONUS - VIEW department's budget
        viewBudget = () => {

        }
    }
}

module.exports = { DepartmentJs }