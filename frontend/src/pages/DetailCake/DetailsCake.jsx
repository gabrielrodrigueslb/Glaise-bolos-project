import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBolosById } from '../../api/apiService';
import { IoIosArrowBack } from 'react-icons/io';
import { getTemas } from '../../api/apiService';

import './DetailsCake.scss';
// import Form from '../../components/Form/Form';

export default function DetailsCake() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cake, setCake] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  // let mensagem = `Olá Glaise! Gostaria de fazer um orçamento com você. Tenho como referencia esse modelo:${cake.img}`;

  const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  let [theme, setTheme] =  useState([]);

  useEffect(() => {
    const fetchThemes = async () => {
      const response = await getTemas();
      setTheme(response);
    };
  
    fetchThemes();
  },[])



  function handleButton() {
    setOpenForm(!openForm);
  }

  useEffect(() => {
    const fetchCake = async () => {
      const response = await getBolosById(id);
      setCake(response);
    };
    fetchCake();
  }, [id]);

  if (!cake) {
    return <div>Carregando detalhes do bolo...</div>;
  }

  console.log(theme);
  return (<>
  
    <section className='background'>
      <main className="details">
        <Link className="return" onClick={() => navigate(-1)}>
          {' '}
          <span className="btn ">
            <IoIosArrowBack className="svg" />
          </span>
        </Link>
        <div className="img-bg">
          <img className="img container" src={`${baseURL}${cake.img}`} alt={cake.name} />
        </div>

        <section className="details-content container-alt">
          <h2>Detalhes do modelo</h2>
          <div className="cake-details">
            <ul className="details-list">
              <li className="detail">
                <img src="/medida.svg" alt="medida" />
                Tamanho <span>{cake.medidas}</span>
              </li>
              <li className="detail">
                <img src="/pessoas.svg" alt="pessoas" />
                Serve <span>{cake.pessoas}</span> pessoas
              </li>
              <li className="detail">
                <img src="/acabamento.svg" alt="acabamento" />
                <span>{cake.acabamento}</span>
              </li>
            </ul>
          </div>
          <a href={`https://wa.me/+5531989899622?text=Olá Glaise! Gostaria de fazer um orçamento com você.`} target='_blank' onClick={handleButton} className='orcamento-btn'>Fazer Orçamento</a>
        </section>
      </main>
    </section>

    <section className={`form-window ${openForm ? 'active' : ''}`}>
        <button onClick={handleButton}>X</button>
        <div className='form-container'>
            <h1>Realizar orçamento:</h1>
            <form className='form' action="">
                <label htmlFor="name">Nome *</label>
                <input type="text" name="name" id="name" placeholder='Nome:' autoComplete='on'/>
                <label htmlFor="size">Selecione o tamanho *</label>
                <select type="text" name="size" id="size" placeholder='Tamanho:'>
                <option value="">Tamanho</option>
                <option value="15cm">15cm</option>
                <option value="20cm">20cm</option>
                <option value="25cm">25cm</option>
                <option value="30cm">30cm</option>
                </select>
                <label htmlFor="theme">Tema do bolo *</label>
                <input type="text" list='themes' name='themes' placeholder='Tema'/>
                <datalist id='themes'>


                    <option value="Harry Potter"/>
                    <option value="Mickey"/>
                    <option value="Vingadores"/>
                </datalist>
                <label htmlFor="model">Modelo do bolo</label>
                <div className='radios'><input type="radio" name="model" id="yes" value={true}/>
                <label htmlFor="yes">Sim</label>
                <input type="radio" name="model" id="no" value={false}>
                </input>
                <label htmlFor="no">Não</label></div>
                
                <input type="file" name="" id="" />
            </form>
        </div>
    </section>
  </>

    
  );
}
