import { z } from "zod"

export const ProductSchema = z.object({
    id: z.string(),
    label: z.string(),
    description: z.string(),
    price: z.number(),
})

export type Product = z.infer<typeof ProductSchema>

export const ModelSchema = z.object({
    product: ProductSchema,
    color: z.string(),
    size: z.string(),
    amount: z.number()
})

export type Model = z.infer<typeof ModelSchema>