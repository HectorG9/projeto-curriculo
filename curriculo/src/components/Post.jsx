// importando o style
import style from './post.module.css';
// importando o component comments 
import Comments from './Comments'
// importando o component habilitys
import Habilitys from './Habilitys'
// importando o component personality
import Personality from './Personality'
// importando o component Historia
import History from './History'
// criando o post
export default function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="./src/assets/foto1.jpeg" alt="author "/>
          <div className={style.authorInfo}>
            <strong>Hector Grôppo Guedes Monteiro</strong>
            <strong>Cargos pretendidos</strong>
            <span>Desenvolvedor Frontend</span>
            <span>Programação em Python</span>
            <span>Automoção em Python</span>
          </div>
        </div>
      </header>
      <div className={style.content}>
        <h2>Sobre Mim</h2> {/* sobre mim */}
        <p>Estudei remotamente por conta própria, cursos sobre linguagem de programação Python, e desenvolvimento Full Stack.</p>
        <p>Formado profissionalmente através do Senai no curso de desenvolvimento Frontend</p> 
        <p>Calistenico, disciplinado, gosto de exatas, livros, games e tecnologia no geral</p>
        <h2>Link Repositórios</h2>
        <a href="https://github.com/HectorG9">Repositório1</a>
        <a href="https://github.com/hectorgroppo">Repositório2</a>
        <h2>Ultimo Projeto</h2>
        <a href="https://projeto-netflix-copy.vercel.app/">Projeto Netflix, em andamento</a>
      </div>
      <form action="">
        <h1>Experiência Profissional</h1>
      </form>
      <div>
        <Comments/>
      </div>

      <form action="">
        <h1>Habilidades</h1>
      </form>
      <div>
        <Habilitys/>
      </div>
      <form action="">
        <h1>Personalidade</h1>
      </form>
      <div>
        <Personality/>
      </div>
      <form action="">
        <h1>História</h1>
      </form>
      <div>
        <History/>
      </div>
  
    </article>
    
  )
}
