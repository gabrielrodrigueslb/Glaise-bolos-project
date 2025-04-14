import { Link, useParams } from 'react-router-dom';
import { getBolosByTema } from '../../api/apiService';
import { useEffect, useState } from 'react';
import HeaderAlt from '../../components/HeaderAlt/HeaderAlt';

import './Results.scss';

export default function Results() {
  const { id } = useParams();
  const [bolos, setBolos] = useState([]);


useEffect(() =>{
const fetchBolos = async () => {
  const response = await getBolosByTema(id);
  setBolos(response);
};
fetchBolos();
}, [id]);




  return (
    <>

      <HeaderAlt btnReturn='/themes'/>
      <main className="theme">
        <section className='theme-galery container'>
        {bolos.length === 0 ? (<p>Carregando...</p>): (bolos.map((bolo) => (
          <Link to={`/details/${bolo.id}`} key={bolo.id} className='img-container'><img src={bolo.img} alt={bolo.name} /></Link>
        )))}


        </section>
        
      </main>
    </>
  );
}
