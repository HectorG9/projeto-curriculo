// Importando o Style
import style from './sidebar.module.css';

// criando sidebar
export default function Sidebar() {
  return (
     <aside className={style.sidebar}> {/*configuração para todo o aside/sidebar*/}
      <img className={style.cover} src="https://blog.hubdodesenvolvedor.com.br/wp-content/uploads/2024/03/capa-linguagens-em-alta.jpg" alt="" />
      <div className={style.profile}>
        <img className={style.avatar} src="https://cdn-icons-png.flaticon.com/256/7967/7967000.png" alt="" />
        <strong>Hector Grôppo G. Monteiro</strong>
        <span>Desenvolvimento Front End</span>
        <span>Análise de dados com Python</span>
      </div>
      <footer>
        <a href="https://github.com/HectorG9">Meu Github</a>
      </footer>
    </aside>
  )
}
