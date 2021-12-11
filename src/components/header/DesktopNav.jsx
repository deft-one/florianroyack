import styles from './header.module.css';

const DesktopNav = () => {
    return(
        <ul className={styles.desktopNav}>
            <li className={styles.li}>
                <a className={styles.a} href="#about">About</a>
            </li>
            <li className={styles.li}>
                <a className={styles.a} href="#specialties">Specialties</a>
            </li>
            <li className={styles.li}>
                <a className={styles.a} href="#contact">Contact</a>
            </li>
            <li className={styles.li}>
                <span className={`${styles.a} ${styles.phoneNumber}`}>(352) 678-9389</span>
            </li>
        </ul>
    );
}

export default DesktopNav;