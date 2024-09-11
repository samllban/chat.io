import express from "express";

const app = express();

const port = 3333;

app.listen(3333, () => 
    console.log(`server is running on port <http://localhost${port}`)
)
