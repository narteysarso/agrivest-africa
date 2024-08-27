import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserLoginForm } from "../component/user-login-form"
import AppConfig from '@/app.config'
import Authfooter from '../component/auth-footer'

export const metadata: Metadata = {
  title: "Authentication",
  description: "Sign In"
}

export default function AuthenticationPage() {
  return (
    <>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to login
            </p>
          </div>
          <UserLoginForm />
          <Authfooter />
        </div>
      </div>

    </>
  )
}