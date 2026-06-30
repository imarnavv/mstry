import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, 'username must be at least 2 chars')
    .max(20, 'username msut be at most 20 chars')
    .regex(/^[a-zA-Z0-9_]+$/, 'username must not contain special char')

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'invalid email'}),
    password: z.string().min(6, {message: 'must be at least 6 chars'})
})