import 'bootstrap/dist/css/bootstrap.min.css';
import * as C from './style'
import './styles.css'
import { Modal1 } from '../modal';

type Props = {
  image: string,
  titleText: string,
  text: string,
  textCards: boolean,
  //button
  btnLabel: string;
  btnBody: string;
  btnGoSome: string;
  btnLink: string;
  btnClose: string;
  tec1: string;
  tec2: string;
  tec3: string;
  libraries1?: string;
  libraries2?: string;
  libraries3?: string;
  linkRep: string;
  borderModal: boolean;
}

export const Cards = ({ borderModal, textCards, libraries1, linkRep, libraries2, libraries3, image, text, titleText, btnBody, btnLabel, btnGoSome, btnClose, btnLink, tec1, tec2, tec3 }: Props) => {
  return (
    <>
      <C.Card textCards={textCards}>
          <img src={image} className='radius' />
        <C.Body>
          <h1>{titleText}</h1>
          <p>{text}</p>
          <Modal1 borderModal={borderModal} label={btnLabel} linkRep={linkRep} libraries1={libraries1} libraries2={libraries2} libraries3={libraries3} tec1={tec1} tec2={tec2} tec3={tec3} body={btnBody} bodyTitle={titleText} goSome={btnGoSome} link={btnLink} close={btnClose} />
        </C.Body>
      </C.Card>
    </>
  );
}
