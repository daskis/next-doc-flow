import React, {useEffect, useState} from 'react';
import styles from "./CardItem.module.css"
import cn from "classnames"
import {Btn, Htag, Ptag} from "@/components";
import {CardItemProps} from "@/components/CardItem/CardItem.props";
import Link from "next/link";

export const CardItem = ({data, appointment="tenders"} : CardItemProps): JSX.Element => {
    const [tenderData, setTenderData] = useState()

    useEffect(()=> {
        // @ts-ignore
        setTenderData(data)
    },[])
    // @ts-ignore
    return (
        <div className={styles.card}>
            <div className={styles.text}>
                <Htag type={"h3"}>{data.title}</Htag>
                <Ptag size={"small"}>Населенный пункт: г. {data.city}</Ptag>
                <Ptag size={"medium"}>{data.desc}</Ptag>
                <Ptag size={"small"}>Дата открытия: {data.created}</Ptag>
            </div>
            {appointment === "tenders" ?
                <div className={styles.buttons}>
                    <Btn className={styles.btn} size={"medium"}>Просмотр откликов</Btn>
                    <Link href={`/tenders/${data._id}`} className={styles.btn}>Подробнее</Link>
                </div>
            :
                <div className={styles.buttons}>
                    <Btn className={styles.btn} size={"medium"}>Откликнуться</Btn>
                </div>
            }
        </div>
    );
};

