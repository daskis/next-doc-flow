import React from 'react';
import {InputTagProps} from "@/components/InputTag/InputTag.props";
import styles from "./InputTag.module.css"
import cn from "classnames"
import {IData} from "@/components/Register/RegisterComponent.props";
import InputMask from "react-input-mask-next";
// /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
export const InputTag = ({data, setData, regType, name, appointment, mask, type, label, className, ...props} : InputTagProps) : JSX.Element => {
    const setHandler = (e:React.FormEvent<HTMLInputElement>, regType:string) => {
        switch (regType) {
            case "firstName":
                if (setData) {
                    setData((data) => {
                        data.first_name = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "lastName":
                if (setData) {
                    setData((data) => {
                        data.last_name = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "middleName":
                if (setData) {
                    setData((data) => {
                        data.middle_name = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "companyName":
                if (setData) {
                    setData((data) => {
                        data.org_name = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "email":
                if (setData) {
                    setData((data) => {
                        data.email = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "exp":
                if (setData) {
                    setData((data) => {
                        data.exp = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "tin":
                if (setData) {
                    setData((data) => {
                        data.tin = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "password":
                if (setData) {
                    setData((data) => {
                        data.password = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
            case "confirmPassword":
                if (setData) {
                    setData((data) => {
                        data.password2 = e.currentTarget?.value;
                        return data;
                    })
                }
                console.log(data)
                return
        }
    }
    //@ts-ignore
    const changeHandlerLogin = (e:React.FormEvent<HTMLInputElement>, type) => {
        switch (regType) {
            case "emailLogin":
                if (setData) {
                    setData((prev) => {
                        prev.email = e.currentTarget.value
                        return prev
                    })
                }
                console.log(data)
                return
            case "passwordLogin":
                if (setData) {
                    setData((prev) => {
                        prev.password = e.currentTarget.value
                        return prev
                    })
                }
                console.log(data)
                return
        }
    }
    switch (appointment) {
        case "registration":
            return (
                <div className={styles.container}>
                    <InputMask mask={mask} onChange={(e:React.FormEvent<HTMLInputElement>) => setHandler(e, regType)} className={styles.input}/>
                    <label className={styles.label}>{label}</label>
                </div>
            );
        case "login":
            return (
                <div className={styles.container}>
                    <InputMask mask={mask} onChange={(e:React.FormEvent<HTMLInputElement>) => changeHandlerLogin(e, regType)} className={styles.input}/>
                    <label className={styles.label}>{label}</label>
                </div>
            );
        default:
            return (
                <div className={styles.container}>
                        <input name={name} onChange={(e:React.FormEvent<HTMLInputElement>) => setHandler(e, regType)} className={styles.input} type={type} placeholder=""/>
                    <label className={styles.label}>{label}</label>
                </div>
            );
    }
};

export default InputTag;