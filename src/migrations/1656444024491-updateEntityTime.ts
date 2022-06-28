import { MigrationInterface, QueryRunner } from "typeorm";

export class updateEntityTime1656444024491 implements MigrationInterface {
    name = 'updateEntityTime1656444024491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "times" RENAME COLUMN "name" TO "duration"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "times" RENAME COLUMN "duration" TO "name"`);
    }

}
