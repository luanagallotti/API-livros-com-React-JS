import './estilo.css';
import { useState } from 'react';




const Excluir = () => {
 
  const [mensagem,setMensagem] = useState('Informe os dados do livro.')
  const excluirLivro = async (id) => {
    await fetch('http://127.0.0.1:5000/excluir/'+id)
    .then((resposta) => resposta.json())
    .then((resp) => {
        setMensagem(resp.mensagem)
        })
    .catch((e) => {
        setMensagem('Erro na exclusão do livro.')
        console.log('erro ===')
        console.log(e)});
    }


    return (
        <div className='conteudo'>
            <h1>INCLUIR um Livro</h1>
            <div>
                Id do Livro:
                <input type='text' id='campoIdLivro'/>
                <br/><br/>
                <button onClick={() => {
                    let id = document.getElementById('campoIdLivro').value;
                    excluirLivro(id)
                }}>Excluir Livro</button>
            </div>
            <br/>
            <div className='listaResposta'>
                {mensagem}
            </div>
        </div>
    )
  };
 
  export default Excluir;

