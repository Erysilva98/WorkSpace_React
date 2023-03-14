import React, { useState } from "react";

function Exemplo2()
{
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Contagem: {count}</h1>
            <button className="bg-azulEscuro text-white rounded-lg w-24"
                onClick={ () => setCount(count +1)}
            >
                Adicionar
            </button>
        </div>
    );
}

export default Exemplo2;