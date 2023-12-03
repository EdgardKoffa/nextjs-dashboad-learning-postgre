import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from 'next-auth/providers/credentials';
import { z } from "zod";
import { User } from "@/types";
import { sql } from "@vercel/postgres";
import bcrypt from 'bcrypt'


async function getUser(email:string):Promise<User|undefined>{
    try {
        const user=await sql<User>`SELECT * FROM users WHERE email=${email}`
        return user.rows[0]
    } catch (error) {
        console.log("Fail to fetch user",error)
        throw new Error("Fail to fetch user by the given credentils")
    }
}
export const {auth,signIn,signOut}=NextAuth({
    ...authConfig,
    providers:[Credentials({
        async authorize(credentials){
            const parsedCredentials=z.object({email:z.string().email("Incorrect email format"),
            password:z.string().min(6,{message:"Password must have more than 6 caracters"})
            }).safeParse(credentials)

            if(parsedCredentials.success){
                const {email,password}=parsedCredentials.data

                const user=await getUser(email)

                if(!user) return null

               const matchPwd=bcrypt.compareSync(password,user.password)
                if(matchPwd) return user
            }
            return null
        }
    })]
})