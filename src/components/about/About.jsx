import styles from './about.module.css';
import gStyles from '../globals.module.css';

const globals = {...styles, ...gStyles};

const About = () => {
    return(
        <article id="about" className={styles.aboutContainer}>
            <section className={styles.pictureContainer}>
                <picture>
                    <source srcset="https://www.florianroyack.com/images/florian-headshot.webp" type="image/webp" />
                    <img className={styles.img} src="https://www.florianroyack.com/images/florian-headshot.jpg" alt="headshot of Florian Royack" />
                </picture>
            </section>
            <section className={styles.textContainer}>
                <h2 className={`${styles.h2} ${globals.h2Glob}`}>Real Estate Agent Specialties: Buyer's Agent, Listing Agent And Relocation</h2>
                <p className={`${styles.p} ${globals.pGlob}`}>Florian Royack of Tropic Shores Realty is a Full-Service Realtor® serving the Citrus County, Florida Community. A seasoned real estate agent with a passion for helping people sell their house and find and own their new home.</p>
                <p className={`${styles.p} ${globals.pGlob}`}>FJ Realtors® have helped hundreds of Sellers and Buyers sell or buy their real estate since 1988 and have been involved in numerous real estate cycles throughout my career. Every transaction FJ Realtor® is fortunate to be part of their goal is to deliver the highest level-of-service from the initial consultation right up to the settlement table. And we strive to make it a positive experience for everyone that is involved. We hope to become your Realtor® for life.</p>
                <p className={`${styles.p} ${styles.bold} ${globals.pGlob}`}>This Is Why You Should Choose A Real Estate Agent SPECIALIZING IN ALL KINDS OF FINANCING, AND ESPECIALLY ~ VA MORTGAGES</p>
            </section>
        </article>
    );
}

export default About;