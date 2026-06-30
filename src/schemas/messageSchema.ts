import {z} from 'zod'

export const  messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: 'at least 10 chars'})
    .max(300, {message: 'at most 300 chars'})
})