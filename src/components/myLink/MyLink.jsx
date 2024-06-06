import React from 'react';
import Link from "next/link";

const MyLink = ({href, className, children}) => {
    return (
        <Link
            href={href}
            className={className}
        >
            {children}
        </Link>
    );
};

export default MyLink;