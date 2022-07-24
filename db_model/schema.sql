DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
    -- FOREIGN KEY manager_id REFERENCES managers(id)
    ON DELETE SET NULL
);








-- bonus to view employees by manager?

-- CREATE TABLE managers (
--     id INT,
--     firstName VARCHAR(30),
--     lastName VARCHAR(30),
--     departments_id INT,
--     employeesList INT,
--     PRIMARY KEY (id)
--     FOREIGN KEY department_id REFERENCES departments(id)
--     FOREIGN key employeesList REFERENCES employees(id)
-- );