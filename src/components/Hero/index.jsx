import styles from './Hero.module.scss';

const Hero = ({ children, image }) => {
  return (
    <div className={styles.hero}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Hero;
