import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonial";
import React from "react";

export default function Home(): React.ReactNode {
    return (
        <main>
            <section>
                <Hero />
            </section>
            <section>
                <CTA />
            </section>
            <section>
                <Pricing />
            </section>
            <section>
                <Testimonials />
            </section>
          
        </main>
    )
}