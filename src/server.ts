import express from "express";

const app = express();

const port = 3333;

app.get("/", (req, res) => {
    return res.json({
        message: "Hello, World!"
    })
})

app.post("/users",(req, res) => {
    return res.json({
        messesge:"usuario salvo com secesso"
    })
})

app.listen(3333, () => 
    console.log(`server is running on port <http://localhost:${port}`)
)
