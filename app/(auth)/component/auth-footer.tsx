import AppConfig from '@/app.config'
import Link from 'next/link'
import React from 'react'

function Authfooter() {
    return (
        <>
            <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                    href={AppConfig.routes.pages.termsandservices}
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href={AppConfig.routes.pages.privacy}
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        </>
    )
}

export default Authfooter