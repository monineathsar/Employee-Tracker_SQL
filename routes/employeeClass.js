const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('../db_config/connections.js');


// View all employees
const showEmployees = () => {
    const mysql = `SELECT employees.id,
                            employees.firstName,
                            employees.lastName,
                            roles.title AS role,
                            roles.salary,
                            departments.name AS department,
                            CONCAT (e.firstName, " ", e.lastName) AS manager
                    FROM employees
                            INNER JOIN roles ON roles.id = employees.role_id 
                            INNER JOIN departments ON departments.id = roles.department_id
                            LEFT JOIN employees e ON employees.manager_id = e.id`;

    connection.query(mysql, (err, result) => {
        console.table(('Showing all roles:\n'), result)
    });
}

// ADD an employee
// const addEmployee = () => {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'firstName',
//             message: "What is the employee's first name?"
//         },
//         {
//             type: 'input',
//             name: 'lastName',
//             message: "What is the employee's last name?"
//         }
//     ])
//     .then(answer => {
//         const newEmployee = [answer.firstName, answer.lastName];

//         const roleSql = `SELECT role.id, role.title FROM roles`;

//         connection.query(roleSql, (err, roleResult) => {
//             const roleList = roleResult.map(({ id, title }) => ({ name: title, value: id }));

//             inquirer.prompt([
//                 {
//                     type: 'list',
//                     name: 'title',
//                     message: "What is the employee's role?",
//                     choices: roleList
//                 }
//             ])
//             .then(roleChoices => {
//                 const role = roleChoices.title;
//                 newEmployee.push(role);

//                 const managerSql = `SELECT * FROM employee`;

//                 connection.query(managerSql, (err, managerResults) => {
//                     const managers = managerResults.map(({ id, firstName, lastName }) => ({ name: firstName + ' ' + lastName, value: id }));

//                     inquirer.prompt([
//                         {
//                             type: 'list',
//                             name: 'manager_id',
//                             message: "Who is the employee's manager?",
//                             choices: [ managers,
//                                         'none' ]
//                         }
//                     ])
//                     .then(managerChoices => {
//                         const manager = managerChoices.
//                     });
//                 })
//             })
//         })
//     })
// }

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

module.exports = { showEmployees, updateRole, updateManager, deleteEmployee, managerEmployees, departmentEmployees }
