'use client';

import { NavbarItem } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: Props) => {
  const pathname = usePathname();

  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      {label}
    </NavbarItem>
  );
};

export default NavLink;
