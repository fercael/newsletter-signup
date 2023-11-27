import styles from "./FeedbackSuccess.module.css"
import iconSuccess from "../assets/images/icon-success.svg"

function FeedbackSuccess() {
    return(
        <section className={styles.FeedbackSuccessSection}>
            <img className={styles.FeedbackSuccessImg} src={iconSuccess} />
            <h1 className={styles.FeedbackSuccessH1}>Thanks for subscribing!</h1>
            <p className={styles.FeedbackSuccessP}>
                A confirmation email has been sent to <strong className={styles.FeedbackSuccessStrong}>ash@loremcompany.com</strong>. 
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button className={styles.FeedbackSuccessButton}>Dismiss message</button>
        </section>
    )
}

export { FeedbackSuccess }