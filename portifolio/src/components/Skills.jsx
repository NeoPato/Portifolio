import Dev from '../constants/Dev.json';

export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Sobre Mim</h2>
          {Dev.map((text, index) => (
            <div className="card" key={index}>
              <div className="card-identity">
                <p>{text.imagem}</p>
                <p>{text.Nome}</p>
                <p>{text.Idade}</p>
                <p>{text.DatadeNascimento}</p>
              </div>
              <div className='card-education'>
                <p>{text.CursoTec}</p>
                <p>{text.CursoGraduação}</p>
                <p>{text.CursoExtra}</p>
                <p>{text.CursoExtra2}</p>
              </div>
              <div className='card-linguagens'>
                <p>{text.Linguagens}</p>
              </div>
              <div className='card-contact'>
                <p>{text.Telefone}</p>
                <p>{text.Gmail}</p>
                <p>{text.GitHub}</p>
                <p>{text.LinkedIn}</p>
              </div>
              <div className='card-projects'>
                <p>{text.Projeto}</p>
                <p>{text.Projeto2}</p>
                <p>{text.Projeto3}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}