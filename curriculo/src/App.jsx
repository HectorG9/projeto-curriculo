// importando os componentes 
import Header from './components/Header'
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import Comments from './components/Comments'
import styles from './app.module.css' // importando o styles
import './styles.global.css'
function App() {
  return (
    <>
    {/* Criando a estrutura */}
    <div>
      <Header/>
      <div className={styles.wrapper}> {/* nomear a classe */}
        <Sidebar/>
        <main>
          <Post/>
  
        </main>
      </div>
    </div>
    </>
  )
}

export default App
