import React from "react";
import FormSteps from "../components/FormSteps";
import Menu from "../components/Menu";

export default function FormUser()
{
    return (
        <div className="bg-gray-400 h-screen w-screen flex flex-col">
            <Menu/>
            <FormSteps/>
        </div>
    );
}
