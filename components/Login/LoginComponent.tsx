import React, {useState} from 'react';
import {ATag, Btn, Htag, InputTag, Ptag} from "@/components";
import styles from "./LoginComponent.module.css"
import {LoginComponentProps} from "@/components/Login/LoginComponent.props";
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {IData} from "@/components/Register/RegisterComponent.props";

export const LoginComponent = ({}: LoginComponentProps) => {
    const fetchData = async () => {
        const ans = await fetch("http://10.2.0.64:8000/auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf8"
            },
            body: JSON.stringify(data)
        })
            .then(data => data.json())
            .then(data => {
                localStorage.setItem("JWT token", data.access)
            })
    }
    const router = useRouter()
    const customerLogin = () => {
        localStorage.setItem("Role", "Customer")
        const user = {
            "firstName": "Алексей",
            "lastName": "Жданов",
            "middleName": "Викторович",
            "email": "example@mail.ru",
            "orgName": "Apple",
            "orgType": "ИП",
            "exp": "12",
            "tin": "1234567890",
            "phone": "+79999999999",
            "taxCompliant": true
        }
        localStorage.setItem("Info", JSON.stringify(user))
        router.push("/")
    }

    const [data, setData] = useState<IData>()
    return (
        <div className={cn(styles.wrapper, {})}>
            <Htag className={styles.h} type={"h1"}>Войти в аккаунт</Htag>
            <div className={styles.container}>
                <div className={styles.inputWrapper}>
                    <InputTag appointment={"login"} regType={"emailLogin"} data={data} setData={setData} type={"email"}
                              label={"Введите адрес эл. почты"}/>
                </div>
                <div className={styles.inputWrapper}>
                    <InputTag appointment={"login"} regType={"passwordLogin"} data={data} setData={setData}
                              type={"password"}
                              label={"Введите пароль"}/>
                </div>
                <Btn onClick={fetchData} size={"large"}>Войти</Btn>
                <Btn size={"large"} onClick={customerLogin}>Войти как заказчик</Btn>
                <Btn size={"large"}>Войти как исполнитель</Btn>
            </div>
            <div className={styles.more}>
                <Link className={styles.register} href={"register"}>Регистрация</Link>
                <ATag href={""} size={"large"} target={"_self"}>Забыли пароль?</ATag>
                <Link className={styles.toMain} href={"/"}>На главную</Link>
            </div>
        </div>
    );
};

