import s from 'styled-components'

type Props = {
    borderModal: boolean;
}

export const Button = s.button<Props>`
    padding: 5px;
    background: rgba(255, 255, 255, 0);
    border-radius: 10px;
    color: ${props => props.borderModal === false ? '#000' : '#fff'};
    border: 1px solid ${props => props.borderModal === false ? '#000' : '#fff'};
    &:hover{
        transition: linear 0.2s;
        background: ${props => props.borderModal === false ? '#000' : '#fff'};
    color: ${props => props.borderModal === false ? '#fff' : '#000'};

    }
`