import {sign, verify} from 'jsonwebtoken'
import {hash , compare} from 'bcryptjs'
import { cookies } from 'next/headers'

type TokenPayload = {
    email : string
}

export function generateToken(data : TokenPayload){
    const token = sign({...data} , process.env.PRIVATE_KEY as string , {
        expiresIn : "24h"
    })
    return token
}

export async function hashPassword(password : string){
    const hashedPass = await hash(password , 12)
    return hashedPass
}


export async function comparePass(password : string , hashedPass : string){
    const isValid = await compare(password , hashedPass)
    return isValid
}

export function verfyToken(token : string){
    try{
        const tokenPayload = verify(token , process.env.PRIVATE_KEY as string)
        return tokenPayload;
    }catch(err){
        console.log(err)
    }
}

export async function setCookie(token : string){
    (await cookies()).set("counter_token", token , {maxAge : 60 * 60 * 60 * 24 , path : "/" , httpOnly : true});
}