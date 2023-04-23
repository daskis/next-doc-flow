import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styles from "./Tender.module.css"
import {CardItem, Htag, IPost, Ptag} from "@/components";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import {IPosts} from "@/pages/tenders/index";


const columns = [
    {title: "Key", dataIndex: "key", key: "key"},
    {title: "Name", dataIndex: "name", key: "name"},
    {title: "Age", dataIndex: "age", key: "age"},
    {title: "Gender", dataIndex: "gender", key: "gender"},
    {title: "Email", dataIndex: "email", key: "email"},
    {title: "Phone", dataIndex: "phone", key: "phone"},
    {title: "Address", dataIndex: "address", key: "address"},
];

// @ts-ignore
export const getServerSideProps = async (context) => {
    const res = await fetch(
        `http://10.2.0.64:8000/api/contracts/${context.query._id}`
    );
    const post = await res.json();
    return {
        props: {
            post,
        },
    };
};

const Tender = ({post}:IPosts) => {



    const fakeDocs = [
        {id: 1, type: "Акт", name: "Название документа"},
        {id: 2, type: "Счет", name: "Название документа"},
        {id: 3, type: "Договор", name: "Название документа"},
        {id: 4, type: "Договор", name: "Название документа"},
    ]
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const {_id} = router.query
    return (
        <div className={styles.wrapper}>
            <Link className={styles.back} href={"/tenders"}>Вернуться назад</Link>
            <CardItem appointment={"tender"} data={post}/>
            <div className={styles.container}>
                <div className={styles.info}>
                    <Htag type={"h4"}>Подробная информация</Htag>
                    <Ptag size={"medium"}>{post.desc}</Ptag>
                </div>
                <div className={styles.info}>
                    <Htag type={"h4"}>Требования</Htag>
                    <Ptag size={"medium"}>{post.requirements}</Ptag>
                </div>
                <div className={styles.docsInfo}>
                    <div className={styles.docs}>
                        <div className={styles.docsWrapper} onClick={() => setIsOpen(!isOpen)}>
                            <Htag type={"h4"}>Документы</Htag>
                            <div className={styles.icon}></div>
                        </div>
                        <ul className={cn(styles.docsList, {
                            [styles.disable] : !isOpen
                        })}>
                            {post && post.spec_links.map((doc, i) => {
                                return (
                                    <li className={styles.item} key={i}>
                                        <a className={styles.link} target={"_blank"} href={doc ? `http://10.2.0.64:8000${doc}` : ""}>
                                            <Image src={"/clip.svg"} alt={"clip"} width={20} height={20}/>
                                            <Ptag size={"medium"}>{doc.split("/")[doc.split("/").length - 1]}</Ptag>
                                        </a>
                                    </li>
                                )})}
                        </ul>
                    </div>
                    <div>
                        <Htag type={"h4"}>Предпросмотр</Htag>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tender;