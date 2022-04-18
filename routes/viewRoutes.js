const db = require("../utils/db");
const view = require("express").Router();
const { handleDbResponse } = require("../utils/utilfunctions");

view.get("/depts", (req, res) => {
    db.query("SELECT * FROM departments", function (err, results) {
        res.status(code).json(message);
    });
});

view.get("/roles", (req, res) => {
    db.query(
        `SELECT roles.id, title, salary, departments.dept_name FROM roles JOIN departments ON department_id = departments.id;`,
        function (err, results) {
            let [code, message] = handleDbResponse(err, results, "get");
            res.status(code).json(message);
        }
    );
});

view.get("/employees", (req, res) => {
    db.query(
        `SELECT e.id, CONCAT(e.last_name, ', ', e.first_name) AS Employee, roles.title, roles.salary, e.manager_id, CONCAT(m.last_name, ', ', m.first_name) AS Manager, departments.dept_name FROM employees e JOIN roles ON e.role_id = roles.id JOIN departments ON roles.department_id = departments.id LEFT JOIN employees m ON e.manager_id = m.id ORDER BY e.id;`,
        function (err, results) {
            let [code, message] = handleDbResponse(err, results, "get");
            res.status(code).json(message);
        }
    );
});

module.exports = view;
