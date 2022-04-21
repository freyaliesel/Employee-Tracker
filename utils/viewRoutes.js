const db = require("./db");


function getDepartments() {
    return db.promise()
        .query("SELECT * FROM departments")
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

module.exports = {
    getDepartments,
    // getRoles,
    // getEmployees,
    // getBudget,
};
