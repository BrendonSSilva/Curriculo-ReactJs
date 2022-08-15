import s from 'styled-components'

type Props = {
    textCardBig: boolean;
}

export const Card = s.div<Props>`
    width: 100%;
    height: auto;
    border: 1px solid ${props => props.textCardBig === false ? '#000' : '#f8f9fa'};
    border-radius: 20px;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.1 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;

    display: flex;
    justify-content: center;
    flex-direction: row;

    margin-left: auto;
    margin-right: auto;
`

export const Body = s.div`
    padding: 10px 20px;
`