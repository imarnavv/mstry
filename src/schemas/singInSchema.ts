import {z} from 'zod'

export const signInSchema = z.object({
    identifier: z.string().length(6, )
})