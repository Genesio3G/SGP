import  express, { request, response }  from "express"
import mysql from "mysql"
import cors from "cors"
import  jwt  from "jsonwebtoken"
import session from "express-session"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manfifagnesio1@",
    database:'sgp'
})

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST,GET"],
    credentials:true
}))
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24
    }
}))

//GENERO
app.get("/genero", (request, response)=>{
    const genero = "Select * from genero"
    db.query(genero,(err,data)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
   
})

//STATUS
app.get("/status", (request, response)=>{
    const status = "Select * from status"
    db.query(status,(err,data)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
   
})

//USUARIO
app.post("/pessoas", (req, response)=>{
    const pessoas = "INSERT INTO dados_pessoais (`nomeCompleto`, `senha`, `telefone`, `email` ,`sexoID`,`utilizadorID`) VALUES (?)"; 
    const values =[
        req.body.nomeCompleto,
        req.body.senha,
        req.body.telefone,
        req.body.email,
        req.body.sexoID,
        req.body.utilizadorID,
    ]
    db.query(pessoas, [values] , (err, data)=>{
        if(err) return response.json(err);
        return response.json(data)
    })
   
})
app.get("/pessoas", (request, response)=>{
    const pessoa = "Select  * FROM dados_pessoais"
    db.query(pessoa,(err,data)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
   
})


//PROJETO
app.post("/projetos", (req, response)=>{
    const pessoas = "INSERT INTO projeto (`titulo_projeto`, `descricao_projeto`, `membro`, `tarefaID` ,`data_inicio`,`data_conclusao`) VALUES (?)"; 
    const values =[
        req.body.titulo_projeto,
        req.body.descricao_projeto,
        req.body.membro,
        req.body.tarefaID,
        req.body.data_inicio,
        req.body.data_conclusao,
    ]
    db.query(pessoas, [values] , (err, data)=>{
        if(err) return response.json(err);
        return response.json(data)
    })
   
})

app.get("/projeto/:id", (request, response)=>{
    const sql = "Select * from projeto WHERE projetoID = ?"
    const id = request.body.id
    db.query(sql, id, (err,data)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
   
})

app.get("/projeto", (request, response)=>{
    const sql = "SELECT * FROM projeto inner join dados_pessoais on projeto.membro = dados_pessoais.dadospessoaisID inner join tarefa on projeto.tarefaID = tarefa.tarefaID"
    db.query(sql, (err,data)=>{
        if(err) return response.json(err)
        return response.json(data)
   
    })
   
})



//TAREFA
app.get("/tarefa", (request, response)=>{
    const task = "Select * from tarefa"
    db.query(task,(err,data)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
   
})
app.post("/tarefa", (req, response)=>{
    const task = "INSERT INTO tarefa (`titulo_tarefa`, `descricao_tarefa`, `responsavel`,`data_inicio`,`data_conclusao`, `statusID`) VALUES (?)"; 
    const values =[
        req.body.titulo_tarefa,
        req.body.descricao_tarefa,
        req.body.responsavel,
        req.body.data_inicio,
        req.body.data_conclusao,
        req.body.statusID,
    ]
    db.query(task, [values] , (err, data)=>{
        if(err) return response.json(err);
        return response.json(data)
    })
   
})

//LOGIN
const verificarUser = (request,response, next) =>{
    const token = request.cookies.token;
    if(!token){
        return response.json({err:'Precisamos de um token, por favor, forneça-o'})
    }else{
        jwt.verify(token, "jwt-secret-key",(err,decoded)=>{
            if(err){
                return response.json({err:'Erro de autenticação'})
            }else{
                request.email = decoded.email;
                next();
            }
        })
    }
}

app.get('/',verificarUser,(request,response)=>{
    return response.json({Status:'Sucess', email : request.email})
})



app.post('/login',(request,response) => {
    const login = "SELECT * FROM dados_pessoais WHERE email = ? AND senha = ? "
    const email = request.body.email;
    const senha = request.body.senha;
    db.query(login, [email,senha], (err, data) => {
        if(err) return response.json(err);
        if(data.length > 0){
                request.session.email = data[0].email;
                const email = data[0].email
                const token = jwt.sign({email}, "jwt-secret-key",{expiresIn:'2d'});
                response.cookie('token',token);
                return response.json({Status:'Sucess'});
                
        }else{
            return response.json({err:"sem registro"})
        }
    } )
})

//ENCERRAR SESSÃO
app.get('/logout',(request,response)=>{
    response.clearCookie('token');
    return response.json({Status:'Sucess'})
})




app.listen(3333,()=>{
    console.log("conectado a base de dados")
})