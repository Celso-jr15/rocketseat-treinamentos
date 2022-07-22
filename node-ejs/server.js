const express = require('express');

const app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    const items = [
        { 
            title: "D",
            message: "Algo com D",
        },
        { 
            title: "E",
            message: "Algo com E",
        },
        { 
            title: "M",
            message: "Algo com M",
        },
        { 
            title: "A",
            message: "Algo com A",
        }
    ];
    res.render("pages/index", {
        qualitys: items,
    });
})

app.get("/sobre", function(req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");