import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hallo semua");
});

app.post("/", (req, res) => {
  res.send("Hallo semua ini menggunakan metode POST");
});

app.put("/", (req, res) => {
  res.send("Hallo semua ini menggunakan metode PUT");
});

app.delete("/", (req, res) => {
  res.send("Hallo semua ini menggunakan metode DELETE");
});

// mengembalikan json
app.get("/json-response", (req, res) => {
  res.json({
    status: "OK",
    data: { name: "Agus Sutarom", address: "Jl. KH. Agus Salim" },
  });
});

// mengembalikan not found
app.use("*", (req, res) => {
  res.status(404);
  res.send("Halaman tidak ditemukan");
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
