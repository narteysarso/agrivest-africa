import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from 'next/link';
import AppConfig from '@/app.config';

export const Hero = () => (
  <div className="w-full py-5 lg:py-10" style={{ "backgroundColor": "#fec921" }}>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              This is the start of something!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4 flex-wrap">
            <Link href={AppConfig.routes.pages.signin}>
              <Button size="lg" className="gap-4" variant="outline">
                Invest now <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={AppConfig.routes.pages.signup}>
              <Button size="lg" className="gap-4">
                Sign up here
                <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square relative background-gradient-orange">
            <Image src={"/images/holder-vegetables.png"} alt={"farmer"} fill className="object-cover" />
          </div>
          <div className="bg-muted rounded-md row-span-2 relative background-gradient-green">
            <Image src={"/images/farmer4.png"} alt={"farmer"} fill className="object-cover" />
          </div>
          <div className="bg-muted rounded-md aspect-square relative">
            <Image src={"/images/farmer6.jpg"} alt={"farmer"} fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
);