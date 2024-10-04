
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
//import Tarjeta from './components/Tarjeta';


const App=() =>{

    const [empleado, setEmpleados] = useState([]);
    const urlbase = "https://localhost:7143/api/empleados/getEmpleado";

    const ConsumirApi = async () => {

        const response = await fetch(urlbase);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setEmpleados(data);
        }



    }
    useEffect(  () => {
        
        ConsumirApi();    

          
    },[]);

    return (


        <div className="row justify-content-center bg-dark-ligth mt-3">
            <div className="col sm-4">
                <div className="card">

                    <div className="card-header card text-bg-success mb-3">

                        <h3 className="card-title">lista de empleados </h3>
                    </div>


                    <div className="card-body  mt-3">
                        <table className="table table-striper  bg-ligth">
                            <thead>
                                <tr>  <th>#</th>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empleado.map((item,index) => (
                                    <tr key={item.id}>
                                        <td>{index+1 }</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td><button className="btn btn-primary ml-2">Ver</button><button className="btn btn-danger ml-2">Editar</button></td>

                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>


                    </div>
                   



                </div>
       

            </div>
            <Footer/>

    </div>
    );
}

export default App;