import { perfil } from "./data/perfil.js"
import Header from "./components/Header/Header"

function App() {

  return (
  <>
  <Header usuario={perfil.usuario}/>
  </>
  )
}

export default App
