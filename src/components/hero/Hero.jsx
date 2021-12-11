import styles from './hero.module.css';

const Hero = () => {
    return(
        <article className={styles.heroContainer}>
            <div className={styles.socialContainer}>
                <a href="https://www.facebook.com/FJRealtors/">
                    <img src="https://www.florianroyack.com/images/facebook.svg" alt="" />
                </a>
                <a href="https://twitter.com/FjRoyack">
                    <img src="https://www.florianroyack.com/images/twitter.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/fjrealtors/">
                    <img src="https://www.florianroyack.com/images/instagram.svg" alt="" />
                </a>
                <a href="https://g.page/fjrealtors">
                    <img src="https://www.florianroyack.com/images/google.svg" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/florian-royack-7811aa15/">
                    <img src="https://www.florianroyack.com/images/linkedin.svg" alt="" />
                </a>
            </div>
            <h1 className={styles.h1}>You Deserve the Florida Lifestyle!</h1>
            <p className={styles.phoneNumber}>RELOCATING OR MOVING<br />
            REAL ESTATE AGENT<br />
            (352) 678-9389</p>
            <p className={styles.statement}>We are seasoned real estate agent/professionals with a passion for helping people sell their house and find and own their new home!</p>
        </article>
    );
}

export default Hero;