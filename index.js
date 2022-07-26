const { showDepartments, addDepartment, deleteDepartment, viewBudgets } = require('./routes/departmentClass');
const { showEmployees, addEmployee, updateRole, updateManager, deleteEmployee, managerEmployees, departmentEmployees } = require('./routes/employeeClass');
const { showRoles, addRole, deleteRole } = require('./routes/roleClass');

const connection = require('./db_config/connections.js');

const inquirer = require('inquirer');

const init = () => {mainMenu()}

const mainMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Update an employee manager',
                "View employees by manager",
                "View employees by department",
                'Delete a department',
                'Delete a role',
                'Delete an employee',
                'View department budgets']
        }
    ]).then(answers => {
        let { choices } = answers;
        if (choices === 'View all departments') {
            showDepartments();
        }
        if (choices === 'View all roles') {
            showRoles();
        }
        if (choices === 'View all employees') {
            showEmployees();
        }
        if (choices === 'Add a department') {
            addDepartment();
        }
        // if (choices === 'Add a role') {
        //     addRole();
        // }
        // if (choices === 'Add an employee') {
        //     EmployeeJs.addEmployee();
        // }
        // if (choices === 'Update an employee role') {
        //     EmployeeJs.updateRole();
        // }
        // if (choices === 'Update an employee manager') {
        //     EmployeeJs.updateManager();
        // }
        // if (choices === "View employees by manager") {
        //     EmployeeJs.managerEmployees();
        // }
        // if (choices === "View employees by department") {
        //     EmployeeJs.departmentEmployees();
        // }
        if (choices === 'Delete a department') {
            deleteDepartment();
        }
        if (choices === 'Delete a role') {
            deleteRole();
        }
        // if (choices === 'Delete an employee') {
        //     EmployeeJs.deleteEmployee();
        // }
        if (choices === 'View department budgets') {
            viewBudgets();
        }
    });
}


init();