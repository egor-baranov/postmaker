import {z} from "zod"
import {ModelSchema} from "./ProductSchema";

export const CartModelSchema = z.object({
    items: z.array(ModelSchema)
})

export type CartModel = z.infer<typeof CartModelSchema>
