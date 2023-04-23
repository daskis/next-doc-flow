import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: {
        _id: string
        title: string
        desc: string
        city: string
        created: string
        spec_links: Array<string>
    },
    appointment?: string
}