import AboutUs from '@/components/about-us';
import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonial";
import React from "react";

export default function Home(): React.ReactNode {
    return (
        
        <main className='overflow-x-hidden overflow-y-hidden'>
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
            <section>
                <AboutUs />
            </section>

        </main>
    )
}