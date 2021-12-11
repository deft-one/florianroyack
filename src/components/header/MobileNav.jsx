import styles from './header.module.css';
import { useState } from 'react';

const MobileNav = () => {

    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        let menu = document.getElementById('menu');
        isOpen ? menu.innerText = 'menu' : menu.innerText = 'close';
        setOpen(!isOpen);
    }

    const navOpen = styles.menuOpen;
    const menuX = styles.menuX;

    return(
        <div className={styles.mobileNav}>
            <span onClick={handleToggle} id="menu" className={`${styles.menu} ${isOpen ? menuX : ''}`}>menu</span>
            <ul className={`${styles.mobileNavList} ${isOpen ? navOpen : ''}`}>
                <li className={styles.mobileNavItem}>
                    <a className={styles.mobileNavLink} href="#about">About</a>
                </li>
                <li className={styles.mobileNavItem}>
                    <a className={styles.mobileNavLink} href="#specialties">Specialties</a>
                </li>
                <li className={styles.mobileNavItem}>
                    <a className={styles.mobileNavLink} href="#contact">Contact</a>
                </li>
                <li className={styles.mobileNavItem}>
                    <a className={styles.mobileNavLink} href="#contact">Privacy Policy</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileNav;