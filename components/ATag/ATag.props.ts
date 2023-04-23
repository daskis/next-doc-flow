import {DetailedHTMLProps, LinkHTMLAttributes} from "react";

export interface ATagProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    href: string,
    size: string,
    target: string
}