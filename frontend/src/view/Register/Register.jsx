import './Register.css'
import { useEffect } from 'react'
import axios from 'axios'
//import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Register() {


  const navegacao = useNavigate()
  const [generos,setGenero] = useState([])

  useEffect(()=>{
      document.title = 'Registro | SGP';
      const fecthAllregistro = async () => {
      try{
          const  url = await axios.get("http://localhost:3333/genero")
          setGenero(url.data)
      } catch(err){
          console.log(err)
      } 
      }

      fecthAllregistro()
  },[])

 

  
    const[user, setUser] = useState({
      nomeCompleto :'',
      senha:'',
      telefone:'',
      email:'',
      sexoID:'',
      utilizadorID:1
    })

    const handleChange = (e) =>{
      setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
      e.preventDefault()
      try{
         await axios.post("http://localhost:3333/pessoas",user)
          
          navegacao("../../login")
      }catch(err){
        console.log(err)
      }
    }

    

    console.log(user)
    
    return (
    
         <div className='form'>
      <h2>Registro | SGP</h2>
      <div className="form-group nomeCompleto">
        <label htmlFor="nomeCompleto" >Nome Completo</label>
        <input  id='nomeCompleta' onChange={handleChange} type="text" name="nomeCompleto"  placeholder="Enter your full name"/>
      </div>
      <div className="form-group email">
        <label htmlFor='email' >E-mail</label>
        <input type="text" id="email" onChange={handleChange} name="email" placeholder="Enter your email address"/>
      </div>
      <div className="form-group telefone">
        <label htmlFor='telefone' >Número de telefone</label>
        <input type="text" id="telefone" onChange={handleChange} name="telefone" placeholder="Enter your email address"/>
      </div>
      <div className="form-group gender">
       
        <label >Genêro</label>
          <select onChange={handleChange} name='sexoID' >
          <option> selecione um genero</option>
          {generos.map((genero)=>(
          <option value={genero.sexoID}  key={genero.sexoID} >{genero.nomeGenero}</option>
          ))}
          </select>
        
      </div>

      <div className="form-group password">
        <label htmlFor='password' >Palavra Passe</label>
        <input type="password" id="password" name='senha' onChange={handleChange} placeholder="Enter your password"/>
      </div>
      <div className="form-group submit-btn">
        <input onClick={handleClick} type="submit" value="Cadastrar | usuário"/> 
      </div>
      </div>
    
    )
  }
  
  export default Register
  