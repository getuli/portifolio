import styles from './Header.module.css'
import icone from './iconesfronteback/transferir.jpeg'
function Header(){
    return(
        <div>
           <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.flex}>
                        <a href="#"> <img src={icone} alt="Logo" /></a>
                        <nav className={styles.nav}>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contato</a></li>
                                <li><a href="#">Habilidade</a></li>
                                <li><a href="#">Certificados</a></li>
                            </ul>
                        </nav>
                        <div className={styles.btn_contato}>
                            <button>Contato</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header