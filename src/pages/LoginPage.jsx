import React from "react";
import logo from "../img/logo.png";

function Login()
{
    return (
        <>
            <header>
                <img src={logo} alt="Logo da Moura"/>
                <span>Descrição</span>
            </header>

            <form>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder=" emailPessoal@gmail.com "
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder=" *********** "
                    />
                </div>

                <a href="/">Esqueceu sua Senha ? </a>

                <div>
                    <button>Entrar</button>
                </div>
            </form>
        </>
    );
}

export default Login;
