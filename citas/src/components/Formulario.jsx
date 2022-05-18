import { useState, useEffect } from 'react'

const Formulario = ({ setPacientes, pacientes, paciente }) => {

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [fecha, setFecha] = useState("")

    const [error, setError] = useState(false)


    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setCorreo(paciente.correo);
            setSintomas(paciente.sintomas);
            setFecha(paciente.fecha);
        }
    }, [paciente])

    const validarFormulario = (e) => {
        e.preventDefault()
        if ([nombre, correo, sintomas, fecha].includes("")) {
            setError(true)
            return
        }
        // Se coloca en falso al no haber un campo vacío.
        setError(false)

        const generarID = () => {
            const random = Math.random().toString(16).substring(2)
            const fecha = Date.now().toString(36)
            return random + fecha
        }

        const limpiarDatos = () => {
            setNombre("")
            setCorreo("")
            setSintomas("")
            setFecha("")
        }

        const objetoPaciente = {
            nombre,
            correo,
            sintomas,
            fecha,
            id: generarID()
        }

        setPacientes([...pacientes, objetoPaciente])
        limpiarDatos()
    }

    return (
        <div className='mr-4  ml-4 sm:ml-4 md:mr-0 sm:mr-4 bg-purple-400 rounded-xl lg:w-[40%] md:w-[50%] h-fit'>
            <form action="" className='p-10' onSubmit={validarFormulario}>
                {error && <p className='text-red-200 text-center m-0 mx-20 mb-4 py-1 bg-pink-800 underline rounded-3xl'>Se requiere llenar todos los campos.</p>}
                <div>
                    <label>Nombre Paciente:</label>
                    <input id='Nombre' placeholder='Nombre/Apellidos' type="text" className='border-black border-[1px] block w-full rounded-md p-1' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label>Correo:</label>
                    <input id='Correo' placeholder='correo@gmail.com' type="text" className='border-black border-[1px] block w-full rounded-md p-1' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>

                <div>
                    <label className='mr-10'>Síntomas:</label>
                    <textarea id='Sintomas' placeholder='Escribir los sintomas generales.' cols="30" rows="3" className='border-black border-[1px] p-1 block w-full rounded-md' value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
                </div>

                <div>
                    <label>Fecha Cita:</label>
                    <input id='Fecha' type="date" className='border-black border-[1px] block w-full rounded-md p-1' value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value="Agendar" className='mt-2 border-2 border-purple-800 bg-purple-600 rounded-lg p-2 text-white hover:bg-purple-700 hover:cursor-pointer w-full' />
                </div>
            </form>
        </div>
    )
}

export default Formulario

//rafce