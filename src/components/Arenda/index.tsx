import { arendaText } from "@/constants";
import styles from "./index.module.scss";
import { ARENDA, ARROW_DOWN } from "@/theme/sources";

const Arenda = () => {
  return (
    <section className={`${styles.arenda} container`}>
      <h1 className={styles.arenda__label}>Как арендовать самокат</h1>
      <div className={styles.arenda__description}>
        <div className={styles.arenda__description_left}>
          {arendaText.map((el) => (
            <div key={el.img} className={styles.arenda__description_left_card}>
              <img
                src={el.img}
                alt=""
                className={styles.arenda__description_left_card_image}
              />
              <h2 className={styles.arenda__description_left_card_text}>
                {el.text}
              </h2>
            </div>
          ))}
        </div>
        <div className={styles.arenda__description_right}>
          <video
            src={ARENDA}
            loop
            muted
            webkit-playsinline
            preload="auto"
            className={styles.arenda__description_right_video}
          />
          <img
            src={ARROW_DOWN}
            alt=""
            className={styles.arenda__description_right_arrow}
          />
        </div>
      </div>
      <div className={styles.arenda__readyButton}>
        Готово! Выбирайте тариф
        <br /> и можно ехать
      </div>
    </section>
  );
};

export default Arenda;
