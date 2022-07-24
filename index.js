const { DepartmentJs } = require('./routes/departmentClass');
const { EmployeeJs } = require('./routes/employeeClass');
const { RoleJs } = require('./routes/roleClass');

const express = require('express');
const routes = require('./routes');
const inquirer = require('inquirer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = () => { mainMenu() }

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
        const { choices } = answers;
        if (choices === 'View all departments') {
            DepartmentJs.showDepartments();
        }
        if (choices === 'View all roles') {
            RoleJs.showRoles();
        }
        if (choices === 'View all employees') {
            EmployeeJs.EmployeeJsshowEmployees();
        }
        if (choices === 'Add a department') {
            DepartmentJs.addDepartment();
        }
        if (choices === 'Add a role') {
            RoleJs.addRole();
        }
        if (choices === 'Add an employee') {
            EmployeeJs.addEmployee();
        }
        if (choices === 'Update an employee role') {
            EmployeeJs.updateRole();
        }
        if (choices === 'Update an employee manager') {
            EmployeeJs.updateManager();
        }
        if (choices === "View employees by manager") {
            EmployeeJs.managerEmployees();
        }
        if (choices === "View employees by department") {
            EmployeeJs.departmentEmployees();
        }
        if (choices === 'Delete a department') {
            DepartmentJs.deleteDepartment();
        }
        if (choices === 'Delete a role') {
            RoleJs.deleteRole();
        }
        if (choices === 'Delete an employee') {
            EmployeeJs.deleteEmployee();
        }
        if (choices === 'View department budgets') {
            DepartmentJs.viewBudgets();
        }
    })
}

init();

app.listen(PORT, () => console.log('Success!!!'));