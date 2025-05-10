import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("purchases")
export class Purchase {
    @PrimaryGeneratedColumn()
    public id: number; 

    @Column()
    public customer_id: number; 

    @Column()
    public item_id: number; 

    constructor(customer_id: number, item_id: number) {
        this.customer_id = customer_id; 
        this.item_id = item_id; 
    }
}