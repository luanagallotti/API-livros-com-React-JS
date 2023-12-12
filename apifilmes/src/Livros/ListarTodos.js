import './estilo.css';
import { useState, useEffect } from 'react';
import './CardLivro';
import { CardLivro } from './CardLivro';


const ListarTodos = () => {
    const [listaLivros,setListaLivros] = useState([])
    const leLivros = async () => {
      await fetch('http://127.0.0.1:5000/livros')
      .then((resposta) => resposta.json())
      .then((resp) => {
            setListaLivros(resp)
          })
        .catch((e) => {
            console.log('erro ===')
            console.log(e)});
      }
    useEffect( () => {
      leLivros()
    },[])
 




    return (
        <div className='conteudo'>
            <h1>Todos os Livros</h1>
            <div className='listaResposta'>
            {
                listaLivros.map((umLivro) => {
                  return (
                    <div key={umLivro.id}>
                      <CardLivro livro={umLivro}/>
                    </div>
                  )})
            }
            </div>
        </div>
    )
  };
 
  export default ListarTodos;



