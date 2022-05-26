const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/set", (req, res) => {
  const form = req.body;
  console.log(form);
  res.cookie("server", "express").send("Cookie Set");
});
app.post("/setEX", (req, res) => {
  const formLogin = req.body;
  console.log(formLogin);
  res.cookie("server2", "express2", { maxAge: 30000 }).send("Cookie SetEX");
});

// server ---------------------------------------------------
// const PORT = process.env.port || 8080
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
