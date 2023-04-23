import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, LinkHTMLAttributes, ReactNode} from "react";

export interface NavLinkProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    href: string,
    children: ReactNode,
    isActive: boolean
}