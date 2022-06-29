import { MigrationInterface, QueryRunner } from "typeorm"

export class populateDB1656460449880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`INSERT INTO "formOfServices" ("name") VALUES ('WhatsApp'), ('Ao Vivo'), ('Vídeo Gravado')`);
      await queryRunner.query(`INSERT INTO "times" (duration) VALUES ('08:30 - 09:00'), ('09:00 - 09:30'), ('09:30 - 10:00'), ('10:00 - 10:30'), ('10:30 - 11:00'), ('11:00 - 11:30'), ('11:30 - 12:00'), ('14:00 - 14:30'), ('14:30 - 15:00'), ('15:00 - 15:30'), ('15:30 - 16:00'), ('16:00 - 16:30'), ('16:30 - 17:00'), ('17:00 - 17:30'), ('17:30 - 18:00')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DELETE FROM "formOfServices" WHERE "name" IN ('WhatsApp', 'Ao Vivo', 'Vídeo Gravado')`)
      await queryRunner.query(`DELETE FROM "times" WHERE "duration" IN ('08:30 - 09:00', '09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00')`)
    }

}
