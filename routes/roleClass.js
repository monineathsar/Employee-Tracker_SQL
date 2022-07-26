const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('../db_config/connections.js');


// VIEW all roles
const showRoles = () => {
    connection.query(`SELECT * FROM roles;`, (err, result) => {
        console.table(('Showing all positions:\n'), result)
    });
}

// ADD a new role
const addRole = () => {
    
}

// BONUS - DELETE roles
const deleteRole = () => {

}



module.exports = { showRoles, addRole, deleteRole }