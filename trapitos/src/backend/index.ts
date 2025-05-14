import express from "express"; 
import cors from "cors";
import type { Request, Response } from "express";
const app = express();
const PORT: number = 3000; 
app.use(cors());
app.use(express.json()); 

app.post("/login", (request: Request, response: Response) => {
    const { username, password} = request.body; 

    if (username !== "admin" || password !== "admin") { 
        response.status(401).json({ message: "Invalid credentials" });
        return; 
    }
    response.status(200).json({ message: "Login successful" });
})
export default function startServer(){
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}