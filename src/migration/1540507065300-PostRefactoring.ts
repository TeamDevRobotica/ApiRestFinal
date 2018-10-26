import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class PostRefactoring1540507065300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.addColumn("tutores", new TableColumn({
            name: "userappId",
            type: "int"
        }));
        // const foreignKey = new TableForeignKey({
        //     columnNames: ["userapp"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "user_app",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE"
        // });
        // // await queryRunner.query(`ALTER TABLE "tutores" ADD FOREIGN KEY "userapp" REFERENCES "UserApp(id)"`);
        // // await queryRunner.query(`ALTER TABLE "tutores" ADD COLUMN "userId" INT NULL ,
        // //     ADD UNIQUE INDEX "userId_UNIQUE"("userId" ASC) VISIBLE`);
        // await queryRunner.createForeignKey("tutores", foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
