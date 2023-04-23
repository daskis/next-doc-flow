import React from 'react';
import {PtagProps} from "@/components/Ptag/Ptag.props";
import cn from "classnames"
import styles from "./Ptag.module.css"
export const Ptag = ({size, children, className, ...props} :PtagProps) : JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.small] : size === "small",
            [styles.medium] : size === "medium",
            [styles.large] : size === "large",
        })}
             {...props}
        >
            {children}
        </p>
    );
};

export default Ptag;