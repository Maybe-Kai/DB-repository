const express = require("express");
const app = express();

app.use(express.json());

// SUCCESS ROUTE
app.get("/success", (req, res) => {
    res.json({
        success: true,
        message: "This route works fine"
    });
});

// ERROR ROUTE
app.get("/error", (req, res, next) => {
    const err = new Error("This is a forced error");
    next(err);
});

// 404 HANDLER
app.use((req, res, next) => {
    const err = new Error("Route Not Found");
    err.status = 404;
    next(err);
});

// GLOBAL ERROR MIDDLEWARE
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Something went wrong"
    });
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});