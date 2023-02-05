import { tariffs } from "@/constants";
import styles from "./index.module.scss";

const Tariff = () => {
  return (
    <section className={`${styles.tariff} container_tariff`}>
      <div className={styles.tariff__column}>
        <div
          className={`${styles.tariff__card} ${styles.tariff__card_left} ${styles.tariff__card_solid}`}
        >
          <img
            className={styles.tariff__card_img}
            src={tariffs[0].img}
            alt=""
          />
          <div className={styles.tariff__card_label}>{tariffs[0].label}</div>
          <div className={styles.tariff__card_description}>
            {tariffs[0].description}
          </div>
        </div>
        <div
          className={`${styles.tariff__card} ${styles.tariff__card_left} ${styles.tariff__card_dashed}`}
        >
          <div className={styles.tariff__card_label}>
            {tariffs[2].label1}
            <br />
            {tariffs[2].label2}
          </div>
          <div className={styles.tariff__card_description}>
            {tariffs[2].description}
          </div>
        </div>
      </div>
      <div
        className={`${styles.tariff__column} ${styles.tariff__column_right}`}
      >
        <div
          className={`${styles.tariff__card} ${styles.tariff__card_right} ${styles.tariff__card_solid}`}
        >
          <img
            className={styles.tariff__card_img}
            src={tariffs[1].img}
            alt=""
          />
          <div className={styles.tariff__card_label}>{tariffs[1].label}</div>
          <div className={styles.tariff__card_description}>
            {tariffs[1].description}
          </div>
        </div>
        <div
          className={`${styles.tariff__card} ${styles.tariff__card_right} ${styles.tariff__card_plus}`}
        >
          <div className={styles.tariff__card_label_plus}>
            <div className={styles.tariff__card_label}>{tariffs[3].label}</div>
            <img
              className={styles.tariff__card_img_plus}
              src={tariffs[3].img}
              alt=""
            />
          </div>
          <div className={styles.tariff__card_description}>
            {tariffs[3].description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariff;
