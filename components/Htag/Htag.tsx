import React from 'react';
import {HtagProps} from "@/components/Htag/Htag.props";
import styles from "./Htag.module.css"
import cn from "classnames"

export const Htag = ({type, children, className, ...props}: HtagProps) : JSX.Element => {
    switch (type) {
        case "h1":
            return <h1 className={cn(styles.h, className, styles.h1)} {...props}>{children}</h1>
        case "h2":
            return <h2 className={cn(styles.h, className, styles.h2)} {...props}>{children}</h2>
        case "h3":
            return <h3 className={cn(styles.h, className, styles.h3)} {...props}>{children}</h3>
        case "h4":
            return <h4 className={cn(styles.h, className, styles.h4)} {...props}>{children}</h4>
        default:
            return <h1 className={cn(styles.h, className, styles.h1)} {...props}>{children}</h1>
    }
};

