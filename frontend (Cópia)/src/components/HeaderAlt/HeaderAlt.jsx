import { IoSearchSharp} from 'react-icons/io5';
import { IoIosArrowBack } from "react-icons/io";

import './HeaderAlt.scss';
import { Link } from 'react-router-dom';

export default function HeaderAlt({btnReturn}) {

  return (
    <>
      <header className="header">
        <div className='header-alt'>
          <Link className='return' to={btnReturn} > <span className='btn'><IoIosArrowBack className='svg'/></span> Voltar</Link>
          
          <div className="search">
            <input type="text" placeholder="Pesquisar tema" className='searchbar'/>
            <button className='button-search'><IoSearchSharp /></button>
          </div>
          
        </div>
      </header>

    </>
  );
}
