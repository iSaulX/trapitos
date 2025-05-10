import { DataSource } from "typeorm"; 
import { User } from "./entites/user";
import { Customer } from "./entites/customer";

const Database = new DataSource({
    type: "sqlite", 
    database: "trapitos.db",
    synchronize: true,
    logging: false,
    entities: [User, Customer],
}); 
Database.initialize()
    .then(() => {
        console.log("Database initialized");
    })
    .catch((err) => {
        console.error("Error initializing database", err);
    });
export default Database; 