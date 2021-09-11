const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

//app.get ("/", (req, res)=>{ res.send("hola mundo!")});
app.get('', (req, res) => {res.sendFile(path.resolve("./views/home.html"))
    
});

app.listen(PORT, () => {
    console.log('App listening on port http://localhost:3000/');
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/registro.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

