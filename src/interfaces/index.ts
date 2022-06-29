import { Client, FormOfService, Professional, Time } from "../entities";

export interface ISchedule {
  id: string,
	day: Date,
	formOfService: FormOfService,
	time: Time,
	professional: Partial<Professional>,
	client: Partial<Client>
}

