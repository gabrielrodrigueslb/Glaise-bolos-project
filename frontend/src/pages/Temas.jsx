
import './Temas.scss';

import HeaderAlt from '../components/HeaderAlt/HeaderAlt';
import ThemeCard from '../components/ThemeCard/ThemeCard';
import { useEffect, useState } from 'react';
import { getTemas } from '../api/apiService';


export default function Temas() {

let [theme, setTheme] =  useState([]);

useEffect(() => {
  const fetchThemes = async () => {
    const response = await getTemas();
    setTheme(response);
  };

  fetchThemes();
},[])

console.log(theme)
  return (
    <>
      <HeaderAlt btnReturn='/'/>
      <main className="themes">
        <h1 className="title container">Temas</h1>
        <section className="themes-list container">

          
          {theme.length === 0 ? (<p>Carregando...</p>) : (theme.map((tema) => {
            console.log(tema.img);
            return(
            <ThemeCard 
            key={tema.id}
            id={tema.id}
            name={tema.name}
            color={tema.color}
            img={tema.img}

            />
            )
})
          )}
            
              
          
        </section>
      </main>
    </>
  );
}
