"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  name: string;
  className?: string;
};

const NavbarListItem = ({ href, name, className = "" }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div>
      <Link
        className={"relative inline-block text-black focus:outline-none font14"}
        href={href}
        aria-current="page"
      >
        {name}
      </Link>
    </div>
  );
};

export default NavbarListItem;
