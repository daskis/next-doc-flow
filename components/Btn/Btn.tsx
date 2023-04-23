import React from 'react';
import {BtnProps} from "@/components/Btn/Btn.props";
import styles from "./Btn.module.css"
import cn from "classnames"

export const Btn = ({role, color = "primary", size, className, children, ...props}: BtnProps): JSX.Element => {
    return (
        <button className={cn(styles.btn, className, {
            [styles.small]: size === "small",
            [styles.medium]: size === "medium",
            [styles.large]: size === "large",
            [styles.primary]: color === "primary",
            [styles.secondary]: color === "secondary",
        })}
                {...props}>
            {children}
        </button>
    );
};

export default Btn;