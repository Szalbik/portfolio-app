"use client"

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink href="/" onOpenChange={setOpen} className="flex items-center">
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink href="/blog" onOpenChange={setOpen}>
            Blog
          </MobileLink>
          <MobileLink href="/about" onOpenChange={setOpen}>
            About
          </MobileLink>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github} className="flex items-center gap-2">
            <Icons.gitHub className="w-4 h-4" />
            Github
          </Link>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.linkedin} className="flex items-center gap-2">
            <Icons.linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({ href, children, className, onOpenChange, ...props }: MobileLinkProps) {
  const routes = useRouter()
  return (
    <Link 
      href={href} 
      className={className}
      onClick={() => {
        routes.push(href.toString())
        onOpenChange?.(false)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
