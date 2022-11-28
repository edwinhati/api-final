const express = require("express");
const app = express();
const routes = require("./src/Router");

// cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use(routes);


app.listen(4000, () => {
    console.log("RUNNING");
})