import React from "react";
import logo from "../img/logo.png";

function Login()
{
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center ">
           
            <header className="flex flex-col items-center">

                <img src={logo} alt="Logo da Moura"/>

                <span className="text-5xl font-semibold">Entre com sua conta</span>

            </header>

            <form className="w-1/2">

                <label>
                    <input
                            className="w-full h-7" 

                            type="text"
                            name="email"
                            id="email"
                            placeholder=" E-mail "
                        />
                </label>
                    
                <label>
                    <input 
                        className="w-full h-7" 

                        type="password"
                        name="password"
                        id="password"
                        placeholder=" Senha "
                    />
                </label>
            </form>
            <a href="/" className="w-1/3 flex flex-row-reverse text-blue-900 font-semibold ">Esqueceu sua Senha ? </a>
            
            <div className="w-1/2">
                <button
                    className="bg-blue-800 w-full h-7 my-6 rounded-full"
                >
                    Entrar
                </button>
            </div>     
        </div>
    );
}

export default Login;
