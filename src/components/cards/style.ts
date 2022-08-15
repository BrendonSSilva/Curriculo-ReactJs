import s from 'styled-components'

type Props = {
    textCards?: boolean;
}

export const Card = s.div<Props>`
    width: 350px;
    height: auto;
    border: 1px solid ${props => props.textCards === false ? '#000' : '#f8f9fa'};
    border-radius: 20px;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.1 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;

    @media(max-width: 400px){
    width: 290px;
}
`

export const Body = s.div`
    padding: 10px;
`