import { useState } from "react";

const Home = () => {

    return (
        <div>
            <h3>Hello World !</h3>
            <Contador />
        </div>
    )
}

const Contador = () => {
    const [contador, setContador] = useState(1);

    const adicionaContador = () => {
        setContador(contador+1)
    }
    return (
        <div>
            {contador} <br/>
            <button onClick={adicionaContador}>
                contador
            </button>
        </div>
    )
}

export default Home;