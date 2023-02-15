import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import meter4 from '../assets/img/meter4.svg';
import meter5 from '../assets/img/meter5.svg';
import meter6 from '../assets/img/meter6.svg';
import meter7 from '../assets/img/meter7.svg';
import meter8 from '../assets/img/meter8.svg';
import meter9 from '../assets/img/meter9.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Algumas habilidades que eu aprendi durante 2 anos de programação
                <br></br>(Alguns logos são clicáveis)
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <a
                    href="https://www.udemy.com/certificate/UC-bbb3e0bd-74b9-4ffe-9c0f-cf55a5db1c62/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={meter7} alt="Imagem" />
                  </a>
                  <h5 className="mb">Java</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Imagem" />
                  <h5 className="mb">MySQL</h5>
                </div>
                <div className="item">
                  <a
                    href="https://www.udemy.com/certificate/UC-f4742800-47e9-49d5-a6a8-29e8ac6d4ffa/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={meter9} alt="Imagem" />
                  </a>
                  <h5 className="mb">Excel</h5>
                </div>
                <div className="item">
                  <a
                    href="https://www.origamid.com/certificate/35d2d48e"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={meter1} alt="Imagem" />
                  </a>
                  <h5 className="mb">HTML</h5>
                </div>
                <div className="item">
                  <a
                    href="https://www.origamid.com/certificate/bb058054"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={meter2} alt="Imagem" />
                  </a>
                  <h5 className="mb">CSS</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Imagem" />
                  <h5 className="mb">JavaScript</h5>
                </div>
                <div className="item">
                  <a
                    href="https://www.origamid.com/certificate/ebb0a02f"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={meter3} alt="Imagem" />
                  </a>
                  <h5 className="mb">Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Imagem" />
                  <h5 className="mb">Photoshop</h5>
                </div>
                <div className="item">
                  <a
                    href="https://www.origamid.com/certificate/e00dbe92"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={meter5} alt="Imagem" />
                  </a>
                  <h5 className="mb">React</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        alt="colorSharp"
        src={colorSharp}
      ></img>
    </section>
  );
};
