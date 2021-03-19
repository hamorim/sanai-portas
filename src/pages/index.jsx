import {
  FiDollarSign,
  FiSmile,
  FiClock,
  FiTrendingUp,
  FiUserPlus,
  FiThumbsUp,
} from 'react-icons/fi';
import styles from '../styles/Home.module.scss';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero image="/hero.png">
        <div className={styles.hero}>
          <h1>
            Somos uma empresa especializada em portas de enrolar automáticas
          </h1>
          <section>
            <div className="price">
              <FiDollarSign />
              <h2>Preço competitivo</h2>
            </div>
            <div>
              <FiClock />
              <h2>Entrega no prazo</h2>
            </div>
            <div>
              <FiSmile />
              <h2>Satisfação garantida</h2>
            </div>
          </section>
        </div>
      </Hero>
      <section className={styles.about}>
        <div>
          <img src="/about.png" alt="Sobre" />
          <div>
            <h1>Sobre Nós</h1>
            <p>
              Somos uma empresa especializada na produção, manutenção e vendas
              de <strong>porta de enrolar automáticas</strong> para indústrias,
              comércio e residências.
            </p>
            <p>
              Temos uma equipe de profissionais qualificados e comprometidos,
              sempre prontos para atender a necessidade de nossos clientes.
              Nossos produtos são de fabricação própria, priorizando sempre pela
              qualidade e a agilidade na realização dos nossos serviços.
            </p>
          </div>
        </div>
      </section>
      <Hero image="/hero2.jpg">
        <section className={styles.works}>
          <div>
            <FiTrendingUp />
            <h2>
              <strong>+200</strong> Portas entregues
            </h2>
          </div>
          <div>
            <FiUserPlus />
            <h2>
              <strong>+100</strong> Clientes Satisfeitos
            </h2>
          </div>
          <div>
            <FiThumbsUp />
            <h2>
              <strong>+100</strong> Avaliação positivo
            </h2>
          </div>
        </section>
      </Hero>
    </>
  );
};

export default Home;
