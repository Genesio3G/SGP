import './Footer.css'

function Footer() {

    return (
      <div>
         <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>SGP | Pages</h4>
          <ul className="links">
            <li><a href="#">Pagina Inicial</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Tarefas</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Info.</h4>
          <ul className="links">
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Contate-nos</a></li>
            <li><a href="#">Central de Ajuda</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de utilização</a></li>
            <li><a href="#">Configurações de privacidade</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Gerenciamento de projetos</h4>
          <p>é um aplicativo que ajudam a simplificar o processo de planejamento,
             gestão e execução das tarefas de um projeto a longo prazo.
          </p>

        </div>
      </div>
    </section>
      </div>
    )
  }
  
  export default Footer