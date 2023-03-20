import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg13 from '../assets/img/project-img13.png';
import projImg14 from '../assets/img/project-img14.png';
import projImg15 from '../assets/img/project-img15.png';
import projImg16 from '../assets/img/project-img16.png';
import projImg17 from '../assets/img/project-img17.png';
import projImg18 from '../assets/img/project-img18.png';
import projImg19 from '../assets/img/project-img19.png';
import projImg20 from '../assets/img/project-img20.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          className="linksites"
          href="https://clonetubediegosant.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          CloneTube
        </a>
      ),
      description:
        'Clone pessoal do Youtube feito com uma API que atualiza automaticamente',
      imgUrl: projImg1,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://github.com/Diego-Sant/RateYourMovie"
          rel="noreferrer"
          target="_blank"
        >
          RateYourMovie
        </a>
      ),
      description:
        'Site funcional de avaliação de filmes e séries. (Site indisponível por ter sido lançado no Heroku antes de se tornar pago)',
      imgUrl: projImg2,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://wildbeast-ecru.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          WildBeast
        </a>
      ),
      description: 'Site informativo sobre animais selvagens.',
      imgUrl: projImg3,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://diego-sant.github.io/Your-turn-to-die/"
          rel="noreferrer"
          target="_blank"
        >
          YourTurnToDie
        </a>
      ),
      description: 'Wiki sobre um jogo de escolhas.',
      imgUrl: projImg4,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://clonefy-ds.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          CloneFy
        </a>
      ),
      description: 'Site inspirado no Spotify com outras mecânicas. ',
      imgUrl: projImg15,
    },
    {
      title: 'Tabela de vendas Excel',
      description: 'Tabelas de vendas moderna feita no Excel',
      imgUrl: projImg19,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://github.com/Diego-Sant/flastats"
          rel="noreferrer"
          target="_blank"
        >
          FlaStats
        </a>
      ),
      description:
        'Site Full Stack com pesquisa entre datas. (Site indisponível por ter sido lançado no Heroku antes de se tornar pago)',
      imgUrl: projImg14,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://diego-sant.github.io/NetGamePass/"
          rel="noreferrer"
          target="_blank"
        >
          NetGamePass
        </a>
      ),
      description:
        'Site informativo sobre lançamento de jogos e suas avaliações.',
      imgUrl: projImg7,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://github.com/Diego-Sant/CampeonatoBrasileiro2023"
          rel="noreferrer"
          target="_blank"
        >
          Aplicação JSwing/JFrame
        </a>
      ),
      description:
        'Aplicação sobre informações do futebol completamente funcional feita em JFrame com banco de dados MySQL',
      imgUrl: projImg17,
    },
    {
      title: 'Gestão de investimento Excel',
      description:
        'Dashboard feito para mostrar as valorizações de cotação de empresas e de fundos imobiliários',
      imgUrl: projImg8,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://github.com/PCA-Game/PCA-Game"
          rel="noreferrer"
          target="_blank"
        >
          EscapeFromHell
        </a>
      ),
      description:
        'Jogo de plataforma feito em pygame para o PCA da faculdade.',
      imgUrl: projImg9,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://github.com/Diego-Sant/GodHunter"
          rel="noreferrer"
          target="_blank"
        >
          GodHunter
        </a>
      ),
      description: 'Jogo de luta em turnos feito no pygame.',
      imgUrl: projImg10,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://github.com/Diego-Sant/CatalogoFilmes"
          rel="noreferrer"
          target="_blank"
        >
          Catálogo de filmes
        </a>
      ),
      description:
        'Site em Javascript com pesquisa de títulos de filmes usando uma API',
      imgUrl: projImg18,
    },
    {
      title: 'Fluxo de caixa empresarial',
      description:
        'Dashboard com pesquisa entre datas(Tanto por dia/mês quanto por ano completo)',
      imgUrl: projImg13,
    },
    {
      title: 'Dashboard com Power BI',
      description: 'Projeto feito com Power BI.',
      imgUrl: projImg20,
    },
  ];

  return (
    <section className="project" id="projetos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    Alguns dos meus projetos.<br></br> Outros projetos podem ser
                    encontrados no github
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp2"
      />
    </section>
  );
};
