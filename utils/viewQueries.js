"use strict";

function viewQueries(res) {
    // switch case for calling which endpoint for viewing
    console.log("view called")
    // console.log(res);
    switch (res.menu) {
        // case value:
        //     break;
        // case value:
        //     break;
        // case value:
        //     break;
        default:
            console.log(`\nViewing logic goes here\n`)
            break;
    }
}

module.exports = viewQueries;