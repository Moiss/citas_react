import { useState, useEffect } from "react";

import Header from "./componets/header"
import Formulario from "./componets/Formulario";
import ListadoPacientes from "./componets/ListadoPacientes";


//Esta es la funcion Principal
function App() {
  //Esto es para controlar el estado de los pacientes, los pacientes son un arreglo, hook.
  const [pacientes,setPacientes] = useState([]);
  //Esto es para pasar solo un paciente del arreglo, y se controla el estado de ese paciente
  const [paciente,setPaciente] = useState({});


useEffect(() => {
  const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    //console.log(pacientesLS)
    setPacientes(pacientesLS);
  }

  obtenerLS();
}, []);


useEffect(() => {
  localStorage.setItem('pacientes',JSON.stringify( pacientes ));
 }, [pacientes])


  const eliminarPaciente = (id)=>{
      const pacientesActualizados=pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      {/* Se manada llamara el componente header*/ }
      <Header />
      <div className="mt-12 md:flex">
        {/* Aqui mandamos llamar al componente formulario y le pasamos tres parametro de propiedades del state */}
        <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
        />
        {/* Aqui mandamos llamar al componente Pacientes y le pasamos variables o propiedades del state */}
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        
        
      </div>
     
    </div>
  )
}

export default App;
