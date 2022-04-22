const db = require("./db");

// VIEW QUERIES
function getDepartments() {
    return db.promise().query("SELECT * FROM departments");
}

function getRoles() {
    return db
        .promise()
        .query(
            `SELECT roles.id, title, salary, departments.dept_name FROM roles JOIN departments ON department_id = departments.id;`
        );
}

function getEmployees() {
    return db
        .promise()
        .query(
            `SELECT e.id, CONCAT(e.last_name, ', ', e.first_name) AS Employee, r.title, r.salary, CONCAT(m.last_name, ', ', m.first_name) AS Manager, d.dept_name FROM employees e JOIN roles r ON e.role_id = r.id JOIN departments d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id ORDER BY e.id;`
        );
}

function getEmployeesByDept() {
    return db.promise().query(`SELECT d.dept_name, CONCAT(e.last_name, ', ', e.first_name) AS Employee, e.id, r.title, r.salary, CONCAT(m.last_name, ', ', m.first_name) AS Manager FROM employees e JOIN roles r ON e.role_id = r.id JOIN departments d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id ORDER BY r.id;`);
}

function getEmployeesByRole() {
    return db.promise().query(`SELECT r.title, CONCAT(e.last_name, ', ', e.first_name) AS Employee, e.id, r.salary, CONCAT(m.last_name, ', ', m.first_name) AS Manager, d.dept_name FROM employees e JOIN roles r ON e.role_id = r.id JOIN departments d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id ORDER BY r.id;`);
}

function getEmployeesByManager() {
    return db
        .promise()
        .query(
            `SELECT CONCAT(m.last_name, ', ', m.first_name) AS Manager, CONCAT(e.last_name, ', ', e.first_name) AS Employee, e.id, r.title, r.salary, d.dept_name FROM employees e JOIN roles r ON e.role_id = r.id JOIN departments d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id ORDER BY m.id;`
        );
}

function getBudget() {
    return db
        .promise()
        .query(
            `SELECT d.dept_name, SUM(r.salary) AS budget FROM departments d JOIN roles r ON r.department_id = d.id JOIN employees e ON e.role_id = r.id GROUP BY d.id`
        );
}

// EDIT QUERIES
function addDepartment(value) {
    return db
        .promise()
        .query(`INSERT INTO departments (dept_name) VALUES (?)`, value);
}

function addRole(title, salary, deptId) {
    return db
        .promise()
        .query(
            `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
            [title,
            salary,
            deptId]
        );
}

function addEmployee(firstName, lastName, roleId, managerId) {
    return db
        .promise()
        .query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
            [firstName,
            lastName,
            roleId,
            managerId]
        );
}

function updateEntry(table, values) {
    let updates = [];
    values.forEach((param, value) => {
        updates.push(`${param} = ${value}`);
    });
    if (updates.length >= 2) {
        updates = updates.join(`, `);
    }
    return db.promise().query(`UPDATE ${table} SET ${updates}`);
}

function removeEntry(table, id) {
    return db.promise().query(`DELETE FROM ? WHERE id = ?`, table, id);
}

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    getEmployeesByDept,
    getEmployeesByRole,
    getEmployeesByManager,
    getBudget,
    addDepartment,
    addRole,
    addEmployee,
    updateEntry,
    removeEntry,
};
