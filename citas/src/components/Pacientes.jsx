const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

    return (
        <div className='mt-5 shadow-xl bg-purple-200 p-8 rounded-md uppercase mb-3'>
            <p className='text-pink-800'>Nombre del Paciente: <span className='font-normal normal-case'>{paciente.nombre}</span></p>
            <p className='text-pink-800'>Correo Electrónico: <span className='font-normal normal-case'>{paciente.correo}</span></p>
            <p className='text-pink-800'>Síntomas: <span className='font-normal normal-case'>{paciente.sintomas}</span></p>
            <p className='text-pink-800'>Fecha de cita: <span className='font-normal normal-case'>{paciente.fecha}</span></p>
            <div className="flex m-1 gap-5">
                <input type="button" value="Editar" onClick={() => setPaciente(paciente)} className='mt-2 border-2 border-purple-800 bg-purple-600 rounded-lg p-2 text-white hover:bg-purple-700 hover:cursor-pointer w-full' />
                <input type="button" value="Eliminar" onClick={() => eliminarPaciente(paciente.id)} className='mt-2 border-2 border-purple-800 bg-purple-600 rounded-lg p-2 text-white hover:bg-purple-700 hover:cursor-pointer w-full' />
            </div>
        </div>

    )
}

export default Pacientes