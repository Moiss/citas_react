const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  const { nombre, propietario, email, fecha, sintomas,id } = paciente;

  const handleEliminar=()=>{
   const respuesta=confirm('Deseas Eliminar el paciente');

   if(respuesta){
      eliminarPaciente(id)
   }
  }

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase mb-3 text-gray-700">Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold uppercase mb-3 text-gray-700">Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold uppercase mb-3 text-gray-700">Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold uppercase mb-3 text-gray-700">Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold uppercase mb-3 text-gray-700">Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-400 text-white uppercase rounded-md"
        onClick={()=>setPaciente(paciente)}
        >Editar</button>
        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-400 text-white uppercase rounded-md"
        onClick={handleEliminar}
        >Borrar</button>
      </div>
    </div>
  );
};

export default Paciente;
