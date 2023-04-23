import React from 'react';
import styles from "./NavLink.module.css"
import cn from "classnames"
import Link from "next/link";
import {NavLinkProps} from "./NavLink.props";
export const NavLink = ({href, isActive, children} : NavLinkProps): JSX.Element => {
    return (
        <Link href={href} className={cn(styles.link, {
            [styles.activeLink] : isActive
        })}>{children}</Link>
    );
};

