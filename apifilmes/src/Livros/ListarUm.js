import './estilo.css';
import { useState, useEffect } from 'react';
import { CardLivro } from './CardLivro';




const ListarUm = () => {
   
    const [listaLivros,setListaLivros] = useState([{'id':0,'titulo':'Informe ID do Livro','ano':0}])    


    const leLivros = async (id_livro) => {
       
        await fetch('http://127.0.0.1:5000/livro/'+id_livro)
        .then((resposta) => resposta.json())
        .then((resp) => {            
              setListaLivros(resp)            
            })
          .catch((e) => {
            setListaLivros([{'id':0,'titulo':'Livro não encontrado','ano':0}])
            console.log('erro ===')
            console.log(e)});
        }
      useEffect( () => {
        leLivros()
      },[])
   
 
 
      return (
          <div className='conteudo'>
              <h1>Listando um livro:</h1>
              <div>
                Id do Livro:
                <input type='text' id='campoIdLivro'/>
                <br/>
                <button onClick={() => {
                    let id = document.getElementById('campoIdLivro').value;
                    leLivros(id)
                }}>Pesquisar</button>
            </div>
            <br/>
            <div className='listaResposta'>
                <CardLivro livro={listaLivros[0]}/>
            </div>
        </div>
      )
    };
 
  export default ListarUm;
 

