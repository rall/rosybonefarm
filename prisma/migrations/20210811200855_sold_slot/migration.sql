-- Constraint: sold_slot

-- ALTER TABLE public."EggsDozen" DROP CONSTRAINT sold_slot;

ALTER TABLE public."EggsDozen"
    ADD CONSTRAINT sold_slot CHECK (sold = true AND "slotName" = ''::text OR sold = false);
