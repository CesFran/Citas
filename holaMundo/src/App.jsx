import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"

function App() {
  return (
    <div>
      <Cabecera />
      <div className="mt-12 md:flex gap-4">
        <Formulario />
        <Listado />
      </div>
    </div>
  )
}

export default App


{/* <div className="text-white font-Arsenal mx-[18%]">
      <div className="bg-gradient-to-r from-[#f74545] via-pink-500 to-purple-500 mt-8 mb-8 mx-auto rounded-lg flex flex-col justify-center">
        <div className="flex flex-col md:flex-row mt-[10px] pl-10 h-[220px] mb-1 pb-1">
          <div className="px-[110px] relative top-[0] left-[0]">
            <img id="fondoPerfil" src="img/doodle-back.webp" alt="fondo de perfil" className="h-[220px] w-[220px] object-cover rounded-[100%] absolute top-[0] left-[0]" />
            <img src="img/foto.webp" alt="foto de perfil" className="h-[150px] w-[150px] object-cover rounded-[100%] absolute top-[40px] left-[40px]" />
          </div>
          <div className="mb-1 pt-48 md:pt-20">
            <p className="text-5xl font-bold">Cesar Francisco Ramos Leal</p>
            <p className="text-2xl pl-1 mb-4">Estudiante de Ingenieria en Sistemas Computacionales</p>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-40 md:pt-1 sm:pt-40 mb-5 md:flex-row mx-10">
          <div className="pr-10 max-w-sm">
            <p className="text-2xl font-bold">Experiencia Académica</p>
            <p className="text-xl font-bold pt-3">Diseño de Circuitos Eléctricos</p>
            <p className="text-base text-justify">En secundaria entré al taller de Electricidad donde se me enseñó a diseñar circuitos eléctricos, llevar a cabo la intalación y el mantenimiento del mismo.</p>
            <p className="text-xl font-bold pt-3">Programación Estructurada</p>
            <p className="text-base text-justify">En la preparatoria al llevar la especialidad de programación se me enseñó a programar de manera estructurada utilizando el lenguaje C++, y mediante la práctica he desarrollado una mejor lógica para programar de esta manera.</p>

            <p className="text-2xl font-bold pt-3">Educación</p>
            <p className="text-xl font-bold pt-3">Preparatoria</p>
            <p className="text-base">Centro de Bachillerato Tecnológico Industrial y de Servicios No. 41</p>
            <p className="text-base">Especialidad: Programación</p>
            <p className="text-xl font-bold pt-3">Universidad</p>
            <p className="text-base">Instituto Tecnológico de Ensenada</p>
            <p className="text-base">Carrera: Ingenieria en Sistemas Computacionales</p>
          </div>
          <div className="pl-10 pt-[10%]">
            <img id="fondoPerfil" src="img/blob.webp" alt="fondo de perfil" className="h-[50px] w-[180px] object-fill relative top-[-30px] left-[15px]" />
            <p className="text-2xl font-bold">Habilidades Personales</p>
            <ul className="text-base">
              <li>• Responsable</li>
              <li>• Manejo de Tiempos</li>
              <li>• Adaptabilidad</li>
              <li>• Honesto</li>
            </ul>
            <p className="text-2xl font-bold pt-3">Contacto</p>
            <p className="text-base">Gmail: al207604@ite.edu.mx</p>
            <p className="text-base">Celular: 646-130-7740</p>
            <img id="fondoPerfil" src="img/blob.webp" alt="fondo de perfil" className="h-[50px] w-[180px] object-fill relative rotate-180 top-[30px] left-[15px]" />
          </div>
        </div>
      </div>
    </div> */}


//npm run build
// hacer una cuenta de netlify
// en los sites arrastrar el dist
// lighthouse *bruh*