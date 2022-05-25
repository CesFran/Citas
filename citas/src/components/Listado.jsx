import React from 'react'
import Pacientes from './Pacientes'

const Listado = ({ pacientes, setPaciente, eliminarPaciente }) => { // Agrega eliminarPaciente en la parte de arriba en listado.jsx

    return (
        <div className='m-4 md:mt-0 bg-[#80ced7] rounded-xl p-4 md:w-[50%] lg:w-[60%] mb-0 border-[#003249] border-2 border-dashed'>
            <h2 className='text-3xl text-center underline underline-offset-8'>Listado Pacientes</h2>
            <p className='text-xl mt-5 p-2'>Administra tus <span className='font-bold text-[#003249]'>Pacientes y Citas</span></p>
            <div className='md:overflow-y-scroll pr-4 rounded-xl bg-slate-200 md:h-[415px] py-1'>
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