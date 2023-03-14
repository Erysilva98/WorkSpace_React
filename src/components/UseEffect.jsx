import React, { useEffect, useState } from "react";

function UseEffect()
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Contagem ${count} `;
        });

    return (
        <div>
            <button className="bg-azulEscuro text-white rounded-lg w-24"
                onClick={ () => setCount(count +1)}
            >
                Adicionar
            </button>
        </div>
    );
}

export default UseEffect;