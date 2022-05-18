import React from 'react'

const Formulario = () => {
    return (
        <div className='mr-4  ml-4 sm:ml-4 md:mr-0 sm:mr-4 bg-purple-400 rounded-xl lg:w-[40%] md:w-[50%]'>
            <form action="" className='p-10'>
                <div>
                    <label>Nombre Paciente:</label>
                    <input placeholder='Nombre/Apellidos' type="text" className='border-black border-[1px] block w-full rounded-md' />
                </div>

                <div>
                    <label>Correo:</label>
                    <input placeholder='correo@gmail.com' type="text" className='border-black border-[1px] block w-full rounded-md' />
                </div>

                <div>
                    <label className='mr-10'>Síntomas:</label>
                    <textarea placeholder='Escribir los sintomas generales.' cols="30" rows="3" className='border-black border-[1px] block w-full rounded-md'></textarea>
                </div>

                <div>
                    <label>Fecha Cita:</label>
                    <input type="date" className='border-black border-[1px] block w-full rounded-md' />
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