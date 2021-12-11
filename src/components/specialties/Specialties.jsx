import styles from './specialties.module.css';
import gStyles from '../globals.module.css';

const globals = {...gStyles, ...styles};

const Specialties = () => {
    return(
        <article id="specialties" className={styles.skillsetContainer}>
            <div className={styles.servicesContainer}>
                <section className={styles.service}>
                    <h3 className={`${globals.h3Glob} ${styles.h3}`}>Certified Experts</h3>
                    <p className={`${globals.pGlob} ${styles.p}`}>We are licensed Realtors® in Florida. This skill is honed by years of experience, providing a much more efficient (and fun!) purchase experience for buyers.</p>
                </section>
                <section className={styles.service}>
                    <h3 className={`${styles.h3} ${globals.h3Glob}`}>Quality Services</h3>
                    <p className={`${globals.pGlob} ${styles.p}`}>The quality of the relationship you have with your Realtor® will define the quality of your buying experience, so trust your gut, and take the time necessary to ensure you make the right choice.</p>
                </section>
                <section className={styles.service}>
                    <h3 className={`${styles.h3} ${globals.h3Glob}`}>Affordable Pricing</h3>
                    <p className={`${globals.pGlob} ${styles.p}`}>By virtue of knowing the market, the geography, and the inventory intimately, a seasoned Realtor® will effectively listen to your criteria and quickly come up with the best matches for you.</p>
                </section>
                <section className={styles.specialties}>
                    <h3 className={`${styles.h3} ${globals.h3Glob} ${styles.specialtiesH3}`}>Specialties</h3>
                    <ul>
                        <li className={styles.specialty}>&nbsp;Buyer's Agent</li>
                        <li className={styles.specialty}>&nbsp;Seller's Agent</li>
                        <li className={styles.specialty}>&nbsp;Relocation</li>
                    </ul>
                </section>
                <section className={styles.zillowContainer}>
                    <img className={styles.imgZillow} src="https://www.florianroyack.com/images/zillow-premier-agent.svg" alt="Zillow Premier Agent Logo"></img>
                    <p className={`${globals.pGlob} ${styles.p}`}>Discover Your Perfect Home with the most complete source of homes for sale &amp; real estate near you!  Let me help you benefit in achieving your Home Buying and Selling Goals, with my 30+ years experience as Real Estate Agent and Investor.</p>
                </section>
            </div>
        </article>
    );
}

export default Specialties;