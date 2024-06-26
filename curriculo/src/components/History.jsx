// reaproveitando o style do comment
import style from   './comments.module.css'
export default function History() {
  return (
    <div>
      <div className={style.comments}>
      <img src="https://miro.medium.com/v2/resize:fit:1400/0*9wl_4W5IAemkH3RC.jpg" alt="profile author" />
      <div className={style.commentsContent}>
          <header>
              <div>
                  <strong>Minha História:</strong>
              </div>
          </header>
          <p>Sempre gostei muito de jogos, e vivia me perguntando que profissão eu seguiria, afinal sempre tive muitos interesses e dúvidas. Em determinado momento da minha vida refletindo sobre minha possível carreira profissional, descobri que tecnologia era minha área de interesse, e como Aristóteles uma vez disse: </p>
          <p className={style.frase}>Quando os seus talentos encontram a necessidade do mundo, ali está sua vocação <br /> - Aristóteles</p>
          <p>Assim, comecei a buscar conhecimentos e estudos na área, para de alguma forma no futuro, causar um impacto positivo na sociedade. Foi assim que comecei a buscar cursos, e como eu não havia boas condições financeiras, procurei por materiais grátuitos na internet sobre programação, e foi assim que encontrei o canal do curso em vídeo - Minha porta de entrada para esse "mundo" -, desde então estou na busca por melhorar cada vez mais minhas habilidades.</p>
      </div>
    </div>
    </div>
  )
}
