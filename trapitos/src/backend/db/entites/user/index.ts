import "reflect-metadata"; 

import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("users")
export class User {
    @PrimaryColumn()
    public username: string; 

    @Column()
    public password: string; 

    constructor(username: string, password: string) {
        this.username = username; 
        this.password = password; 
    }
}