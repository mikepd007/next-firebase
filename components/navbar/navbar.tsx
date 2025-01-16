import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container px-6 md:px-8 py-4">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <Image 
                src="/prompter-white.svg" 
                alt="Prompter Logo" 
                width={150} 
                height={50} 
                className="mr-2"
              />
            </div>
          </Link>
          <div className="hidden md:flex justify-between grow">
            <div>
              <Link href="#1" className={buttonVariants({ variant: "link" })}>
                Integrations
              </Link>
              <Link href="#2" className={buttonVariants({ variant: "link" })}>
                Pricing
              </Link>
              <Link href="#3" className={buttonVariants({ variant: "link" })}>
                Guides
              </Link>
              <Link href="#3" className={buttonVariants({ variant: "link" })}>
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <NavbarUserLinks />
            </div>
          </div>
          <div className="grow md:hidden flex justify-end">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};
