"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDatabase1717042874854 = void 0;
class InitDatabase1717042874854 {
    constructor() {
        this.name = 'InitDatabase1717042874854';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" character varying NOT NULL DEFAULT '', "reference" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "posts"`);
    }
}
exports.InitDatabase1717042874854 = InitDatabase1717042874854;
//# sourceMappingURL=1717042874854-init_database.js.map