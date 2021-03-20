import {
  FiDollarSign,
  FiSmile,
  FiClock,
  FiTrendingUp,
  FiUserPlus,
  FiThumbsUp,
  FiPenTool,
  FiPackage,
  FiRotateCw,
  FiLayers,
  FiTruck,
  FiGlobe,
} from 'react-icons/fi';
import styles from '../styles/Home.module.scss';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero image="/hero.jpg">
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
          <img src="/about.jpg" alt="Sobre" />
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
      <section className={styles.hire}>
        <div>
          <h1>Por Que Nos Contratar?</h1>
          <h2>
            Nós entendemos sua necessidade e fornecemos portas de enrolar de
            acordo com sua solicitação!
          </h2>
        </div>
        <div>
          <div>
            <FiPenTool />
            <p>Produtos de longa durabilidade</p>
          </div>
          <div>
            <FiPackage />
            <p>Soluções inovadoras</p>
          </div>
          <div>
            <FiRotateCw />
            <p>Flexibilidade na execução de serviços</p>
          </div>
          <div>
            <FiLayers />
            <p>Matéria prima de alta qualidade</p>
          </div>
          <div>
            <FiGlobe />
            <p>Garantia na compra dos produtos</p>
          </div>
          <div>
            <FiTruck />
            <p>Comprometimento do início ao fim do projeto</p>
          </div>
        </div>
      </section>
      <Hero image="/hero.jpg">
        <section className={styles.footer}>
          <div>
            <h3>Aqui para você</h3>
            <p>Ligue-nos 24/7.</p>
            <p>Estamos aqui para lhe atender</p>
          </div>
          <div>
            <h3>Contatos</h3>
            <p>(81) 9 9657-2406</p>
            <p>contato@sanaiportas.com.br</p>
          </div>
          <div>
            <h3>Onde nos encontrar</h3>
            <p>Rua Mocajuba, 23</p>
            <p>Estância, Recife - PE</p>
            <p>50865-210</p>
          </div>
        </section>
      </Hero>
      <footer className={styles.footnote}>
        <p>
          Powered by React Desenvolvido por{' '}
          <a href="https://www.hugolyra.com">hugolyra.com</a>
        </p>
      </footer>
    </>
  );
};

export default Home;
