import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("formOfServices")
export class FormOfService {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;
}
