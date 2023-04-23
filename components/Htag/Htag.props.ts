import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";



export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    type: string,
    children: ReactNode,
}