import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("customers")
export class Customer {
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column()
    public name: string; 

    @Column({type: "text"})
    public direction: string; 

    @Column()
    public phone: string; 

    constructor(name: string, direction: string, phone: string) {
        this.name = name; 
        this.direction = direction; 
        this.phone = phone; 
    }
}