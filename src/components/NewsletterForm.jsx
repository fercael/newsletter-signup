import styles from "./NewsletterForm.module.css"

import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg"
import iconList from "../assets/images/icon-list.svg"

import { FeedbackSuccess } from "./FeedbackSuccess"

import { useState } from "react"


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(email)

    return isValidEmail
}


function NewsletterForm() {
    const [newEmail, setNewEmail] = useState('')
    const [displayMessage, setDisplayMessage] = useState(false)
    const [validEmail, setValidEmail] = useState('')

    return(
        <>
            <section className={styles.NewsletterFormSection}>
                <picture className={styles.NewsletterFormPicture}>
                    <source srcSet={illustrationMobile} media="(max-width: 768px)" />
                    <source  srcSet={illustrationDesktop} />
                    <img className={styles.NewsletterFormImg} src={illustrationDesktop} type="svg" />
                </picture>
                <header className={styles.NewsletterFormHeader}>
                    <h1 className={styles.NewsletterFormH1}>Stay updated!</h1>
                    <p className={styles.NewsletterFormP}>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className={styles.NewsletterFormUl}>
                        <li className={styles.NewsletterFormLi}> 
                            <img src={iconList} />
                            <p className={styles.NewsletterFormP}>Product discovery and building what matters</p>
                        </li>
                        <li className={styles.NewsletterFormLi}>
                            <img src={iconList} />
                            <p className={styles.NewsletterFormP}>Measuring to ensure updates are a success</p>
                        </li>
                        <li className={styles.NewsletterFormLi}>
                            <img src={iconList} />
                            <p className={styles.NewsletterFormP}>And much more!</p>
                        </li>
                    </ul>
                </header>
                <form 
                    className={styles.NewsletterFormForm} 
                    onSubmit={e =>{
                        if(validateEmail(validEmail) == true){
                            setDisplayMessage(true)
                            e.preventDefault()
                            return true
                        }
                        return false
                    }}
                >
                    <label
                        className={styles.NewsletterFormLabel} 
                        htmlFor="email">
                            Email address
                    </label>
                    <input className={styles.NewsletterFormInput} 
                        type="email" name="email" 
                        id="email" 
                        placeholder="email@company.com"
                        value={newEmail}
                        onChange={e => setNewEmail(e.target.value)}
                        style={{
                            border: (!validateEmail(newEmail) && newEmail != '') ? '2px solid var(--tomato)' : '2px solid var(--grey)',
                            backgroundColor: (!validateEmail(newEmail) && newEmail != '') ? 'var(--light-tomato)' : 'var(--white)',
                            color: (!validateEmail(newEmail) && newEmail != '') ? 'var(--tomato)' : 'var(--dark-grey)'
                        }}
                        required
                    />
                    <button 
                        type="submit" 
                        className={styles.NewsletterFormButton}
                        onClick={()=> {
                            if(validateEmail(newEmail)){
                                setValidEmail(newEmail)
                            }
                            if (!validateEmail(newEmail)) {
                                setNewEmail('')
                            }
                        }}
                    >
                        Subscribe to monthly newsletter
                    </button>
                </form>
                <FeedbackSuccess display={displayMessage} onClick={setDisplayMessage} />
            </section>
        </>
    ) 
 
}

export { NewsletterForm }