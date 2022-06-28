import { MigrationInterface, QueryRunner } from "typeorm";

export class intialCommit1656407827421 implements MigrationInterface {
    name = 'intialCommit1656407827421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(50) NOT NULL, "email" character varying NOT NULL, "contact" character varying NOT NULL, "cpf" character varying(14) NOT NULL, "birthDate" date NOT NULL, "timeOfBirt" character varying(5) NOT NULL, "question" text NOT NULL, "birthCity" character varying NOT NULL, "lastBirthdayCity" character varying NOT NULL, CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "UQ_31127ebf52553614f13e9debec1" UNIQUE ("contact"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "formOfServices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_1f23c306dae1e1d117d50038a02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "times" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_21a9ce7a877cba720e30089638e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "day" date NOT NULL, "formOfServiceId" uuid, "timeId" uuid, "professionalId" uuid, "clientId" uuid, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professionals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "UQ_abe951107d83dd7866cfc4907b0" UNIQUE ("email"), CONSTRAINT "UQ_961f996b8f1c1f6d67014df0b4b" UNIQUE ("contact"), CONSTRAINT "PK_d7dc8473b49fcd938def2799387" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_8dd8c7ed5fe50d398feee65bfb6" FOREIGN KEY ("formOfServiceId") REFERENCES "formOfServices"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_ffff1ea7d9c36fdb8b346389cc1" FOREIGN KEY ("timeId") REFERENCES "times"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_0cd2e6104498cfadfcebc60e1d3" FOREIGN KEY ("professionalId") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_65ec14014ecbc5cf28d3b2e9a01" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_65ec14014ecbc5cf28d3b2e9a01"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_0cd2e6104498cfadfcebc60e1d3"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_ffff1ea7d9c36fdb8b346389cc1"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_8dd8c7ed5fe50d398feee65bfb6"`);
        await queryRunner.query(`DROP TABLE "professionals"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
        await queryRunner.query(`DROP TABLE "times"`);
        await queryRunner.query(`DROP TABLE "formOfServices"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
