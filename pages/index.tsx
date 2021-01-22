import { useState } from "react";
import Link from "next/link"

const Home = () => {

    return (
        <div>
            <h3>Hello World ! in Homolog Environment</h3>
            <Contador />
            <Link href="/sobre">
                <a>Link para página sobre</a>
            </Link>
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