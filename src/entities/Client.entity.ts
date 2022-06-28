import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column("varchar", { length: 50 })
  public fullName: string;

  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public contact: string;

  @Column({ unique: true })
  public cpf: string;

  @Column({ type: "date" })
  public birthDate: Date;

  @Column()
  public timeOfBirth: string;

  @Column({ type: "text" })
  public question: string;

  @Column()
  public birthCity: string;

  @Column()
  public lastBirthdayCity: string;
}
