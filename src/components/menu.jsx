import React from "react";

export default function Menu()
{
    return(
        <header className="w-full bg-white shadow-lg flex flex-row justify-between">
            <nav className="h-8 flex flex-col justify-center ">
                <ul className="flex flex-row gap-5">
                    <li>
                        Home
                    </li>
                    <li>
                        Login
                    </li>
                    <li>
                        Contador
                    </li>
                    <li>
                        Formulario
                    </li>
                </ul>
            </nav>
            <div className="px-4 flex items-center font-bold">
                Erimilson
            </div>
        </header>
    );
}