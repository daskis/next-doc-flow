import React, {useState} from 'react';
import {LoginComponent, RegisterComponent} from "@/components";
const Index = () => {
    const [auth, setAuth] = useState("register")
    return (
        <>
            <LoginComponent/>
            <RegisterComponent/>
        </>
    );
};

export default Index;