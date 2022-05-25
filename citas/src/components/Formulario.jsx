import { useState, useEffect } from 'react'

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

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
        }

        if (paciente.id) { // Actualizar
            objetoPaciente.id = paciente.id
            console.log(objetoPaciente);
            console.log(paciente);
            const pacientesActualizados = pacientes.map(original => original.id === paciente.id ? objetoPaciente : original)
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else { // Agregar
            objetoPaciente.id = generarID()
            setPacientes([...pacientes, objetoPaciente])
        }

        limpiarDatos()
    }

    return (
        <div className='text-xl mr-4 ml-4 sm:ml-4 md:mr-0 sm:mr-4 bg-[#80ced7] rounded-xl lg:w-[40%] md:w-[50%] h-fit border-[#003249] border-2 border-dashed'>
            <h2 className='text-3xl text-center underline underline-offset-8 pt-[16px]'>Registro Paciente</h2>
            <p className='text-xl px-10 mt-5 p-2'>Escribe los datos del <span className='font-bold text-[#003249]'>Paciente</span></p>
            <form action="" className='p-10 pt-0 ' onSubmit={validarFormulario}>
                {error && <p className='text-white text-center m-0 mx-4 mb-4 py-1 bg-[#003249] underline rounded-3xl'>Se requiere llenar todos los campos.</p>}
                <div>
                    <label className=''>Nombre Paciente:</label>
                    <input id='Nombre' placeholder='Nombre/Apellidos' type="text" className='border-black border-[1px] block w-full rounded-md p-1 mt-1' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='mt-2'>
                    <label>Correo:</label>
                    <input id='Correo' placeholder='correo@gmail.com' type="email" className='border-black border-[1px] block w-full rounded-md p-1' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>

                <div className='mt-2'>
                    <label className='mr-10'>Síntomas:</label>
                    <textarea id='Sintomas' placeholder='Escribir los síntomas generales.' cols="30" rows="3" className='border-black border-[1px] p-1 block w-full rounded-md' value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
                </div>

                <div className='mt-2'>
                    <label>Fecha Cita:</label>
                    <input id='Fecha' type="date" className='border-black border-[1px] block w-full rounded-md p-1' value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>

                <div className='mt-2'>
                    <input type="submit" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} className='mt-2 border-2 border-[#003249] bg-[#007ea7] rounded-lg p-2 text-white hover:bg-[#003249] hover:cursor-pointer ease-in duration-300 w-full' />
                </div>
            </form>
        </div>
    )
}

export default Formulario

//rafce