import { perfil } from "./data/perfil.js"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero.jsx"

function App() {

  return (
  <>
  <Header usuario={perfil.usuario}/>
  <main>
    <Hero 
    nome={perfil.nome}
    cargo={perfil.cargo}
    resumo={perfil.resumo}
    cidade={perfil.cidade}
    />
  </main>
  </>
  )
}

export default App
