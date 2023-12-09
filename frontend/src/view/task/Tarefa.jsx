
import FormTask from "../../components/FormTask/FormTask"
import Header from "../../components/Header/Header"
import  { useEffect } from 'react';

function Tarefa() {
  useEffect(() => {
    document.title = 'Tarefa | SGP';
  }, []);

  return (
    <div>
      <Header/>
      <FormTask/>
    </div>
  )
}

export default Tarefa
