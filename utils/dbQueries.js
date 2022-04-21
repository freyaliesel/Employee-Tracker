const db = require("./db");

// VIEW QUERIES
function getDepartments() {
    return db.promise().query("SELECT * FROM departments");
}

// function getRoles() {
//     db.promise().query(
//         `SELECT roles.id, title, salary, departments.dept_name FROM roles JOIN departments ON department_id = departments.id;`,
//         (err, results) => handleDbResponse(err, results)
//     );
// }

// function getEmployees(orderMethod) {
//     db.promise.query(
//         `SELECT e.id, CONCAT(e.last_name, ', ', e.first_name) AS Employee, r.title, r.salary, e.manager_id, CONCAT(m.last_name, ', ', m.first_name) AS Manager, d.dept_name FROM employees e JOIN roles r ON e.role_id = r.id JOIN departments d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id ORDER BY ${orderMethod};`,
//         (err, results) => handleDbResponse(err, results)
//     );
// }

// function getBudget() {
//     db.promise.query(
//         `SELECT d.dept_name, SUM(r.salary) AS budget FROM departments d JOIN roles r ON r.department_id = d.id JOIN employees e ON e.role_id = r.id GROUP BY d.id`,
//         (err, results) => handleDbResponse(err, results)
//     );
// }

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
            `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?`,
            title,
            salary,
            deptId
        );
}

function addEmployee(firstName, lastName, roleId, managerId) {
    return db
        .promise()
        .query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)`,
            firstName,
            lastName,
            roleId,
            managerId
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
    // getRoles,
    // getEmployees,
    // getBudget,
    addDepartment,
    addRole,
    addEmployee,
    updateEntry,
    removeEntry
};
