import { useEffect,useState } from "react";
import Paciente from "./Paciente";
import Error from "./Error";

// Aqui el componente formulario recibe 3 variables o propiedades
const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
  //Aqui declaramos el state para cada una de las variable y con que "funcion" se podra cambiar el valor de la variable 
  const[nombre,setNombre] = useState('');
  const[propietario,setPropietario] = useState('');
  const[email,setEmail] = useState('');
  const[fecha,setFecha] = useState('');
  const[sintomas,setSintomas] = useState('');
  const[error,setError] = useState(false);


  //El useEffect es para controlar lo que esta cambiando en este caso el que cambia es el paciente, y cuando este cambia se ejecuta lo que esta en use effect
  useEffect (()=>{
    if(Object.keys(pacientes).length > 0){
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setSintomas(paciente.sintomas);
    }
  },[paciente]);

  

  

//Funcion para generar un id o key para el objetopaciente es como su id unico de una bd
  const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      console.log(random);
      const fecha = Date.now().toString(36);
      console.log(fecha);
      const id= random + fecha

      return id
  }


  //Esta funcion controla cuando se hace submit en el boton de envio del formulario
  //la funcion recibe una variable de evento 
  const handleSubmit=(e) =>{
    /* 
      Para evitar que se recargue el browser ya que al hacer submit se recarga el browser y no queremos porque se quiere
      mantener los datos, por defecto react ya lo hace pero no esta por demas, je je je je.
    */
    e.preventDefault(); 

    //Validacion del formulario
    if([nombre,propietario,email,fecha,sintomas].includes('')){
        setError(true);
        return;
    }
      setError(false);
      //se declara un objeto paciente que es donde se va a recibir cada uno de los valores del formulario
      //Faltaria agregar el id pero ese se agrega al momento de crearlo.
      const objPaciente={
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      //Aqui se hace la comparativa si el valor que recibe del hook paciente ya tiene un id 
      //quiere decir que se quiere actualizar esa posicion del arreglo
      if(paciente.id){
        
        // aqui se crea el id en el objeto paciente delo que ya trae el paciente y se actualiza el nuevo objeto
        objPaciente.id=paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id==paciente.id ? objPaciente : pacienteState);
        setPacientes(pacientesActualizados);
        setPaciente({});

      }else{
        //console.log('nuevo Registro')
        objPaciente.id=generarId();
        // se agrega el spreadOperator para no modificar el array original, y se agrega el nuevo paciente
        setPacientes([...pacientes,objPaciente]);
      }
      
      
      

      //Reiniciar formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    

    
  }

 return (
    <>
     <div className="md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {' '} 
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10" 
        >
          {error && <Error><p>Todos los campos son obligatorios</p> </Error> }
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">Nombre Mascota</label>
            <input id="mascota" type="text" 
                    placeholder="Nombre de la mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ic" 
                    value={nombre} onChange={ (e)=>setNombre(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input id="propietario" type="text" placeholder="Nombre del propietario" 
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                   value={propietario}
                   onChange={(e)=>setPropietario(e.target.value)}
                   />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input id="email" type="email" 
                   placeholder="Email Contacto" 
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   />
          </div>
          <div className="mb-5">
            <label htmlFor="fechaalta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
            <input id="fechaalta" type="date" 
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                   value={fecha}
                   onChange={(e)=>setFecha(e.target.value)}
                   />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea id="sintomas" placeholder="Describe los sintomas de tu mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
            />
          </div>
          < input
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all" 
                value={paciente.id ? 'Editar Paciente' : 'Registar Paciente' } 
          />
        </form>
      </div>
    </>
  )
}

export default Formulario;
