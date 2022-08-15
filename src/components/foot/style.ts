import s from 'styled-components'

type Props = {
    bgFoot: boolean;
}

export const Footer = s.footer<Props>`
    background-color:  ${props => props.bgFoot === false ? '#aaa' : '#212529'};
    &small,a{
        color:${props => props.bgFoot === false ? '#000' : '#f8f9fa'}
    }
`