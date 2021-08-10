-- AlterTable
CREATE SEQUENCE "slot_id_seq";
ALTER TABLE "Slot" ALTER COLUMN "id" SET DEFAULT nextval('slot_id_seq');
ALTER SEQUENCE "slot_id_seq" OWNED BY "Slot"."id";
