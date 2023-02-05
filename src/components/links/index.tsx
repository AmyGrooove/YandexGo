import { towns } from "@/constants";
import styles from "./index.module.scss";
import { LINKS_DOWN, LINKS_UP } from "@/theme/sources";

const Links = () => {
  return (
    <section className={`${styles.links} container`}>
      <div className={styles.links__image_up}>
        <img src={LINKS_UP} alt="" />
      </div>
      <h1 className={styles.links__explanations}>
        Самокаты есть в{" "}
        <a className={styles.links__explanations_town}>{towns[0].name}</a>
        {", "}
        <a className={styles.links__explanations_town}>{towns[1].name}</a>
        {", "}
        <a className={styles.links__explanations_town}>{towns[2].name}</a>
        {" и "}
        <a className={styles.links__explanations_town}>{towns[3].name}</a>
      </h1>
      <img src={LINKS_DOWN} alt="" className={styles.links__image_down} />
    </section>
  );
};

export default Links;
