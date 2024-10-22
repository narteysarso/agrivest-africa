import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { InvestorRole } from '@/types';
import Link from 'next/link';
import AppConfig from '@/app.config';

export const CTA = async () => {

  const session = await getServerSession(authOptions);
  return (
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Try our platform today!
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Our vision is simple: empowered farmers, thriving communities, and sustainable farming for
              a better future.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            {!session &&
              <Button className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            }
            <Link rel='tel' href={`tel:${AppConfig.constants.defaultPhonenumber}`}>
              <Button className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}