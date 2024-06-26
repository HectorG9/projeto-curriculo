import style from './comments.module.css';

export default function Personality() {
  return (
    <div>
      <div className={style.comments}>
      <img src="https://miro.medium.com/v2/resize:fit:1400/0*9wl_4W5IAemkH3RC.jpg" alt="profile author" />
      <div className={style.commentsContent}>
          <header>
              <div>
                  <strong>Personalidade</strong>
              </div>
          </header>
          <p>Sou uma pessoa focada, calma e educada, muitas vezes priorizo a elegância e o auto cuidado. Gosto de ajudar sempre que possível, e adquirir expêriencia e conhecimento sempre.
          Gosto de Treinar, Estudar, e ser produtivo</p> {/* insira sua experiência */}
          <p className={style.frase}>Conhecimento é poder <br /><sub> - Me</sub></p>
          <p className={style.frase}>Provérbios 18:24</p>
          <p className={style.frase}>algumas amizades não duram quase nada, mas um verdadeiro amigo é mais chegado que um irmão</p>
      </div>
    </div>
    </div>
  )
}
