const express = require('express');
const app = express();
const http = require('http');
const port = 5001;

app.get("/getMethod", (req,res) => {
    res.send("This is my get Method");
});

app.post("/postMethod", (req,res) => {
    res.send("This is my post method");
});

app.put("/putMethod", (req,res) => {
    res.send("This is my put method");
});

app.patch("/patchMethod", (req,res) => {
    res.send("This is my patch Method");
})

app.delete("/deleteMethod", (req,res) => {
    res.send("This is my delete Method");
})

app.listen(port, () => {
    console.log(`Listening at: ${port}`);
})