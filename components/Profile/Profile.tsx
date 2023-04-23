import React, {useEffect, useState} from 'react';
import styles from "./Profile.module.css"
import {ATag, Htag, Ptag} from "@/components";
import Link from "next/link";
import cn from "classnames";
import {IData} from "@/components/Register/RegisterComponent.props";

export interface Iinfo {
    _id: string
    org_name: string
    org_type: string
    tax_compliant: boolean
    exp: number
    first_name: string
    middle_name: string
    last_name: string
    email: string
    phone: string

}

const Profile = () => {

    const [info, setInfo] = useState<IData>()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            setInfo(JSON.parse(localStorage.getItem("Info")))
        }
    }, [])
    return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
              <div className={styles.box}>
                  <Htag type={"h3"}>Данные профиля</Htag>
                  <Link href={"/profile/edit"} >Редактировать данные</Link>
                  <ul className={styles.infos}>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Фамилия</Ptag>
                          <Ptag size={"large"}>{info?.last_name}</Ptag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Адрес эл. почты</Ptag>
                          <ATag href={""} target={"_self"} size={"large"}>{info?.email}</ATag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Имя</Ptag>
                          <Ptag size={"large"}>{info?.first_name}</Ptag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Номер телефона</Ptag>
                          <Ptag size={"large"}>{info?.phone}</Ptag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Отчество</Ptag>
                          <Ptag size={"large"}>{info?.middle_name}</Ptag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>ИНН</Ptag>
                          <Ptag size={"large"}>{info?.tin}</Ptag>
                      </li>
                  </ul>
              </div>
              <div className={cn(styles.box, styles.secondBox)}>
                  <Htag type={"h3"}>Информация о компании</Htag>
                  <ul className={styles.infos}>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Название</Ptag>
                          <Ptag size={"large"}>{info?.org_name}</Ptag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Сайт</Ptag>
                          <ATag href={""} target={"_self"} size={"large"}>example.com</ATag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Стаж работы</Ptag>
                          <Ptag size={"large"}>{info?.exp} лет</Ptag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Тип организации</Ptag>
                          <Ptag size={"large"}>{info?.org_type}</Ptag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Адрес корпоративной почты</Ptag>
                          <ATag href={""} target={"_self"} size={"large"}>example@ex.com</ATag>
                      </li>
                      <li className={styles.info}>
                          <Ptag size={"small"}>Работаем с НДС</Ptag>
                          <Ptag size={"large"}>{info?.tax_compliant ? "Да" : "Нет"}</Ptag>
                      </li>

                  </ul>
              </div>
          </div>
        </div>
    );
};

export default Profile;