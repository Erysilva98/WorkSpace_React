import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";

export default function Contador()
{
    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title = `Voce Clicou ${count} vezes`;
    });

    function incrementar(){
        setCount (count + 1);
    }

    return(
        <div>
            <Menu />
            <h1>
                Contagem:
                {count}
            </h1>
            <button type="button" onClick={incrementar} className="bg-azulEscuro text-branco rounded-lg w-24">
                Adicionar
            </button>
        </div>
    );
}