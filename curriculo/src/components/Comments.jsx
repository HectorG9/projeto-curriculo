// importando o style
import style from './comments.module.css'; 
// criando o comment
export default function Comments() {
  return (
    <div className={style.comments}>
      <img src="" alt="profile author" />
      <div className={style.commentsContent}>
            <header>
                <div>
                    <strong>Experiência 1</strong>
                </div>
            </header>
         <p>Experiência em criação de jogo no pycharm utilizando a biblioteca pygames</p> {/* insira sua experiência */}
         <p>Experiência em criação de projetos como este</p>

        </div>
    </div>
    
  );
}
