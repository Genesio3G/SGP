import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import img from '../../assets/icon_pasta.png'
import { Link } from "react-router-dom"
import  './Home.css'
import  { useEffect } from 'react';
import axios from "axios"
import { Outlet } from "react-router-dom"
import { useState } from "react"

function Home() {
  
  const[email,setEmail]=useState([])
  const [projetos,setProjetos] = useState([])

  useEffect(()=>{
    document.title='Home | SGP'
    const fecthAllregistro = async () => {
    try{
        const  url = await axios.get("http://localhost:3333/pessoas",email)
        const  urlProjetos = await axios.get("http://localhost:3333/projeto")
        setEmail(url.data)
        setProjetos(urlProjetos.data)
    } catch(err){
        console.log(err)
    } 
    }

    fecthAllregistro()
},[])



    return (
     <div>
        <Header/>
   
        <div className="container center top">
        {projetos.map((projeto)=>(
        <div  key={projeto.projetoID}className="card" style={{width: "15rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            
            <div    className="card-body"> 
           
                <h5 className="card-title">{projeto.titulo_projeto}</h5>
                <p className="card-text">
                  {projeto.descricao_projeto}
                  <small>membros:{projeto.membro} </small>
                </p>
                <Link to={`/details/${projeto.projetoID}`} className="btn btn-primary">Detalhes | projetos</Link>
            </div> 
      </div> ))}
    </div>
        <Outlet/>
        <Footer/>

     </div>
    )
  }
  
  export default Home
  