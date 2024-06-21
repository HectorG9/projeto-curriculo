// importando o style
import style from './post.module.css';
// importando o component comments 
import Comments from './Comments'
// criando o post
export default function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="https://cdn-icons-png.flaticon.com/256/7967/7967000.png" alt="author " />
          <div className={style.authorInfo}>
            <strong>Hector Grôppo G. Monteiro</strong>
            <span>Programador Frontend</span>
            <span>Automação em Python</span>
          </div>
        </div>
      </header>
      <div className={style.content}>
        <h2>Sobre Mim</h2> {/* sobre mim */}
        <p>Estudei remotamente por conta própria, cursos sobre linguagem de programação python, e desenvolvimento full stack.</p>
        <p>Formado profissionalmente através do senai no curso de desenvolvimento frontend</p> 
        <p>Calistenico, disciplinado, gosto de exatas, livros, games e tecnologia no geral</p>
        <h2>Link Repositórios</h2>
        <a href="https://github.com/HectorG9">Repositório1</a>
        <a href="https://github.com/hectorgroppo">Repositório2</a>
        <h2>Ultimo Projeto</h2>
        <a href="https://replicando-site-14x42jb5z-hectorg9s-projects.vercel.app/">Projeto Netflix, em andamento</a>
      </div>
      <form action="">
        <strong>Experiência Profissional</strong>
      </form>
      <div>
        <Comments/>
      </div>
    </article>
  )
}
