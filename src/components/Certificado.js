import styles from './Certificado.module.css';
import certificado_first from './projetosfotos/image.png'
import certificado_second from './projetosfotos/certificado-1.png'

function Certificado() {
    return (
        <section className={styles.section_scroll}>
            <div className={styles.certificadoContainer}>
                <h1>Certificados:</h1>
                <div className={styles.scrollingWrapper}>
                    <div className={styles.certificado}>
                        <img src={certificado_first} alt="Certificado 1" />
                    </div>
                    <div className={styles.certificado}>
                        <img src={certificado_second} alt="Certificado 2" />
                    </div>
                    <div className={styles.certificado}>
                        <img src={certificado_first} alt="Certificado 3" />
                    </div>
                    <div className={styles.certificado}>
                        <img src={certificado_first} alt="Certificado 4" />
                    </div>
                    <div className={styles.certificado}>
                        <img src={certificado_first} alt="Certificado 5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certificado;
