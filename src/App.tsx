import * as C from './App.module.style';
import './styleSwitch.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Cards } from './components/cards';
import { CarouselTop } from './components/carousel';
import { Progress } from './components/progress';
import { Technologies } from './components/tech';
import { CardBig } from './components/cardbig';
import { Foot } from './components/foot';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

//carousel images
import rick from "./assets/img1.png";
import calc from "./assets/img2.png";
import memory from "./assets/img3.png";
import memory1 from "./assets/memoria.png";
import calcular from "./assets/calcular.png";
import general from "./assets/general.png";
import velha from "./assets/velha.png";
import clima from "./assets/clima.png";
import quiz from "./assets/quiz.png";
import port from "./assets/port.png";
import eu from "./assets/eu.jpeg";
import sol from "./assets/sol.png";
import lua from "./assets/lua.png";


function App() {
  const [darkOn, setDarkOn] = useState(true)

  if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', 'true')
  }

  function mudarTema() {
    if (localStorage.getItem('darkMode') === 'false') {
      localStorage.setItem('darkMode', 'true')
    } else {
      localStorage.setItem('darkMode', 'false')
    }
    mode()
  }


  const mode = () => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkOn(false)
    } else {
      setDarkOn(true)
    }
  }

  useEffect(() => {
    mode()
  })
  return (
    <>
      <C.All allColor={darkOn}>
        <Navbar collapseOnSelect expand="lg"
        style={{backgroundColor: `${darkOn === false ? '#f8f9fa' : '#000'}`}}
          // bg={darkOn === false ? 'light' : 'dark'}
          variant={darkOn === false ? 'light' : 'dark'}
          >
          <Container>
            <Navbar.Brand href="https://github.com/BrendonSSilva">Brendon Silva</Navbar.Brand>
            {/* switch */}
            <div className="all-switch" >
              {/* <button type="button" onClick={mudarTema}>Clique</button> */}
              <input type="checkbox" className="checkbox" id="chk" onClick={mudarTema} />
              <label className="label" htmlFor="chk">
                <img src={darkOn === false ? lua : sol} className='icons' />
                <div className="ball"></div>
              </label>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link href="https://github.com/BrendonSSilva">GitHub</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/brendon-silva/">LinkedIn</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="container">
          <CarouselTop
            img1={rick} link1='https://appmortyandrick.web.app'
            img2={memory} link2='https://joguinhodememoria.web.app'
            img3={calc} link3='https://uimccalc.web.app'
            img4={general} link4='https://brendonssilva.github.io/Jogo-General/'
            img5={clima} link5='https://brendonssilva.github.io/Consultar-Clima/'
            img6={velha} link6='https://brendonssilva.github.io/Jogo-da-Velha-Com-Placar/'
            img7={quiz} link7='https://brendonssilva.github.io/quiz/'
          />
          <Progress ing='info' v1='warning' v2='primary' v3='info' v4='danger' v5='primary' />

          <C.Main>

            <C.CardsArea allColor={darkOn}>
              <C.Cards>
                <C.CardAny>
                  <Cards
                    borderModal={darkOn}
                    textCards={darkOn}
                    titleText='Rick and Morty API' text='Projeto próprio feito utilizando o consumo de API.'
                    image={rick}
                    btnLabel='Detalhes'
                    btnBody='Neste projeto temos: dark/light mode, buscar personagens pelo nome, paginação e filtrar personagens por status e/ou espécie. Sobre paginação, busca de personagens e filtros: foram definidas variáveis, onde os valores são inseridos à url da API. Fazendo com que o useEffect execute uma ação a cada modificação da url na API conferindo se há resultados.                  '
                    btnLink='https://appmortyandrick.web.app'
                    linkRep='https://github.com/BrendonSSilva/ReactJsProject-API-RickAndMorty'
                    btnGoSome='Projeto'
                    btnClose='Fechar'
                    tec1='ReactJs'
                    tec2='TypeScript'
                    tec3='Sass'
                    libraries1='---'
                    libraries2='---'
                    libraries3='---'
                  />
                </C.CardAny>
                <C.CardAny>
                  <Cards
                    borderModal={darkOn}
                    textCards={darkOn}
                    titleText='Jogo da Memória' text='Projeto de estudo feito no curso da B7Web.'
                    image={memory1}
                    btnLabel='Detalhes'
                    btnBody='Este é um projeto de jogo da memória, no qual temos a contagem de movimentos, timer e opção de reiniciar o jogo.
                  A cada 2 peças viradas, 1 jogada é contada.
                  No final do jogo, parar a contagem de movimentos e o timer.'
                    btnLink='https://joguinhodememoria.web.app'
                    linkRep='https://github.com/BrendonSSilva/ReactJs-Memory-Game'
                    btnGoSome='Projeto'
                    btnClose='Fechar'
                    tec1='ReactJs'
                    tec2='TypeScript'
                    tec3='CSS'
                    libraries1='Styled-Components'
                    libraries2='---'
                    libraries3='---'
                  />
                </C.CardAny>
                <C.CardAny>
                  <Cards
                    borderModal={darkOn}
                    textCards={darkOn}
                    titleText='Calcular IMC' text='Primeiro projeto de estudo feito em ReactJS.'
                    image={calcular}
                    btnLabel='Detalhes'
                    btnBody='Meu primeiro projeto em ReactJs, feito no curso da B7Web. Algumas partes feitas por mim e outras tive que acompanhar na aula sobre como executar alguns códigos.'
                    btnLink='https://uimccalc.web.app'
                    linkRep='https://github.com/BrendonSSilva/ReactJs-CalcIMC'
                    btnGoSome='Projeto'
                    btnClose='Fechar'
                    tec1='ReactJs'
                    tec2='TypeScript'
                    tec3='CSS'
                    libraries1='---'
                    libraries2='---'
                    libraries3='---'
                  />
                </C.CardAny>
                <C.CardAny>
                  <Cards
                    borderModal={darkOn}
                    textCards={darkOn}
                    titleText='Primeiro Portfólio' text='Uma landing page (responsiva) sobre mim, feita com funções JavaScript.'
                    image={port}
                    btnLabel='Detalhes'
                    btnBody='Projeto responsivo e também feito com função Dark-Mode, utilizando localStorage (armazenar a função escolhida(dark ou light) pelo usuário no navegador), para que quando o usuário entre na página, se torne padrão o modo escolhido pelo mesmo.                  '
                    btnLink='https://brendonssilva.github.io/Landing-Page-Curriculo/'
                    linkRep='https://github.com/BrendonSSilva/Landing-Page-Curriculo'
                    btnGoSome='Portfólio'
                    btnClose='Fechar'
                    tec1='JavaScript'
                    tec2='HTML'
                    tec3='CSS'
                    libraries1='BootStrap 5'
                    libraries2='---'
                    libraries3='---'
                  />
                </C.CardAny>
                <C.CardAny>
                  <Cards
                    borderModal={darkOn}
                    textCards={darkOn}
                    titleText='Jogo General' text='Projeto próprio feito para praticar o uso do JavaScript.'
                    image={general}
                    btnLabel='Detalhes'
                    btnBody='Este projeto foi feito 100% por mim para praticar o uso do JavaScript e mais ainda a lógica de programação. Este é o jogo favorito da minha namorada, usei isso como inspiração.'
                    btnLink='https://brendonssilva.github.io/Jogo-General/'
                    linkRep='https://github.com/BrendonSSilva/Jogo-General'
                    btnGoSome='Projeto'
                    btnClose='Fechar'
                    tec1='JavaScript'
                    tec2='HTML'
                    tec3='CSS'
                    libraries1='---'
                    libraries2='---'
                    libraries3='---'
                  />
                </C.CardAny>
                <C.CardAny>
                  <Cards
                    borderModal={darkOn}
                    textCards={darkOn}
                    titleText='Jogo da Velha' text='Projeto de estudo feito feito para praticar o uso do JavaScript.'
                    image={velha}
                    btnLabel='Detalhes'
                    btnBody='Esse foi um dos projetos que mais aprendi, foram utilizadas várias condições e tentei ao máximo simplificar elas, otimizando o código. A verificação de qual player irá jogar a próxima rodada caso não houvesse vencedor na última, foi feita com um simples cálculo matemático. Para fazer a verificação de onde posso ou não preencher, foi utilizado o data-item dos elementos.

                  E por final, a verificação de quem venceu e quem será o próximo a jogar, foi feita com um simples "for", onde defini quais as combinações poderiam dar vitória para algum jogador e também foi utilizado "if".'
                    btnLink='https://brendonssilva.github.io/Jogo-da-Velha-Com-Placar/'
                    linkRep='https://github.com/BrendonSSilva/Jogo-da-Velha-Com-Placar'
                    btnGoSome='Projeto'
                    btnClose='Fechar'
                    tec1='JavaScript'
                    tec2='HTML'
                    tec3='CSS'
                    libraries1='---'
                    libraries2='---'
                    libraries3='---'
                  />
                </C.CardAny>
              </C.Cards>
            </C.CardsArea>

            <Technologies />
            <CardBig myPicture={eu} textCardBig={darkOn} />
          </C.Main>
        </div>
        <Foot bgFoot={darkOn} />
      </C.All>
    </>
  );
}

export default App;
