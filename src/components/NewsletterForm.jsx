import styles from "./NewsletterForm.module.css"

import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg"

function NewsletterForm() {
    return(
        <section className={styles.NewsletterFormSection}>
            <picture className={styles.NewsletterFormPicture}>
                <source srcSet={illustrationMobile} media="(max-width: 768px)" />
                <source srcSet={illustrationDesktop} />
                <img src={illustrationDesktop} type="svg" />
            </picture>
            <header className={styles.NewsletterFormHeader}>
                <h1 className={styles.NewsletterFormH1}>Stay updated!</h1>
                <p className={styles.NewsletterFormP}>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className={styles.NewsletterFormUl}>
                    <li className={styles.NewsletterFormLi}>Product discovery and building what matters</li>
                    <li className={styles.NewsletterFormLi}>Measuring to ensure updates are a success</li>
                    <li className={styles.NewsletterFormLi}>And much more!</li>
                </ul>
            </header>
            <form className={styles.NewsletterFormForm} action="">
                <label className={styles.NewsletterFormLabel} htmlFor="email">Email address</label>
                <input className={styles.NewsletterFormInput} type="email" name="email" id="email" placeholder="email@company.com" />
                <button className={styles.NewsletterFormButton}>Subscribe to monthly newsletter</button>
            </form>
        </section>
    )
}

export { NewsletterForm }