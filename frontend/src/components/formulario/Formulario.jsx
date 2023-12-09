import './Formulario.css'
import { useEffect } from 'react'
import axios from 'axios'
//import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'



function Formulario() {
  const navegacao = useNavigate()
  const [membros,setMembros] = useState([])
  const [tarefas,setTarefas] = useState([])
  
  

  const[projeto, setProjeto] = useState({
    titulo_projeto :'',
    descricao_projeto:'',
    membro:'',
    tarefaID:'',
    data_inicio:'',
    data_conclusao:''
  })

  const handleChange = (e) =>{
    setProjeto((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
       await axios.post("http://localhost:3333/projetos",projeto)
        
        navegacao("/home")
    }catch(err){
      console.log(err)
    }
  }



  useEffect(()=>{
    const fecthAllregistro = async () => {
    try{
        const  url = await axios.get("http://localhost:3333/pessoas")
        const  urlTask = await axios.get("http://localhost:3333/tarefa")
        setMembros(url.data)
        setTarefas(urlTask.data)
    } catch(err){
        console.log(err)
    } 
    }

    fecthAllregistro()
},[])


  return (
    <div className='form'>
     <div className="mb-3">
            <label  className="form-label">Titulo do Projeto</label>
            <input type="text" onChange={handleChange} name="titulo_projeto" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Exemplo : Sistemas de gerenciamento de projetos</div>
        </div>
        <div className="mb-3">
            <label  className="form-label">Descrição do Projeto</label>
            <textarea  onChange={handleChange} name="descricao_projeto" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </textarea>
            <div id="emailHelp"  className="form-text">Criar um app para gerir os projetos </div>
        </div>


       <label  className="form-label">Adicionar membros ao Projeto</label>
       <div className="mb-3">
          
          <select onChange={handleChange}  name='membro' className="form-select" aria-label="Default select example">
          {membros.map((membro)=>(
          <option value={membro.dadospessoaisID}  key={membro.dadospessoaisID} >{membro.nomeCompleto}</option>
          ))}
         </select>
       </div>

       
       
       
        <div className="mb-3">
            <label  className="form-label">Data do inicio do Projeto</label>
            <input  onChange={handleChange} type="date" name="data_inicio" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Data de conclusão do Projeto</label>
            <input  onChange={handleChange} type="date" name="data_conclusao" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
        <label  className="form-label">Adicionar tarefa ao projeto <span className="task"><a href="#">criar tarefa</a></span></label>
        <select name='tarefaID' onChange={handleChange} className="form-select" aria-label="Default select example">
                <option selected>Selecione um terefa</option>
                {tarefas.map((tarefa)=>(
          <option value={tarefa.tarefaID}  key={tarefa.tarefaID} >{tarefa.titulo_tarefa}</option>
          ))}
        </select>
        </div>


        <input value="Cadastrar novo | Projeto" onClick={handleClick} type="submit" className="btn btn-primary"/>
    </div>
  )
}

export default Formulario

