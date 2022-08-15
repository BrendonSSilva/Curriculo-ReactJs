import * as C from './style'
import './styles.css'

type Props = {
    myPicture: string,
    textCardBig: boolean
}

export const CardBig = ({ myPicture, textCardBig }: Props) => {
    return (
        <>
            <div className='allCardBig'>
                <C.Card textCardBig={textCardBig}>
                    <img src={myPicture} className='imgBig' />
                    <C.Body>
                        <h1>Sobre Mim</h1>
                        <p>Me chamo Brendon Schimmelpfennig da Silva. Tenho 18 anos e moro em Pelotas-RS.
                            Estou iniciando no mercado da programação como programador front-end. Tenho diversos projetos em JavaScript e hoje em dia estou estudando ReactJs, com curso e projetos próprios.
                        </p>
                        <h1>Por que programação?</h1>
                        <p>
                            Porque eu gosto de programar, por ser uma profissão bastante flexível e que está cada vez crescendo mais. Amo o que faço e dedico todo o meu tempo para obter conhecimento e trabalhar com o que amo.
                        </p>
                        <h1>Objetivo profissional</h1>
                        <p>
                            Trabalhar como programador. Pois amo o que faço, sou bom nisso e sei que quanto mais oportunidades, melhor serei.
                        </p>
                        <h1>Formação</h1>
                        <p>Módulos de JavaScript, HTML5, CSS3 e Bootstrap 4 (estou em dia com o 5) finalizados (B7Web).
                            Atualmente estudando ReactJs e NextJs.
                        </p>
                    </C.Body>
                </C.Card>
            </div>
        </>
    );
}