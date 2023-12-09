import Header from '../../components/Header/Header'
import Formulario from '../../components/formulario/Formulario'
import './Projeto.css'
import  { useEffect } from 'react';


function Projeto() {
  useEffect(() => {
    document.title = 'Projeto | SGP';
  }, []);
  
  return (
    
    <div>
      <Header/>
      <Formulario/>
    </div>
  )
}

export default Projeto
