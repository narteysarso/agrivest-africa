import { Metadata } from "next"

import LoginForm from '@/components/auth/signin-form'
import Authfooter from '@/components/auth/auth-footer'


export const metadata: Metadata = {
  title: "Agrivest Africa | Sign In",
  description: "Sign In"
}

export default function Page() {
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
          <LoginForm />
          <Authfooter />
        </div>
      </div>

    </>
  )
}