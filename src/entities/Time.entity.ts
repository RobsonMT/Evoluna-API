import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("times")
export class Time {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public duration: string;
}
