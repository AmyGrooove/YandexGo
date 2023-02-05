import { INTRO } from "@/theme/sources";
import styles from "./index.module.scss";

const Intro = () => {
  return (
    <section className={`${styles.intro} container`}>
      <img src={INTRO} alt="" className={styles.intro__img} />
      <div className={styles.intro__description}>
        <h2 className={styles.intro__description_text}>
          Скачайте приложение, чтобы арендовать ближайший электросамокат
        </h2>
        <button className={styles.intro__description_button}>
          Скачать приложение
        </button>
      </div>
    </section>
  );
};

export default Intro;
