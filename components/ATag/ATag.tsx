import React from 'react';
import {ATagProps} from "@/components/ATag/ATag.props";
import cn from "classnames";
import styles from "./ATag.module.css"
export const ATag = ({href, size="medium", target, children, className, ...props} : ATagProps) => {
    return (
        <a href={href} target={target} className={cn(styles.a, className, {
            [styles.small] : size === "small",
            [styles.medium] : size === "medium",
            [styles.large] : size === "large",
        })}
        >
            {children}
        </a>
    );
};

