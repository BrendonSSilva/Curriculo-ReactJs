import s from 'styled-components'

type Props = {
    allColor?: boolean;
}

export const All = s.div<Props>`
    background-color: ${props => props.allColor === false ? '#f8f9fa' : '#000'};
    color: ${props => props.allColor === false ? '#000' : '#f8f9fa'};
`

export const Main = s.div`
    margin-left: auto;
    margin-right: auto;

    flex-direction: column;

    @media(max-width: 1200px) {
        width: 100%;
    }
    `

export const CardsArea = s.div<Props>`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const Cards = s.div`

    margin: 15px 0px;
    justify-content: center;

    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 50px;

    @media(max-width: 1400px) {
    gap: 17px;
    grid-template-columns: repeat(3,1fr);
    }
    @media(max-width: 991px) {
    gap: 17px;
    grid-template-columns: repeat(2,1fr);
    }
    @media(max-width: 768px) {
    gap: 17px;
    grid-template-columns: repeat(1,2fr);
    }
`
export const CardAny = s.div`
`