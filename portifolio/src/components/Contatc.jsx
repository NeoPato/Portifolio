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
              <h3>Gabriel Henrique de Matos Sena </h3><br />
              <p>
                Estudante de Engenharia de Software com experiência em Python, 
                JavaScript, Node.js, React, HTML e CSS, e conhecimentos em Excel. 
                Proativo e comunicativo, busco aprendizado constante e aplico minhas 
                habilidades em projetos compartilhados no meu portfólio online. 
                Procuro oportunidades para crescer profissionalmente, contribuindo com soluções 
                criativas e eficientes em tecnologia.
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
