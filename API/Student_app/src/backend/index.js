import express from "express";
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());

app.post("/api/students", (req,res) => {
    const {name ,age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error : "Name and age are required"});
    }
    res.json({mesage: "student created sucessfully" , student : {name , age }});

});

app.listen(5000,() => {
    console.log("server is running on port 5000");
    
});
