module.exports = class Data1711123802708 {
    name = 'Data1711123802708'

    async up(db) {
        await db.query(`CREATE TABLE "approval" ("id" character varying NOT NULL, "block" integer NOT NULL, "owner" text NOT NULL, "spender" text NOT NULL, "amount" numeric NOT NULL, "tx_hash" text NOT NULL, "timestamp" numeric NOT NULL, CONSTRAINT "PK_97bfd1cd9dff3c1302229da6b5c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_42e545802b86d3ab4c448cad45" ON "approval" ("owner") `)
        await db.query(`CREATE INDEX "IDX_aa8a7b44b0716119b44ebadafa" ON "approval" ("spender") `)
        await db.query(`CREATE INDEX "IDX_3af8e3a4a5be1ab7e7568c4d0e" ON "approval" ("timestamp") `)
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "amount" numeric NOT NULL, "tx_hash" text NOT NULL, "timestamp" numeric NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_be54ea276e0f665ffc38630fc0" ON "transfer" ("from") `)
        await db.query(`CREATE INDEX "IDX_4cbc37e8c3b47ded161f44c24f" ON "transfer" ("to") `)
        await db.query(`CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" ("timestamp") `)
        await db.query(`CREATE TABLE "deposit" ("id" character varying NOT NULL, "depositor" text NOT NULL, "account" text NOT NULL, "amount" numeric NOT NULL, "fee" numeric, "tx_hash" text NOT NULL, "timestamp" numeric NOT NULL, CONSTRAINT "PK_6654b4be449dadfd9d03a324b61" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f3abde1e7f8d7ca5102e376219" ON "deposit" ("account") `)
        await db.query(`CREATE INDEX "IDX_a37222607a86476fa124313c51" ON "deposit" ("timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "approval"`)
        await db.query(`DROP INDEX "public"."IDX_42e545802b86d3ab4c448cad45"`)
        await db.query(`DROP INDEX "public"."IDX_aa8a7b44b0716119b44ebadafa"`)
        await db.query(`DROP INDEX "public"."IDX_3af8e3a4a5be1ab7e7568c4d0e"`)
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_be54ea276e0f665ffc38630fc0"`)
        await db.query(`DROP INDEX "public"."IDX_4cbc37e8c3b47ded161f44c24f"`)
        await db.query(`DROP INDEX "public"."IDX_70ff8b624c3118ac3a4862d22c"`)
        await db.query(`DROP TABLE "deposit"`)
        await db.query(`DROP INDEX "public"."IDX_f3abde1e7f8d7ca5102e376219"`)
        await db.query(`DROP INDEX "public"."IDX_a37222607a86476fa124313c51"`)
    }
}
