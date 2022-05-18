import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import { useState, useEffect } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})


  return (
    <div>
      <Cabecera />
      <div className="mt-12 md:flex gap-4">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
        />
        <Listado
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App

//npm run build
// hacer una cuenta de netlify
// en los sites arrastrar el dist
// lighthouse *bruh*