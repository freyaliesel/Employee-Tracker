const express = require("express");
const app = express();
const db = require("./utils/db")

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
