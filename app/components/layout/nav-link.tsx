"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/app/types/headerTypes";

type NavLinkProps = {
  item: NavItem;
};

const NavLink = ({ item }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const linkClassName = isActive
    ? "rotate-2 border-l-4 font-normal"
    : "hover:rotate-2 hover:border-l-4 hover:font-normal";

  return (
    <Link className={linkClassName} href={item.href}>
      {item.label}
    </Link>
  );
};

export default NavLink;
