'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Children } from 'react';

const Navlink = ({href,children}) => {

    const pathName = usePathname();

    const isActive = href === pathName;
    return (
        <Link href={href} className={`${isActive ? 'border-b-2 border-b-red-600 text-red-600 font-semibold' : ''}`}>{children}</Link>
    );
};

export default Navlink;