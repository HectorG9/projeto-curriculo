// reaproveitando o style do commment 
import style from "./comments.module.css"

export default function Habilitys() {
  return (
    <div className={style.comments}>
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*9wl_4W5IAemkH3RC.jpg" alt="profile author" />
        <div className={style.commentsContent}>
            <header>
                <div>
                    <strong>Minhas Habilidades: </strong>
                </div>
            </header>
           <p>Conhecimento em Python, React, JavaScript, HTML e CSS.</p> 
           <p>Sei fazer automações em Python</p>
           <p>Comunicativo, sei trablhar bem em equipe - Ou sozinho -, Senso de Liderança e organização</p>
        </div>
      
    </div>
  )
}
