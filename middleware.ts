import { NextResponse , NextRequest } from "next/server";

const publicRoutes = ['/login']

const privateRoutes = ['/dashboard']

export default async function middleware(req : NextRequest){

    const isInPublicRoute = publicRoutes.includes(req.nextUrl.pathname)

    const isInPrivateRoute = privateRoutes.includes(req.nextUrl.pathname)

    if(isInPrivateRoute && !req.cookies.has("counter_token")){
        return NextResponse.redirect(new URL("/login" , req.nextUrl))
    }

    if(isInPublicRoute && req.cookies.has("counter_token")){
        return NextResponse.redirect(new URL("/dashboard" , req.nextUrl))
    }

    return NextResponse.next()
}