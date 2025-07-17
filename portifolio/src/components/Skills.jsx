import Dev from '../constants/Dev.json';

export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <div className='card'>
          <div className='card-list1'>
            <h2>Linguagens</h2>
            <br />
            <div >
              <img src="/python.png" alt="" />
              <p>Python</p>
            </div>
            <div>
              <img src="/js.png" alt="" />
              <p>JavaScript</p>
            </div>
            <div>
              <img src="/nodejs.png" alt="" />
              <p>Node.js</p>
            </div>
            <div>
              <img src="/biblioteca.png" alt="" />
              <p>React</p>
            </div>
            <div>
              <img src="/html-5.png" alt="" />
              <p>html</p>
            </div>
            <div>
              <img src="/css-3.png" alt="" />
              <p>Css</p>
            </div>
          </div>
        </div>
                
        {Dev.map((text, index) => (
        <div className="card" key={index}>
          <div className='card-list2'>
            <h2>Projetos</h2>
            <br />
            <p>{text.Projeto}</p>
            <br />
            <p>{text.Projeto2}</p>
            <br />
            <p>{text.Projeto3}</p>
            <br />
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}