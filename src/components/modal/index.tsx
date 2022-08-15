import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, List } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';

import './style.css'
import * as C from './styles'
import { DEFAULT_MIN_VERSION } from 'tls';

type Props = {
  label: string;
  bodyTitle: string;
  body: string;
  goSome: string;
  link: string;
  close: string;
  tec1: string;
  tec2: string;
  tec3: string;
  libraries1?: string;
  libraries2?: string;
  libraries3?: string;
  linkRep: string;
  borderModal: boolean;
}

export const Modal1 = ({ borderModal, label, linkRep, bodyTitle, body, goSome, link, close, tec1, tec2, tec3, libraries1, libraries2, libraries3 }: Props, args: any) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <C.Button borderModal={borderModal} onClick={toggle}>{label}</C.Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{bodyTitle}</ModalHeader>
        <ModalBody>
          {body}
          <div>
            <List >
              <h1>Tecnologias</h1>
              <li>
                {tec1}
              </li>
              <li>
                {tec2}
              </li>
              <li>
                {tec3}
              </li>
            </List>
            <List>
              <h1>Bibliotecas</h1>
              <li>{libraries1}</li>
              <li>{libraries2}</li>
              <li>{libraries3}</li>
            </List>
          </div>

        </ModalBody>
        <ModalFooter>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              Ir para
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href={link}>{goSome}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href={linkRep}>Repositório</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button color="danger" onClick={toggle}>{close}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}