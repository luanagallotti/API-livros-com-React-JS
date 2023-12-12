import { Outlet, Link } from "react-router-dom";
import './estilo.css';


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="linkpagina" to="/">Todos</Link>
          </li>
          <li>
            <Link className="linkpagina" to="/listar_um">Um Livro</Link>
          </li>
          <li>
            <Link className="linkpagina" to="/incluir">Incluir</Link>
          </li>
          <li>
            <Link className="linkpagina" to="/excluir">Excluir</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};


export default Layout;

