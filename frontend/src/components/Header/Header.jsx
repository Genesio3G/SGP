
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import  './Header.css'

function Header() {

  const navegacao = useNavigate()
  
  const[autenticado,setAutenticado]=useState(false)
  const[name,setName]=useState('')
  const[err,setErr]=useState('')
  const[email,setEmail]=useState('')
  
useEffect(()=>{
          axios.get('http://localhost:3333/').then(response=>{
              if(response.data.Status){
                  setAutenticado(true)
                  setName(response.data.name)
                  setEmail(response.data.email)
                  
              }else{
                  setAutenticado(false)
                  setErr(response.data.err)
                  console.log(err)
                  
              }
          }).catch()
      })


      const handleExit = () =>{
          axios.get('http://localhost:3333/logout').then(response=>{
              if(response.data.Status === 'Sucess'){
                  navegacao('/login')
                  location.reload(true)
              }else{
                  alert('error')
              }
          }).catch(err=> console.log(err))
      }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand" >Gerenciamento de Projeto</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page"to="/home">Pagina Inicial</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projeto">Projetos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tarefa">Tarefas</Link>
          </li>
          
        </ul>
                   
        <div>
            {
                autenticado?
                <div className='Navleft'>
                    <a className="d-flex">{email}</a>
                    <button className="btn btn-danger" onClick={handleExit} ><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                </div>
                :
                <p>{err}</p>
            }
        </div>
                
                 

      </div>
    </div>
  </nav>
  )
}

export default Header
