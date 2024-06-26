// importando o style
import style from './comments.module.css'; 

// criando o comment
export default function Comments() {
  return (
    <div className={style.comments}>
      <img src="https://miro.medium.com/v2/resize:fit:1400/0*9wl_4W5IAemkH3RC.jpg" alt="profile author" />
      <div className={style.commentsContent}>
          <header>
              <div>
                  <strong>Experiência</strong>
              </div>
          </header>
          <p>Experiência em criação de jogo no pycharm utilizando a biblioteca pygames</p> {/* insira sua experiência */}
          <p>Experiência em criação de projetos como este</p>
      </div>
    </div>
    
  );
}
