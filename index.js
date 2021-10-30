// import { MongoClient } from "mongodb";
// const uri = `mongodb+srv://Arnob:<password>@cluster0.gopne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("insertDB");
//     const practiceCollection = database.collection("practiceCollection");
//   } finally {
//     // await client.close();
//   }
// }
// run().catch(console.dir);
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
const users = [
  { id: 1, name: "arnob" },
  { id: 2, name: "bikash" },
  { id: 3, name: "cittoranjon" },
  { id: 4, name: "dk nath" },
  { id: 5, name: "ela mitra" },
];

app.get("/", (req, res) => {
  res.send("I am learning node");
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) => {
      user.name.includes(search);
    });
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
});
app.get("/users/:key", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.get("/fruits/mangoes", (req, res) => {
  res.send("am e shera");
});
app.listen(port, () => {
  console.log("server running at port :", port);
});
