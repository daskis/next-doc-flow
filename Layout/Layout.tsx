import React, {Component, FunctionComponent} from 'react';
import {LayoutProps} from "@/Layout/Layout.props";
import Navbar from "@/Layout/Navbar/Navbar";
import styles from "./Layout.module.css"
export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};
