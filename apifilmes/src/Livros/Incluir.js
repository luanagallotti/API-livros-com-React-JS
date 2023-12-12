import './estilo.css';
import { useState } from 'react';


const Incluir = () => {
   
    const [mensagem,setMensagem] = useState('Informe os dados do livro.')
    const incluirLivro = async (id,titulo,ano) => {
      await fetch('http://127.0.0.1:5000/incluir/'+id+'-'+titulo+'-'+ano)
      .then((resposta) => resposta.json())
      .then((resp) => {
          setMensagem(resp.mensagem)
          })
      .catch((e) => {
          setMensagem('Erro na inclusão do livro.')
          console.log('erro ===')
          console.log(e)});
      }




      return (
        <div className='conteudo'>
            <h1>INCLUIR um Livro</h1>
            <div>
                Id do Livro:
                <input type='text' id='campoIdLivro'/>
                <br/>
                Título do Livro:
                <input type='text' id='campoTituloLivro'/>
                <br/>
                Ano do Livro:
                <input type='text' id='campoAnoLivro'/>
                <br/><br/>
                <button onClick={() => {
                    let id = document.getElementById('campoIdLivro').value;
                    let titulo = document.getElementById('campoTituloLivro').value;
                    let ano = document.getElementById('campoAnoLivro').value;
                    incluirLivro(id,titulo,ano)
                }}>Incluir Livro</button>
            </div>
            <br/>
            <div className='listaResposta'>
                {mensagem}
            </div>
        </div>
    )
  };
 
  export default Incluir;




 



