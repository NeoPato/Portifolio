const Card = (props) => {
  return(
      <div class="card">
            <p>{props.CursoTec}</p>
            <p>{props.CursoGraduação}</p>
            <p>{props.CursoExtra}</p>
            <p>{props.CursoExtra2}</p>
            <p>{props.CursoExtra3}</p>
            <p>{props.Linguagens}</p>
            <p>{props.Telefone}</p>
            <p>{props.Gmail}</p>
            <p>{props.GitHub}</p>
            <p>{props.LinkedIn}</p>  
            <p>{props.Projeto}</p>
            <p>{props.Projeto2}</p>
            <p>{props.Projeto3}</p>
      </div>
  )
}