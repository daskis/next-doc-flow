import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface BtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    role?: string;
    children: ReactNode;
    color?: string;
    size: string;
}