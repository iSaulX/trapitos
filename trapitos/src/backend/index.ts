import express from "express"; 

const app = express();

export default function startServer(){
    app.listen(3001, () => {
        console.log("Server is running on http://localhost:3001");
    })
}