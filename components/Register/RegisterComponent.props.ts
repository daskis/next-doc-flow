import React, {DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction} from "react";

export interface RegisterComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}
export interface IData {
    first_name: string
    last_name: string
    middle_name: string
    email: string
    phone: string
    tin: string
    org_name: string
    exp: string
    password: string
    password2: string
    agreement: boolean
    tax_compliant: boolean
    org_type: "ИП" | "ООО"
}