import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitDatabase1717042874854 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
