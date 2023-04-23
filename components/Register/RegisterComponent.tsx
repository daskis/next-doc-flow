import React, {useState} from 'react';
import styles from "./RegisterComponent.module.css";
import {ATag, Btn, Htag, InputTag, Ptag} from "@/components";
import {IData, RegisterComponentProps} from "@/components/Register/RegisterComponent.props";
import cn from "classnames";
import Link from "next/link";
import InputMask from "react-input-mask-next";
import {FormData} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export interface IReg {
    first_name: string,
    last_name: string,
    middle_name: string,
    email: string,
    tax_compliant: boolean,
    tin: string,
    phone: string,
    org_type: string,
    org_name: string,
    agreement: boolean,
    exp: string,
    password: string,
    password2: string,
}

export const RegisterComponent = ({}: RegisterComponentProps) => {
    const [step, setStep] = useState(true)
    const changeAgreement = () => {
        setData((data) => {
            data.agreement = !data.agreement;
            return data;
        })
    }
    const changeTax = () => {
        setData((data) => {
            data.tax_compliant = !data.tax_compliant;
            return data;
        })
    }


    const setHandler = (e: React.FormEvent<HTMLInputElement>, regType: string) => {
        switch (regType) {
            case "phone":
                if (setData) {
                    if (e.currentTarget.value.length < 13) {
                        setData((data) => {
                            data.phone = e.currentTarget.value;
                            return data;
                        })
                    }
                }
                return
        }
    }


    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // @ts-ignore
        setData((data) => {
            data.tin = e.target.value;
            return data;
        })
    }
    const [data, setData] = useState<IReg>({
        first_name: "",
        last_name: "",
        middle_name: "",
        email: "",
        tax_compliant: false,
        phone: "",
        tin: "",
        org_type: "ИП",
        org_name: "",
        agreement: false,
        exp: "",
        password: "",
        password2: "",
    })

    const sendData = () => {
        if (data) {
            console.log(JSON.stringify(data))
            const ans = fetch("http://10.2.0.64:8000/auth/register/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json; charset=utf8"
                },
                body: JSON.stringify(data)
            }).then(data => data.json())
                .then(data => {
                    console.log("Success")
                })

        }
    }
    const changeStep = () => {
        setStep(!step)
    }
    // @ts-ignore
    return (
        <div className={cn(styles.wrapper, {})}>
            <Htag className={styles.h} type={"h1"}>Регистрация</Htag>
            <div className={styles.container}>
                {step
                    ? <>
                        <div className={styles.fio}>
                            <div className={styles.inputWrapper}>
                                <InputTag appointment={"registration"}
                                          data={data} setData={setData}
                                          type={"text"}
                                          regType={"firstName"} label={"Имя"}/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <InputTag appointment={"registration"} value={data.last_name}
                                          data={data} setData={setData}
                                          type={"text"}
                                          regType={"lastName"} label={"Фамилия"}/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <InputTag appointment={"registration"} value={data.middle_name}
                                          data={data} setData={setData}
                                          type={"text"}
                                          regType={"middleName"}
                                          label={"Отчество"}/>
                            </div>
                        </div>
                        <div className={styles.passwords}>
                            <div className={styles.inputWrapper}>
                                <InputTag appointment={"registration"} value={data.password}
                                          data={data} setData={setData}
                                          type={"password"}
                                          regType={"password"}
                                          label={"Введите пароль"}/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <InputTag appointment={"registration"} value={data.password2}
                                           data={data} setData={setData}
                                          type={"password"}
                                          regType={"confirmPassword"}
                                          label={"Повторите пароль"}/>
                            </div>
                        </div>
                    </>
                    : <>
                        <div className={styles.personInfo}>
                            <div className={styles.inputWrapper}>
                                <InputTag appointment={"registration"}
                                          data={data} setData={setData}
                                          type={"email"}
                                          regType={"email"}
                                          label={"Адрес эл. почты*"}/>
                            </div>
                            <div className={cn(styles.inputWrapper, styles.phoneContainer)}>
                                {/*<InputTag type={"email"} label={"Телефон"}/>*/}
                                <InputMask className={styles.phone}
                                           onChange={(e) => setHandler(e, "phone")}
                                           mask={"+79999999999"}/>
                                <label className={styles.label}>Телефон*</label>
                            </div>
                        </div>
                        <div className={styles.inputWrapper}>
                            <InputTag appointment={"registration"} value={data.tin}
                                      data={data} setData={setData} type={"text"}
                                      regType={"tin"} label={"ИНН*"}/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <InputTag appointment={"registration"} value={data.org_name}
                                      data={data} setData={setData} type={"text"}
                                      regType={"companyName"}
                                      label={"Название компании*"}/>
                        </div>
                        <div className={styles.companyInfo}>
                            <div className={styles.inputWrapper}>
                                <InputTag appointment={"registration"} value={data.exp} mask={"99"}
                                          data={data} setData={setData}
                                          type={"number"}
                                          regType={"exp"}
                                          label={"Стаж работы"}/>
                            </div>
                            <select onChange={selectHandler} className={styles.select}>
                                <option className={styles.option}>ИП</option>
                                <option className={styles.option}>ООО</option>
                            </select>
                        </div>
                        <div className={styles.agreement}>
                            <input onClick={changeAgreement} className={styles.checkbox} type={"checkbox"}/>
                            <Ptag size={"medium"} className={styles.checkboxLabel}>Согласие на обработку персональных
                                данных</Ptag>
                        </div>
                        <div className={styles.tax}>
                            <input onClick={changeAgreement} className={styles.checkbox} type={"checkbox"}/>
                            <Ptag size={"medium"} className={styles.checkboxLabel}>Работаем с НДС</Ptag>
                        </div>
                    </>
                }

                {step
                    ?
                    <Btn type={"button"} onClick={changeStep} size={"large"}>Далее</Btn>
                    :
                    <>
                        <Btn type={"button"} onClick={changeStep} color={"secondary"} size={"large"}>Назад</Btn>
                        <Btn type={"button"} onClick={sendData} color={"primary"}
                             size={"large"}>Завершить</Btn>
                    </>
                }
            </div>
            <div className={styles.more}>
                <Link href={"login"} className={styles.login}>Войти</Link>
                <Link className={styles.toMain} href={"/"}>На главную</Link>
            </div>
        </div>
    );
};

// const validateForm = () => {
//   const regExpName = /^[a-zA-Zа-яА-Я]+$/;
//   const regExpEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   const regExpPhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
//   const regExpTin = /^\d{10}|\d{12}$/;
//   const regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//   let isValid = true;

//   if (!regExpName.test(data.firstName)) {
//     isValid = false;
//     document.getElementById('firstName').style.borderColor = "red";
//     document.getElementById('firstNameError').innerHTML = "Please enter a valid first name";
//   }

//   if (!regExpName.test(data.lastName)) {
//     isValid = false;
//     document.getElementById('lastName').style.borderColor = "red";
//     document.getElementById('lastNameError').innerHTML = "Please enter a valid last name";
//   }

//   if (data.middleName && !regExpName.test(data.middleName)) {
//     isValid = false;
//     document.getElementById('middleName').style.borderColor = "red";
//     document.getElementById('middleNameError').innerHTML = "Please enter a valid middle name";
//   }

//   if (!regExpEmail.test(data.email)) {
//     isValid = false;
//     document.getElementById('email').style.borderColor = "red";
//     document.getElementById('emailError').innerHTML = "Please enter a valid email";
//   }

//   if (!regExpPhone.test(data.phone)) {
//     isValid = false;
//     document.getElementById('phone').style.borderColor = "red";
//     document.getElementById('phoneError').innerHTML = "Please enter a valid phone number";
//   }

//   if (!regExpTin.test(data.tin)) {
//     isValid = false;
//     document.getElementById('tin').style.borderColor = "red";
//     document.getElementById('tinError').innerHTML = "Please enter a valid TIN";
//   }

//   if (!regExpName.test(data.companyName)) {
//     isValid = false;
//     document.getElementById('companyName').style.borderColor = "red";
//     document.getElementById('companyNameError').innerHTML = "Please enter a valid company name";
//   }

//   if (!regExpName.test(data.years)) {
//     isValid = false;
//     document.getElementById('years').style.borderColor = "red";
//     document.getElementById('yearsError').innerHTML = "Please enter a valid number of years";
//   }

//   if (!regExpPassword.test(data.password)) {
//     isValid = false;
//     document.getElementById('password').style.borderColor = "red";
//     document.getElementById('passwordError').innerHTML = "Password must be at least 8 characters long and contain at least one letter and one number";
//   }

//   if (data.password !== data.confirmPassword) {
//     isValid = false;
//     document.getElementById('confirmPassword').style.borderColor = "red";
//     document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match";
//   }

//   if (!data.agreement) {
//     isValid = false;
//     document.getElementById('agreement').style.borderColor = "red";
//     document.getElementById('agreementError').innerHTML = "Please agree to the terms";
//   }

//   return isValid;
// }
