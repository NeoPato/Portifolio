import Dev from '../constants/Dev.json';

export function Contatc() {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div className="image">
              <img src="/ft_sobre.webp" alt="Profile" />
        </div>
        <div className="cardContact">
        {Dev.map((text, index) => (
          <div key={index}>
            
            <div className="card-identity">
              <h2>Sobre Mim</h2>
              <p>
                Gabriel Henrique de Matos Sena – Estudante de Engenharia de Software<br/><br />
                Sou um estudante dedicado de Engenharia de Software, com sólida base em desenvolvimento de sistemas e aplicações web.<br/>  
                Perfil: Motivado pela busca constante de aprendizado e prática em projetos, possuo perfil proativo, comunicativo e adaptável, sempre em evolução para aprimorar minhas habilidades técnicas e interpessoais.<br/>
                Portfólio: Atualmente, desenvolvo e compartilho minhas habilidades no meu portfólio online.<br/>
                Objetivo: Busco oportunidades para crescer profissionalmente na área de tecnologia, contribuindo com soluções criativas e eficientes.
              </p>
            </div>
            <div className='card-education'>
              <ul style={{ color:"white", padding: 0 }}>
                <li><p>{text.CursoGraduação}</p></li>
                <li><p>{text.CursoTec}</p></li>
                <li><p>{text.CursoExtra}</p></li>
                <li><p>{text.CursoExtra2}</p></li>
                <li><p>{text.CursoExtra3}</p></li>
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
      {Dev.map((text, index) => (
          <div key={index}>
          <div className="card-contact">
              <h4>Email: <br /><a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielhmsena20@gmail.com" target="_blank">Enviar Email </a></h4>              
              <h4>Telefone: <br /><a href="https://wa.me/+554184666011?text=Olá,%20gostaria%20de%20mais%20informações">Enviar Mensagem</a></h4>
              <h4>GitHub: <br /><a href="https://github.com/NeoPato" target='_black'>Clique para Acessar</a></h4>
              <h4>LinkedIn: <br /> <a href="https://www.linkedin.com/in/gabriel-henrique-985311294/" target='_blank'>Clique para Acessar</a></h4>
            </div>
          </div>
        ))}
    </div>
  );
}    
