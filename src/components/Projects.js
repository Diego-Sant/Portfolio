import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg14 from '../assets/img/project-img14.png';
import projImg15 from '../assets/img/project-img15.png';
import projImg16 from '../assets/img/project-img16.png';
import projImg17 from '../assets/img/project-img17.png';
import projImg18 from '../assets/img/project-img18.png';
import projImg20 from '../assets/img/project-img20.png';
import projImg21 from '../assets/img/project-img21.png';
import projImg22 from '../assets/img/project-img22.png';
import projImg13 from '../assets/img/project-img13.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          className="linksites"
          href="https://gameverse-self.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          Gameverse
        </a>
      ),
      description: 'Site de informações sobre jogos em lançamento, que irão ser lançados, separados por categorias e muito mais! Feito com TypeScript, NextJs, TailwindCss e MongoDB',
      imgUrl: projImg15,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://showdomilhaogame.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Show do Milhão
        </a>
      ),
      description:
        'Jogo inspirado em ambos os jogos "Show do Milhão" e "Roda a Roda" implementado no computador',
      imgUrl: projImg22,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://flix-prime-plus.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          FlixPrime+
        </a>
      ),
      description: 'Site com trailers de diversos filmes e diversas categorias feito com Next.JS, Prisma, React, MongoDB e TailwindCSS',
      imgUrl: projImg4,
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
          href="https://miniblogwebsite.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          MiniBLOG
        </a>
      ),
      description:
        'MiniBlog completamente funcional, com função de cadastro, login, busca, postagem, edição e exclusão de fotos usando Firebase.',
      imgUrl: projImg13,
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
          href="https://weatherwebsitefinder.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Website de clima
        </a>
      ),
      description:
        'Site de clima usando uma API com busca de cidades, estados e países de todo o planeta.',
      imgUrl: projImg6,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://tech-trivia.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          TechTrivia
        </a>
      ),
      description:
        'Site feito com NextJs com perguntas sobre Next, TypeScript, React e JavaScript',
      imgUrl: projImg18,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://clonegramreactapp.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Clonegram
        </a>
      ),
      description: 'Projeto full-stack com login, cadastro, postagem e edição de fotos, likes e comentários, feito com React, MongoDB e NodeJS. Funciona apenas quando banco de dados é iniciado.',
      imgUrl: projImg20,
    },
    {
      title: 
      <a
      className="linksites"
      href="https://gradientcolorsmaker.netlify.app/"
      rel="noreferrer"
      target="_blank"
      >
        Gerador de cores gradientes
      </a>,
      description:
        'Site feito com intenção de simular e criar novas cores gradientes.',
      imgUrl: projImg8,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://guessthecomputernumbergame.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Adivinhe o número
        </a>
      ),
      description:
        'Jogo de adivinhação com contagem de tentativas, vitórias e derrotas',
      imgUrl: projImg21,
    },
    {
      title: (
        <a
          className="linksites"
          href="https://resizeandcompressimages.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Compressor e modificador de imagens
        </a>
      ),
      description:
        'Site com utilidade de modificar altura, largura e qualidade de uma imagem.',
      imgUrl: projImg16,
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
          href="https://github.com/Diego-Sant/GodHunter"
          rel="noreferrer"
          target="_blank"
        >
          GodHunter
        </a>
      ),
      description: 'Jogo de luta em turnos feito no pygame.',
      imgUrl: projImg10,
    }
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
