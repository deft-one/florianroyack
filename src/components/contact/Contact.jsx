import styles from './contact.module.css';
import gStyles from '../globals.module.css';

const globals = {...gStyles, ...styles};

const Contact = () => {
    return(
        <article className={styles.contactContainer} id="contact">
            <section className={styles.mapSection}>
                <div className={styles.phoneNumbers}>
                    <h3 className={`${styles.h3} ${globals.h3Glob}`}>Contact Me Directly</h3>
                    <p className={`${styles.p} ${globals.pGlob}`}>(352) 678-9389 (Cell)</p>
                    <p className={`${styles.p} ${globals.pGlob}`}>(813) 753-9447 (Alt)</p>
                </div>
                <div className={styles.mapContainer} id="map">
                    <iframe className={styles.map} title="map" loading="lazy" allowfullscreen="" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMacFBItq6IgRjj4Fet06FR0&amp;key=AIzaSyCHlREBDG3ZG1G48VxIoRJnXS-3JzcAG04"></iframe>
                </div>
            </section>
            <section className={styles.formContainer}>
                <form className={styles.contactForm} action="">
                    <h3 className={`${styles.h3} ${globals.h3Glob}`}>Quick Mesage Me</h3>
                    <label className={styles.inputLabel} htmlFor="firstName">First Name
                        <input className={styles.input} type="text" name="firstName" id="firstName" placeholder="First name..." />
                    </label>
                    <label className={styles.inputLabel} htmlFor="lastName">Last Name
                        <input className={styles.input} type="text" name="lastName" id="lastName" placeholder="Last name..." />
                    </label>
                    <label className={styles.inputLabel} htmlFor="email">Email
                        <input className={styles.input} type="email" name="email" id="email" placeholder="Your email..." />
                    </label>
                    <label className={styles.inputLabel} htmlFor="message">Your Message
                        <textarea className={`${styles.input} ${styles.textarea}`} name="message" id="message" placeholder="Your message..."></textarea>
                    </label>
                    <button onClick={(e) => {e.preventDefault()}} className={styles.formButton} type="submit">Submit</button>
                </form>
            </section>
        </article>
    );
}

export default Contact;