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
                    <iframe className={styles.map} title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6987.03871906457!2d-82.542552!3d28.882911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e86a8b0405a731%3A0x1d153add7a053e8e!2s6460%20W%20Gulf%20to%20Lake%20Hwy%2C%20Crystal%20River%2C%20FL%2034429!5e0!3m2!1sen!2sus!4v1660865705379!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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