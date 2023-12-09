import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"
//import { Link } from "react-router-dom"
import  { useEffect } from 'react';

function Details() {

    useEffect(() => {
        document.title = 'Detalhes | SGP';
      }, []);

  return (
    <div>
         <Header/>
       
                <div className="row top">
                    <div className="col-8">
                    <div className="card" style={{ width: "85%" }}>
                        <div className="card-header">
                           <p className="fs-4">Projeto nº 125</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <a className="btn btn-primary">Editar | Projeto</a>
                        <button type="button" className="btn btn-danger">Apagar | Projeto</button>
                        
                    </div>
                    </div>
                     <div className="col-4">
                     <p className="fs-4">Membros do projeto</p>
                    <ul>
                        <li>Genesio Gabriel</li>
                        <li>Genesio Gabriel</li>
                        <li>Genesio Gabriel</li>
                        <li>Genesio Gabriel</li>
                    </ul>
                     </div>
           
            </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Details
