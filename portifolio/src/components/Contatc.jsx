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
                Meu nome é Gabriel Sena, sou estudante de Engenharia de Software no UniSenai, e <br />técnico em Desenvolvimento de Sistemas. Adquiri muitos conhecimentos na área do front-end, mas <br />também tendo um conhecimento em back-end.
              </p>
            </div>
            <div className='card-education'>
              <ul>
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
    </div>
  );
}    