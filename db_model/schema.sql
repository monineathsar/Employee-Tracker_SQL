CREATE TABLE employees (
    id INT,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
    -- FOREIGN KEY manager_id REFERENCES managers(id)
    ON DELETE SET NULL
);

CREATE TABLE roles (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (department_id) REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE departments (
    id INT,
    name VARCHAR(30),
    PRIMARY KEY (id)
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