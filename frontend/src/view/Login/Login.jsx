import img from '../../assets/key.png'
import '../Login/Login.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';

function Login() {


  const navegacao = useNavigate()
  const [user,setUser] = useState({
    email:'',
    senha:'',
})

  const handleChange = (e) =>{
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  axios.defaults.withCredentials=true;

  const handleSubimit = (e) => {
    e.preventDefault();
       axios.post("http://localhost:3333/login",user).then(response =>{
        if(response.data.Status === 'Sucess'){
          navegacao("/home")
        }else{
          alert(response.data.err)
        }
       }).catch(err=>console.log(err))
        
  }

 

  useEffect(() => {
    document.title = 'Entrar | SGP';
  }, []);

  console.log(user)
    return (
        <div className="container">
        <div className="cover">
          <div className="front">
          <img src={img} alt=""/> 
          </div>
         
        </div>
        <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Entrar | SGP</div>
              <form onSubmit={handleSubimit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input onChange={handleChange} type="text" name='email' placeholder="Digite seu email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" onChange={handleChange} name='senha' placeholder="Digite sua palavara-passe" required/>

                  </div>
                  <div className="text"><a href="#">Esqueceu sua senha?</a></div>
                  <div className="button input-box">
                  <input type="submit" value="Acessar"/>

                  </div>
                  <div className="text sign-up-text">Não tenho uma conta? <Link to="/register">Cadastre-se agora</Link></div>
                </div>
            </form>
          </div>
      
        </div>
        </div>
      </div>  
    )
  }
  
  export default Login
  