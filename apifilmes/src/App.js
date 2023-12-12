import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Livros/Layout';
import ListarTodos from './Livros/ListarTodos';
import ListarUm from './Livros/ListarUm';
import Incluir from './Livros/Incluir';
import Excluir from './Livros/Excluir';


 
    function App(){  
 
 
    return (
       
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<ListarTodos />} />
                <Route path='listar_um' element={<ListarUm />} />
                <Route path='incluir' element={<Incluir />} />
                <Route path='excluir' element={<Excluir />} />
            </Route>
        </Routes>
        </BrowserRouter>
     
 
    );
  }
  export default App;
 
 
 
 





