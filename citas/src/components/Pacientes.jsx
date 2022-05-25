const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

    const handleEliminar = () => {
        const respuesta = confirm("¿Seguro de que lo quieres eliminar? :)")
        if (respuesta) {
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className='my-4 ml-3 shadow-xl bg-[#ccdbdc] p-3 rounded-md uppercase text-gray-700 font-semibold'>
            <p>Nombre del Paciente: <span className='font-medium normal-case'>{paciente.nombre}</span></p>
            <p>Correo Electrónico: <span className='font-medium normal-case'>{paciente.correo}</span></p>
            <p>Síntomas: <span className='font-medium normal-case'>{paciente.sintomas}</span></p>
            <p>Fecha de cita: <span className='font-medium normal-case'>{paciente.fecha}</span></p>
            <div className="flex m-1 gap-5">
                <input type="button" value="Editar" onClick={() => setPaciente(paciente)} className='mt-2 border-2 border-[#003249] bg-[#007ea7] rounded-lg p-2 text-white hover:bg-[#003249] hover:cursor-pointer ease-in duration-300 w-full' />
                <input type="button" value="Eliminar" onClick={handleEliminar} className='mt-2 border-2 border-[#003249] bg-[#007ea7] rounded-lg p-2 text-white hover:bg-[#003249] hover:cursor-pointer ease-in duration-300 w-full' />
            </div>
        </div>

    )
}

export default Pacientes