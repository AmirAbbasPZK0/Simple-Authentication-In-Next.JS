import { cookies } from "next/headers";

export async function POST(req : Request){
    const {token} = await req.json();

    (await cookies()).set("counter_token" , token , {
        httpOnly : true,
        expires : 60 * 60 * 24,
        
    })

}