// importandi o style
import style from './post.module.css';
// criando o post
export default function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="https://cdn-icons-png.flaticon.com/256/7967/7967000.png" alt="" />
          <div className={style.authorInfo}>
            <strong>Hector Grôppo G. Monteiro</strong>
            <span>Programador Frontend</span>
            <span>Automação em Python</span>
          </div>
        </div>
      </header>
      <div className={style.content}>
        <p>Sobre Mim</p> {/* sobre mim */}
        <p>Estudei remotamente por conta própria, cursos sobre linguagem de programação python, e desenvolvimento full stack </p>
        <p>Formado profissionalmente através do senai no curso de desenvolvimento frontend</p> 
        <p>Calistenico, disciplinado, gosto de exatas, livros, games e tecnologia no geral</p>
        <p>Link Repositórios</p>
        <a href="https://github.com/HectorG9">Repositório1</a>
        <a href="https://github.com/hectorgroppo">Repositório2</a>
        <p>Ultimo Projeto</p>
        <a href="https://replicando-site-14x42jb5z-hectorg9s-projects.vercel.app/">Projeto Netflix, em andamento</a>
      </div>
      <form action="">
        <strong>Experiência Profissional</strong>
      </form>
    </article>
  )
}
