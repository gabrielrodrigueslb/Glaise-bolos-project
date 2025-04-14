/* eslint-disable no-unused-vars */
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from "framer-motion";
import Header from '../components/Header/Header';
import Carrosel from '../components/Carrossel/Carrosel';
import Servicos from '../components/Servicos/Servicos';

import './Home.scss';
import CarroselMobile from '../components/CarrosselMobile/CarroselMobile';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <main className="background main">
        <Header />

        <motion.div
          initial={{ opacity: 0}} // Começa invisível e abaixo
          animate={{ opacity: 1}} // Anima para visível e posição normal
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <Carrosel className="container" />
          </div>
          <CarroselMobile />
        </motion.div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <section className="services-list">
              <Servicos
                icon="/icon-brigadeiro.svg"
                title="Doces"
                text="Sabores irresistíveis, preparados com ingredientes selecionados."
              />
              <Servicos
                icon="/icon-bolo-decorado.svg"
                title="Bolos Decorados"
                text="Arte e sabor em cada detalhe, feitos sob medida para seus momentos especiais."
              />
              <Servicos
                icon="/icon-salgados.svg"
                title="Salgados"
                text="Salgados crocantes e recheados, ideais para qualquer evento."
              />
            </section>
          </motion.div>

          <motion.div initial={{ opacity: 0, y:100}}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <section className="container-alt galeria" id="galeria">
            <h2 className="title">Galeria de fotos</h2>
            <p>
              Inspire-se com nossos modelos. Acesse a galeria e escolha seu
              favorito!
            </p>
            <div className="photos">
              <div className="img-container">
                <img src="/bolo-mario.png" alt="Bolo Super Mario" />
              </div>
              <div className="img-container">
                <img src="/bolo-dourado.png" alt="Bolo Dourado" />
              </div>
              <div className="img-container">
                <img src="/bolo-batizado.png" alt="Bolo Batizado" />
              </div>
            </div>
            <Link to='/themes' className="btn-2">Ver mais modelos</Link>
          </section>
          </motion.div>


        </div>
      </main>

      <section className="about background-alt" id="about">
      
        <div className="container-alt about-content">
          <h2 className="title-alt">Sobre nós</h2>

          <div className="glaise-bolos">
            <div className="img-container">
              <img src="/glaise-bolos.svg" alt="Glaise Bolos" />
            </div>
            <div className="text-container">
              <p>
                A Glaise Bolos é o resultado de mais de 15 anos de dedicação e
                paixão pela confeitaria. No ramo desde 2010 e, desde então,
                viemos transformando cada criação em um verdadeiro prazer para
                os sentidos. Seu talento e experiência a tornaram uma referência
                no mercado, reconhecida pela qualidade e atenção aos detalhes.
                <br />
                <br />
                A Glaise Bolos se destaca por oferecer bolos, doces e chocolates
                de altíssima qualidade, atendendo Betim e região. Cada criação é
                pensada para tornar seu evento único e inesquecível.
                <br />
                <br />
                Confie na expertise de quem está no ramo há mais de duas
                décadas. Experimente nossas delícias e faça seu evento brilhar!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact background2" id="contact">
        <div className="container-alt contact-content">
          <h2 className="title">Contato</h2>
          <p>Entre em contato e faça seu pedido!</p>

          <ul className="contact-list">
            <li className="contact-card whats">
              <FaWhatsapp className="whatsapp" />
              (31) 97128-4049
            </li>
            <li className="contact-card insta">
              <FaInstagram className="instagram" />
              glaisebolos
            </li>
            <li className="contact-card phone">
              <FaPhoneAlt className="telephone" />
              (31) 97128-4049
            </li>
          </ul>
        </div>

        <div className="map-content container" id="adress">
          <h2 className="title">Localização</h2>
          <p>Encontre-nos facilmente e aproveite o melhor da confeitaria.</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.4066297490251!2d-44.13650251803301!3d-19.945208411019685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c1b5079ccb7f%3A0xbdd8ab2bb4a8f7c3!2sGlaise%20Bolos!5e0!3m2!1spt-BR!2sbr!4v1741010625629!5m2!1spt-BR!2sbr"
              className="map"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="adress">
            <FaMapMarkerAlt />
            <div className="adress-content">
              <p>R. Tomás Gonzaga, 18 - Amarante, Betim - MG, 32676-008</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer background-alt">
        <div className="container footer-content">
          <div className="logo">
            <img src="/glaise-bolos.svg" alt="Glaise Bolos" />
          </div>

          <nav className="nav-menu">
            <ul className="menu">
              <li>
                <a href="#galeria">Galeria</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <a href="#adress">Localização</a>
              </li>
            </ul>
          </nav>
        </div>
        <p>Todos os Direitos Reservados © Glaise Bolos 2025</p>
      </footer>
    </>
  );
}
