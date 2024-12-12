import styles from './Footer.module.css';
import iconhub from './iconesfronteback/transferir (2).png'
import iconinsta from './iconesfronteback/transferir.jpeg'
import iconlikedin from './iconesfronteback/transferir (4).png'


function Footer() {
    return (
        <footer className={styles.footer}>
            <hr className={styles.hr}/>
            <h1>Contact me</h1>
            <div className={styles.container_footer}>
                <input name="nome" type="text" placeholder="Your Name..." />
                <input name="email" type="email" placeholder="Your Email..." />
                <input name="subject" type="text" placeholder="Subject..." />
                <input name="phone" type="number" placeholder="Phone Number..." />
                <textarea
                    name="textarea"
                    id="textarea"
                    placeholder="Digite a sua mensagem"
                ></textarea>
                <button>Send</button>
            </div>

            <div className={styles.lastfooter}>
                <a href="">
                    <img src={iconlikedin} alt="img" />
                </a>
                <a href="">
                    <img src={iconinsta} alt="img" />
                </a>
                <a href="">
                    <img src={iconhub} alt="img" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
