import React from 'react'
import Pacientes from './Pacientes'

const Listado = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className='mr-4  ml-4 mt-4 mb-4 md:mt-0 bg-purple-400 rounded-xl p-4 md:w-[50%] lg:w-[60%] h-fit'>
            <h2 className='text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mt-5 p-2'>Administra tus <span className='font-bold text-purple-800'>Pacientes y Citas</span></p>
            <div className='flex flex-col-reverse md:overflow-y-scroll pr-4 md:h-[282px] lg:h-[282px] rounded-xl'>
                {
                    pacientes.map(paciente => (
                        <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Listado