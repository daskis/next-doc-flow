import {Btn, NavLink} from "@/components";
import styles from "./Navbar.module.css"
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from "next/link";

function Navigation() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("JWT token")) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    const navigation = [
        {id: 1, title: "Мой кабинет", path: "/"},
        {id: 2, title: "Документы", path: "/documents"},
        {id: 3, title: "Тендеры", path: "/tenders"},
        {id: 4, title: "Настройки", path: "/setting"},
    ]
    const router = useRouter()
    if (!router.pathname.includes("auth")) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <div className={styles.links}>
                            {navigation.map(item => {
                                return (
                                    <NavLink key={item.id}
                                             isActive={router.pathname === item.path}
                                             href={item.path}>{item.title}</NavLink>
                                )
                            })}
                            <Link className={styles.newTender} href={"/tenders/new"}>Добавить тендер</Link>

                        </div>
                        {!isAuth ?
                            <div className={styles.auth}>
                                <Btn size={"medium"}>Войти</Btn>
                                <Btn color={"secondary"} size={"medium"}>Регистрация</Btn>
                            </div>
                            : <div>
                                <Link href={"/"}>
                                    <div className={styles.icon}></div>
                                </Link>
                            </div>

                        }
                    </nav>
                </div>
            </div>
        );
    } else {
        return <></>
    }
}

export default Navigation;
