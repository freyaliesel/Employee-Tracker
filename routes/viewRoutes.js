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

module.exports = view;
