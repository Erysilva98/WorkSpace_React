import React from "react";

function menu()
{
    return(
        <nav className="bg-gray-400 h-8">
            <ul className="h-8 flex flex-row gap-4">
                <li>Login</li>
                <li>Home</li>
                <li>Exemplo1</li>
            </ul>
        </nav>
    );
}

export default menu;