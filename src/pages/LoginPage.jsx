import React from "react";
import logo from "../img/logo.png";
import mouraTech from "../img/mouratech.png";

function Login()
{
    return (
        <div className="flex flex-col jus-center items-center h-screen">
            <img src="{logo}" ></img>
            <form className="w-full max-w-sm">
                <div className="mb-4">
                    <label className="block">
                        Usuário
                    </label>
                </div>

            </form>
            
        </div>
    );
}

export default Login;
