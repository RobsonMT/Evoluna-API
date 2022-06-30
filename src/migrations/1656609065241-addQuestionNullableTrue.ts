import { MigrationInterface, QueryRunner } from "typeorm";

export class addQuestionNullableTrue1656609065241 implements MigrationInterface {
    name = 'addQuestionNullableTrue1656609065241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "question" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "question" SET NOT NULL`);
    }

}
