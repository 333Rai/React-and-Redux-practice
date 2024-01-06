import { Link } from "react-router-dom";
import "./style.css";
function Header() {
   return (
      <header id="header">
         <div className="container">
            <div className="header">
               <nav className="header__nav">
                  <Link to="/">Список</Link>
                  <Link to="/create">Создать</Link>
               </nav>
            </div>
         </div>
      </header>
   );
}

export default Header;
