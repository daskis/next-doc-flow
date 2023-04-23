import React, {DetailedHTMLProps, InputHTMLAttributes, SetStateAction} from "react";
import {IData} from "@/components/Register/RegisterComponent.props";
import {IReg} from "@/components";

export interface InputTagProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string,
    label: string,
    regType?: string,
    appointment?: string
    mask?: string
    data?: IReg,
    setData?: React.Dispatch<SetStateAction<IReg>>
    name?: string
}