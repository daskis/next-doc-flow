"use client"
import React, {useState} from 'react';
import styles from "./NewTender.module.css"
import {Btn, Htag, InputTag} from "@/components";

const NewTender = () => {
    const [file, setFile] = useState<File>()
    const fetchHandler = async (e) => {
        e.preventDefault()
        if (!file) return;
        if (typeof window !== undefined) {
            const formData = new FormData(e.target)
            formData.append("file", file);
            const ans = await fetch("http://10.2.0.64:8000/api/contracts/", {
                method: "POST",
                body: formData

            })
                .then(data => data.json())
                .then(data => console.log(data))
        }

    }
    return (
        <div className={styles.wrapper}>
            <Htag type={"h2"}>Создание нового тендера</Htag>
            <form onSubmit={fetchHandler} encType="multipart/form-data" className={styles.form}>
                <InputTag name={"title"} className={styles.input} type={"text"} label={"Название"}/>
                <InputTag name={"desc"} className={styles.input} type={"text"} label={"Описание"}/>
                <InputTag name={"requirements"} className={styles.input} type={"text"} label={"Требования"}/>
                <InputTag name={"city"} className={styles.input} type={"text"} label={"Населенный пункт"}/>
                <label className={styles.label}>
                    <Htag type={"h4"}>Загрузите документы</Htag>
                    <input name={"file"} onChange={({target}) => {
                        if (target.files) {
                            setFile(target.files[0])
                        }
                    }} type={"file"} multiple={true}/>
                </label>
                <Btn className={styles.btn} type={"submit"} size={"large"}>Создать</Btn>
            </form>
        </div>
    );
};

export default NewTender;