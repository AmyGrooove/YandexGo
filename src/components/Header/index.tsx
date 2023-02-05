import styles from "./index.module.scss";
import Link from "next/link";
import { headerNavigation } from "@/constants";
import { LOGO } from "@/theme/sources";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src={LOGO} alt="" loading="lazy" className={styles.header__logo} />
      </Link>
      <ul className={styles.header__menu}>
        {headerNavigation.map((el) => (
          <Link href={el.url} key={el.url}>
            <li className={styles.header__menu_link}>{el.name}</li>
          </Link>
        ))}
      </ul>
      <button className={styles.header__button}>Скачать</button>
    </header>
  );
};

export default Header;
