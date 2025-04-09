import { z } from "zod"

const cartSchemaValidation = z.object({
    quantity: z.number().min(1),
})

const loginSchemaValidation = z.object({
    email: z.string().email().min(5),
    password: z.string().min(4, { message: "Password must contain at least 4 character(s)" }),
})

const registerSchemaValidation = z.object({
    fullname: z.string().min(1, { message: "Name is required" }),
    email: z.string().email().min(5),
    password: z.object({
        password: z.string(),
        confirm: z.string(),
    })
        .refine((data) => data.password === data.confirm, {
            message: "Passwords don't match",
            path: ["confirm"], // path of error
        }),
    phone: z.string().pipe(z.coerce.number({ message: "Please enter numbers only" }).min(5, { message: "Phone number must contain at least 4 character(s)" })),
    address: z.string().min(1, { message: "Address is required" }),
})

const checkoutSchemaValidation = z.object({
    fullname: z.string().min(1, { message: "Fullname is required" }),
    email: z.string().email().min(5),
    address: z.string().min(5, { message: "Address must contain at least 5 character(s)" }),
    city: z.string().min(5, { message: "City must contain at least 5 character(s)" }),
    mark: z.string().min(5, { message: "Mark must contain at least 5 character(s)" }),
    phone: z.string().pipe(z.coerce.number({ message: "Please enter numbers only" }).min(5, { message: "Phone number must contain at least 4 character(s)" })),
})

export { cartSchemaValidation, loginSchemaValidation, registerSchemaValidation, checkoutSchemaValidation }
