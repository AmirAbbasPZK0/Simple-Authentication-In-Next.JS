"use client"

import { login } from "./action";
import { useActionState } from "react";


const LoginForm = () => {
    
    const [state , loginAction] = useActionState(login , undefined)
    
    return (<>
        <form method="POST" action={loginAction} className="flex w-[500px] p-2 gap-2 rounded-md bg-slate-200 shadow-sm items-center justify-center flex-col">
            <h1 className="text-[40px] text-center text-slate-950">Login</h1>
            <label className="flex flex-col gap-2 w-[100%]" htmlFor="">
                <h3 className="text-black">Email:</h3>
                <input name="email" type="text" className="p-2 text-slate-700 w-[100%] rounded-md border-2 border-slate-300" />
                <p className="text-red-500">{state?.errors?.email}</p>
            </label>
            <label className="flex flex-col gap-2 w-[100%]" htmlFor="">
                <h3 className="text-black">Password:</h3>
                <input name="password" type="text" className="p-2 text-slate-700 w-[100%] rounded-md border-2 border-slate-300" />
                <p className="text-red-500">{state?.errors?.password}</p>
            </label>
            <button className="p-2 w-[100%] rounded-md bg-blue-400 transition text-slate-50 hover:bg-blue-950" type="submit">Submit</button>
        </form>
    </>);
}

export default LoginForm;