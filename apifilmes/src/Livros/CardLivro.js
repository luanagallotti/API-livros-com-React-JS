import './estilo.css';


export function CardLivro(props) {
    return (
        <div className="card">
          <div>
            {props.livro.id} <br/>
            {props.livro.titulo} <br/>
            {props.livro.ano}
          </div>
        </div>
    )
}





