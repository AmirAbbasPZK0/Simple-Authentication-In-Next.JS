'use server';

import {z} from 'zod'
import { generateToken, setCookie } from '../_libs/session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const user = z.object({
    email : z.string().email(),
    password : z.string().min(6)
})

const testUser = {
    email : "test@gmail.com",
    password : "12345678"
}

export async function login(prevState : any , formData : FormData){
    
    const result = user.safeParse(Object.fromEntries(formData))

    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    if(result.data.email !== testUser.email || result.data.password !== testUser.password){
        return {
            errors: {
                email: ["Invalid email or password"],
            }
        }
    }

    // console.log(result.data)

    const token = generateToken({email : result.data.email});

    console.log(token)

    await setCookie(token)
    
    redirect("/dashboard")

}
