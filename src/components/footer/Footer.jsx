import styles from './footer.module.css';

const Footer = () => {
    return(
        <section className={styles.footer} id="footer">
            <div className={styles.footerFlex}>
                <picture>
                    <source srcset="https://florianroyack.com/images/fj-royack-tropic-shores-realty.webp" type="image/webp" />
                    <img className={styles.footerLogo} src="florianroyack.com/images/fj-royack-tropic-shores-realty.jpg" alt="FJ Royack Tropic Shores Realty logo" />
                </picture>
                <div className={styles.socialContainer}>
                    <a className={styles.socialLink} href="https://www.facebook.com/FJRealtors/">
                        <img className={styles.socialIcon} src="https://www.florianroyack.com/images/facebook.svg" alt="" />
                    </a>
                    <a className={styles.socialLink} href="https://twitter.com/FjRoyack">
                        <img className={styles.socialIcon} src="https://www.florianroyack.com/images/twitter.svg" alt="" />
                    </a>
                    <a className={styles.socialLink} href="https://www.instagram.com/fjrealtors/">
                        <img className={styles.socialIcon} src="https://www.florianroyack.com/images/instagram.svg" alt="" />
                    </a>
                    <a className={styles.socialLink} href="https://g.page/fjrealtors">
                        <img className={styles.socialIcon} src="https://www.florianroyack.com/images/google.svg" alt="" />
                    </a>
                    <a className={styles.socialLink} href="https://www.linkedin.com/in/florian-royack-7811aa15/">
                        <img className={styles.socialIcon} src="https://www.florianroyack.com/images/linkedin.svg" alt="" />
                    </a>
                </div>
            </div>
            <p className={styles.copyright}>Copyright © FJ Royack Realty 2021.  View our <a href="#footer">Privacy Policy</a></p>
            <p className={styles.designedBy}>This website designed by <a href="#footer">Deftoriginals</a></p>
        </section>
    );
}

export default Footer;