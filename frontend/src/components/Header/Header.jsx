import { IoSearchSharp, IoMenuSharp, IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <header className="header">
        <div className="Logo-container">
          <img src="logo-glaise.svg" alt="Logo Glaise Bolos" />
        </div>
        <nav className="nav-menu">
          <ul className="menu">
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#adress">Localização</a></li>
          </ul>
        </nav>

        <Link to='themes' className="search btn">
          <IoSearchSharp />
        </Link>

        <a onClick={toggleMenu} className="hamburguer btn">
          <IoMenuSharp />
        </a>
      </header>

      <div className={`menu-hamburguer ${menu ? 'open' : ''}`}>
        <a onClick={toggleMenu} className="close btn">
          <IoCloseOutline />
        </a>
        <nav className="nav-menu">
          <ul className="menu">
            <li className="searchbar-container">
              <input className="searchbar" type="text" placeholder="Buscar..." />
              <IoSearchSharp />
            </li>
            <li><a onClick={toggleMenu} href="#galeria">Galeria</a></li>
            <li><a onClick={toggleMenu} href="#about">Sobre</a></li>
            <li><a onClick={toggleMenu} href="#contact">Contato</a></li>
            <li><a onClick={toggleMenu} href="#adress">Localização</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
