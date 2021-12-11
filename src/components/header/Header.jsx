import styles from './header.module.css';
import { useMediaQuery } from 'react-responsive';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Header = () => {
    
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    return(
        <header className={styles.header}>
            <div classname={styles.imgContainer}>
                <picture>
                    <source srcset="https://florianroyack.com/images/fj-royack-tropic-shores-realty.webp" type="image/webp" />
                    <img className={styles.img} src="florianroyack.com/images/fj-royack-tropic-shores-realty.jpg" alt="FJ Royack Tropic Shores Realty logo" />
                </picture>
            </div>
            <nav className={styles.nav}>
                { isMobile ? <MobileNav /> :<DesktopNav /> }
            </nav>
        </header>
    );
}

export default Header;