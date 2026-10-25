// const express = require("express");
// const app = express();
// console.dir(app);

// let port = 3000;
// app.listen(port, () => {
//     console.log(`Server is trash on port ${port}`);
// });

// // app.use((req, res) => {
// //     console.log(req);
// //     // res.send("Hey are you there man?");
// //     res.send("hey you");
// //     console.log("Request received");
// // });

// app.get("/:username", (req, res) => {
//     console.log(req.params);
//     res.send("Yoo root");
// });
// // app.get("/lmao", (req, res) => {
// //     res.send("Yoo lmao");
// // });
// // app.get("/sad", (req, res) => {
// //     res.send("Yoo sad");
// // });

// // app.get("*", (req, res) => {
// //     res.send("Yooo sob");
// // })


// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     let html = `<h1>Hey ${username} with id ${id}</h1>`;
//     res.send(html);
// });

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     console.log("no result");

// });


const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//     let diceVal = Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", { diceVal });
// });

app.get("/",  (req, res) => {
    res.render("home.ejs");
})

app.get(["/ig/:username", "/:username"], (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data){
         res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }

});

// app.get("/rolldice", (req, res) => {
//     let diceVal = Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", { diceVal });
// });     

// app.get("/:username", (req, res) => {
//     let { username } = req.params;
//     const instaData = require("./data.json");
//     const data = instaData[username];
// });


app.listen(port, () => {
    console.log(`Server is listening on the ${port}`);
});
