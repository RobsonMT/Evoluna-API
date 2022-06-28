import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Schedule } from "./Schedule.entity";

@Entity("professionals")
export class Professional {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public contact: string;

  @OneToMany(() => Schedule, (schedules) => schedules.professional)
  public schedules: Schedule[];
}
