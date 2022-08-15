import { Container } from 'react-bootstrap'
import * as C from './style'
import './styles.css'

type Props = {
    bgFoot: boolean
}

export const Foot = ({bgFoot}: Props) => {
    return (
        <C.Footer bgFoot={bgFoot}>
            <footer>
                <Container>
                    <div className='footAll text-start'>
                        <div>
                            <h1 className='footTitle'>Feito por</h1>
                            <p>Brendon Schimmelpfennig da Silva</p>
                        </div>
                        <div>
                            <h1 className='footTitle'>Entre em contato</h1>
                            <h5 className='subTitle'>WhatsApp: <small>(53) 98407-0032</small></h5>

                            <h5 className='subTitle'>Email: <small>brendon@agedes.com.br</small></h5>

                        </div>
                        <div>
                            <h1 className='footTitle'>Redes Sociais</h1>
                            <h5 className='subTitle'>Instagram: <small><a href='https://www.instagram.com/brendonsilva03/'>@brendonsilva03</a></small></h5>

                            <h5 className='subTitle'>Facebook: <small><a href='https://www.facebook.com/brendon.schimmelpfennigdasilva/'>Brendon S. da Silva</a></small></h5>

                        </div>
                    </div>
                    <hr />
                    <p>Brendon &copy; 2022</p>
                </Container>
            </footer>
        </C.Footer>
    )
}