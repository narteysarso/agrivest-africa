"use client";

import Link from "next/link";

export const Header = () => {

  return (
    <header className="w-full z-40 sticky top-0 left-0 ">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex">

          <p className="font-semibold">
            <Link href={"/"}>
              Agrivest Africa
            </Link>
          </p>
        </div>

      </div>
    </header>
  );
};