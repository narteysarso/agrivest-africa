import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { mainNavigationItems } from '@/constants/user-nav';
import MobileNav from './mobile-nav';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

export const Header = async () => {

  const session = await getServerSession(authOptions);

  return (
    <header className="w-full z-40 sticky top-0 left-0 ">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {mainNavigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink href={item.href}>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              View Products
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <Image
            src={process.env.APP_ICON as string}
            width={34}
            height={34}
            alt="logo"
          /><p className="font-semibold">Agrivest Africa</p>
        </div>
        <div className="flex justify-end w-full gap-4">
          {
            session && session.user.role === "admin" ? (
              <>
                <Button>
                  <Link href="/customer" >
                    Get started
                  </Link>
                </Button>
                <Button variant={"outline"}>
                  <Link href="/admin" >
                    Dashboard
                  </Link>
                </Button>
              </>
            ) : session?.user.role === "customer" ? (
              <Button>
                <Link href="/customer" >
                  Get started
                </Link>
              </Button>
            ) : (
              <Button >
                <Link href="/sign-in" >
                  Get started
                </Link>
              </Button>
            )
          }
        </div>
        <MobileNav />
      </div>
    </header>
  );
};