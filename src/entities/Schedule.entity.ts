import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Client } from "./Client.entity";
import { FormOfService } from "./FormOfService.entity";
import { Professional } from "./Professional.entity";
import { Time } from "./Time.entity";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ type: "date" })
  public day: string;

  @ManyToOne(() => FormOfService, { onDelete: "CASCADE" })
  @JoinColumn()
  public formOfService: FormOfService;

  @ManyToOne(() => Time, { onDelete: "CASCADE" })
  @JoinColumn()
  public time: Time;

  @ManyToOne(() => Professional, { onDelete: "CASCADE" })
  @JoinColumn()
  public professional: Professional;

  @ManyToOne(() => Client, { onDelete: "CASCADE" })
  @JoinColumn()
  public client: Client;
}
