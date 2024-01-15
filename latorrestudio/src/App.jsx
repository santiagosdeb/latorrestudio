import NavBar from "./components/NavBar"
import Home from "./views/Home"
import Turnos from "./views/Turnos"
import Cortes from "./views/Cortes"
import Ubicacion from "./views/Ubicacion"

function App() {

  return (
    <div className="flex">
      <NavBar />
      <div className="">
        <Home />
        <Turnos />
        <Cortes />
        <Ubicacion />
      </div>
    </div>
  )
}

export default App
