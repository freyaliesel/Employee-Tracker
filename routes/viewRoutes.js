const db = require("../utils/db")
const view = require("express").Router();

view.get('/alldept', (req, res) => {
    db.query("SELECT * FROM departments", function (err, results) {
        if(err){
            console.error(err);
            res.status(400).json(`Error in database query`)
        } else {
            console.table(results);
        }
        response = {
            status: 'success',
            data: `Departments relayed from database`
        }
        res.status(200).json(`${req.method} request received`)
    })
})

module.exports = view;