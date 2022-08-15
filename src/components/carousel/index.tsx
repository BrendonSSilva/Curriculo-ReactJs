import Carousel from 'react-bootstrap/Carousel';
import './style.css'

type Props = {
  img1: string;
  img2: string;
  img3: string;
  img4?: string;
  img5?: string;
  img6?: string;
  img7?: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
  link5?: string;
  link6?: string;
  link7?: string;
}

export const CarouselTop = ({ img1, img2, img3, img4, img5, img6, img7, link1, link2, link3,  link4, link5, link6, link7 }: Props) => {
  return (
    <Carousel >

      <Carousel.Item interval={2000}>
        <a target='_blank' href={link1}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </a>
        <Carousel.Caption className="texts">
          <h3>Rick And Morty API</h3>
          <p>Projeto Desafio</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <a target='_blank' href={link2}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </a>
        <Carousel.Caption className="texts">
          <h3>Jogo da Memória</h3>
          <p>Projeto de Estudo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a target='_blank' href={link3}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption className="texts">
          <h3>Calc IMC</h3>
          <p>Projeto de Estudo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a target='_blank' href={link4}>
          <img
            className="d-block w-100 filtro"
            src={img4}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption className="texts">
          <h3>General</h3>
          <p>Projeto Próprio</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a target='_blank' href={link5}>
          <img
            className="d-block w-100 filtro"
            src={img5}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption className="texts">
          <h3>Consultar Clima com API</h3>
          <p>Projeto de Estudo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a target='_blank' href={link6}>
          <img
            className="d-block w-100 filtro"
            src={img6}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption className="texts">
          <h3>Jogo da Velha</h3>
          <p>Projeto de Estudo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a target='_blank' href={link7}>
          <img
            className="d-block w-100 filtro"
            src={img7}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption className="texts">
          <h3>Quiz</h3>
          <p>Projeto de Estudo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}