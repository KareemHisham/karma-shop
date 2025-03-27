import { z } from "zod"

const cartSchemaValidation = z.object({
    quantity: z.number().min(1),
})

export { cartSchemaValidation }
