import { GetStaticProps, GetStaticPropsContext } from "next";

interface Props {
    staticDate: string
}

const Tempo = ({ staticDate }: Props) => {
    const dynamicDate = new Date().toLocaleString();

    return (
        <div>
            <p>{dynamicDate} (dinâmico)</p> 
            <p>{staticDate} (estático-revalidando)</p>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const staticDate = new Date().toLocaleString();

    return {
        props: {
            staticDate
        },
        revalidate: 5
    }
}

export default Tempo;