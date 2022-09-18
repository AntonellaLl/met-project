import { useEffect, useState } from "react";
import bien from "../../assets/bien.png";
import mal from "../../assets/mal.png";
import medio from "../../assets/medio.png";

function Result({ valorResultado }) {
    const [imagen, setImagen] = useState();

    function getImageSource(valorResultado) {
        if (valorResultado <= 4) setImagen(mal)
        else if (valorResultado > 4 && valorResultado <= 7) setImagen(medio)
        else setImagen(bien)
    }

    useEffect(() => {
        getImageSource(valorResultado)
    }, [valorResultado])

    return (
        <>
            <h1>{valorResultado} respuestas correctas</h1>
            <img src={imagen}/>
        </>
    )
}

export default Result;