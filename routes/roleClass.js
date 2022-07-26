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
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the new role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?'
        }
    ])
    .then(answer => {
        const newRole = [answer.title, answer.salary];

        const roleSql = `SELECT name, id
                        FROM departments`;

        connection.query(roleSql, (err, deptResult) => {
            const deptList = deptResult.map(({ name, id }) => ({ name: name, value: id }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'deptName',
                    message: 'Which department does this role pertain to?',
                    choices: deptList
                }
            ])
            .then(deptChoice => {
                const deptList = deptChoice.deptList;
                newRole.push(deptList);

                const mysql = `INSERT INTO roles (title, salary, department_id)
                                VALUES (?, ?, ?)`;
                connection.query(mysql, (err, roleResult) => {
                    console.table(('Sucessfully added ' + answer.title + ' to roles:\n'), roleResult)
                });
            });
            
        });
    });
};

// BONUS - DELETE roles
const deleteRole = () => {

}



module.exports = { showRoles, addRole, deleteRole }