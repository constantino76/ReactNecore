
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
//import Tarjeta from './components/Tarjeta';


function App() {
    let Persona={

        nombre:"juanito",
        edad:24,
    correo:"juanito21@gmail.com"}

    const [numero, setNumero] = useState(0);
    const [persona, setPersona] = useState(Persona);
    return (
        <div className=" container-fluid">
            <div className="row justify-content-sm-center mt-2 ">
                <div className="col-sm-4  bg-dark">

                    {/*<Tarjeta*/}
                    {/*    titulo="Bienvenido"*/}
                    {/*    parrafo="Esta es mi primera pagina en react"*/}
                    {/*    textoboton="Suscribete">*/}
                    {/*    <a className="btn btn-success">prueba</a>*/}

                    {/*   </Tarjeta>*/}

                    {/*<Tarjeta*/}
                    {/*    titulo="Bienvenido"*/}
                    {/*    parrafo="Esta es mi primera pagina en react"*/}
                    {/*    textoboton="Suscribete para mas contenido" >*/}
                    {/*    <a className="btn btn-success">prueba</a>*/}

                    {/*</Tarjeta>*/}

                    <h2 className="text-warning">Valor :{numero}</h2>

                    <button  className="btn btn-danger" onClick={
                              () =>setNumero(numero+1)
                        }>Sumar +1</button>

                    <br></br>  <br></br>

                    <h4>Datos personales</h4>

                    <p className="text-info"> Nombre: {persona.nombre}
                        <br></br>

                     Edad: { persona.edad}
                        <br></br>
                      Correo:  { persona.correo}

                    </p>
                    <button className="btn btn-success" onClick={() => setPersona(

                        {
                            ...persona, correo: "juan54@outlot.com"
                                      ,edad: 26,
                               

                        }

                    )}>Modificar correo y edad</button>
                </div>

            </div>
       

    </div>
    )
    
}

export default App;