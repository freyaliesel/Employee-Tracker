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

view.get("/employees/:param", (req, res) => {
    const orderMethod = req.params.param.toLowerCase()
    db.query(
        `SELECT e.id, CONCAT(e.last_name, ', ', e.first_name) AS Employee, r.title, r.salary, e.manager_id, CONCAT(m.last_name, ', ', m.first_name) AS Manager, d.dept_name FROM employees e JOIN roles r ON e.role_id = r.id JOIN departments d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id ORDER BY ${orderMethod};`, 
        function (err, results) {
            let [code, message] = handleDbResponse(err, results, "get");
            res.status(code).json(message);
        }
    );
});

view.get("/budget", (req, res) => {
    db.query(`SELECT d.dept_name, SUM(r.salary) AS budget FROM departments d JOIN roles r ON r.department_id = d.id JOIN employees e ON e.role_id = r.id GROUP BY d.id`, function (err, results) {
        let [code, message] = handleDbResponse(err, results, "get");
        res.status(code).json(message);
    });
});


module.exports = view;
