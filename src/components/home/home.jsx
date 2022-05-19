import './home.css';
import img from '../props/1.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

export default function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Ir para baixo</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Sobre mim</span> <br />
        <p>
            Entusiasmado com Data Science, Machine Learning e IoT. Durante 2 anos fui pesquisador da área de analise de dados e sistemas distribuídos, tive a oportunidade de realizar pesquisas que contribuíram para a comunidade cientifica.

            Atualmente sou desenvolvedor fullstack apreciador da linguagem TypeScript e por todo ecossistema dessa tecnologia. Para o desenvolvimento Front-end e Mobile eu utilizo o ReactJS e o React Native, e para o desenvolvimento Back-end eu utilizo o NodeJS.

            Possuo conhecimento em outras linguagens de programação como Python e C, portanto, estou em constante aprendizado, participando de eventos de programação para acrescentar meus conhecimentos e habilidades.

            Estou estudando os benefício da clean architecture, padrões de projeto e boas práticas de programação, já aplicando esses aprendizados em aplicações com NodeJS e TypeScript.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

