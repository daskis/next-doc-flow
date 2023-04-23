import React from 'react';
import styles from "./EditComponent.module.css";
import {ATag, Btn, Htag, InputTag, Ptag} from "@/components";
import Link from "next/link";

export const EditComponent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <Htag type={"h3"}>Редактирование данных</Htag>
                <Link href={"/"}>Вернуться назад</Link>
            </div>
            <ul className={styles.infos}>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>{info.first_name}</Ptag>*/}
                    <InputTag type={"text"} label={"Вид предпринимательства"} regType={"firstName"} mask={"aaaa"}/>
                </li>
                <li className={styles.info}>
                    {/*<ATag href={""} target={"_self"} size={"large"}>example.com</ATag>*/}
                    <InputTag type={"text"} label={"Сайт"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>{info.org_name}</Ptag>*/}
                    <InputTag type={"text"} label={"Название организации"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>{info.org_type}</Ptag>*/}
                    <InputTag type={"text"} label={"Тип организации"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>{info.last_name} {info.first_name} {info.middle_name}</Ptag>*/}
                    <InputTag type={"text"} label={"Имя руководителя"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>{info.last_name} {info.first_name} {info.middle_name}</Ptag>*/}
                    <InputTag type={"text"} label={"Фамилия руководителя"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>{info.last_name} {info.first_name} {info.middle_name}</Ptag>*/}
                    <InputTag type={"text"} label={"Отчество руководителя"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>{info.phone}</Ptag>*/}
                    <InputTag type={"text"} label={"Номер телефона"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                <li className={styles.info}>
                    {/*<Ptag size={"large"}>1234567890</Ptag>*/}
                    <InputTag type={"text"} label={"ИНН"} regType={"firstName"} mask={"aaaa"}/>

                </li>
                {/*<li className={styles.info}>*/}
                {/*    <Ptag size={"small"}>Работа с НДС</Ptag>*/}
                {/*    /!*<Ptag size={"large"}>{info.tax_compliant ? "Да" : "Нет"}</Ptag>*!/*/}
                {/*    <InputTag type={"text"} label={"Вид предпринимательства"} regType={"firstName"} mask={"aaaa"}/>*/}

                {/*</li>*/}
            </ul>
            <Btn size={"large"}>Сохранить</Btn>
        </div>
    );
};

