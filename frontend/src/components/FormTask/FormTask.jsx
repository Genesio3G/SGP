import './../formulario/Formulario.css'
import { useEffect } from 'react'
import axios from 'axios'
//import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'



function FormTask() {
  const navegacao = useNavigate()
  const [membros,setMembros] = useState([])
  const [estados,setEstados] = useState([])
  

  const[tareafa, setTarefa] = useState({
    titulo_tarefa :'',
    descricao_tarefa:'',
    responsavel:'',
    data_inicio:'',
    data_conclusao:'',
    statusID:'',
  })

  const handleChange = (e) =>{
    setTarefa((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
       await axios.post("http://localhost:3333/tarefa",tareafa)
        
        navegacao("/home")
    }catch(err){
      console.log(err)
    }
  }



  useEffect(()=>{
    const fecthAllregistro = async () => {
    try{
        const  url = await axios.get("http://localhost:3333/pessoas")
        const  urlStatus = await axios.get("http://localhost:3333/status")
        setMembros(url.data)
        setEstados(urlStatus.data)
    } catch(err){
        console.log(err)
    } 
    }

    fecthAllregistro()
},[])


  return (
    <div className='form'>
     <div className="mb-3">
            <label  className="form-label">Titulo da Tarefa</label>
            <input type="text" onChange={handleChange} name="titulo_tarefa" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Exemplo : Sistemas de gerenciamento de projetos</div>
        </div>
        <div className="mb-3">
            <label  className="form-label">Descrição da Tarefa</label>
            <textarea  onChange={handleChange} name="descricao_tarefa" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </textarea>
            <div id="emailHelp"  className="form-text">Criar um app para gerir os projetos </div>
        </div>


       <label  className="form-label">Adicionar responsavel da Tarefa</label>
       <div className="mb-3">
       
          <select onChange={handleChange}  name='responsavel' className="form-select" aria-label="Default select example">
          <option selected>Selecione um Responsavel para a tarefa</option>
          {membros.map((membro)=>(
          <option value={membro.dadospessoaisID}  key={membro.dadospessoaisID} >{membro.nomeCompleto}</option>
          ))}
         </select>
       </div>

       
       
       
        <div className="mb-3">
            <label  className="form-label">Data do inicio da tarefa</label>
            <input  onChange={handleChange} type="date" name="data_inicio" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Data de conclusão da tarefa</label>
            <input  onChange={handleChange} type="date" name="data_conclusao" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
        <label  className="form-label">Status</label>
        <select name='statusID' onChange={handleChange} className="form-select" aria-label="Default select example">
                <option selected>Selecione um terefa</option>
                {estados.map((estado)=>(
          <option value={estado.statusID}  key={estado.statusID} >{estado.nomeStatus}</option>
          ))}
        </select>
        </div>


        <input value="Cadastrar nova | Tarefa" onClick={handleClick} type="submit" className="btn btn-primary"/>
    </div>
  )
}

export default FormTask

