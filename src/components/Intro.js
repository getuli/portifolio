import styles from './Intro.module.css'
import foto from './projetosfotos/WhatsApp Image 2024-11-14 at 18.59.37.jpeg'
function Intro(){
    return(
        <div>
            
    <section className={styles.section}>
        <div className={styles.apresentacao}>
            <h1>Desenvolvedor FullStack</h1>
            <p>"A ciência de hoje é a tecnologia de amanhã" Edward Teller</p>
        </div>
        <div className={styles.apresentacao2}>
            <div className={styles.barra}></div>
            <div className={styles.container1}>
                <h1>Olá eu sou o Getúlio</h1>
                <h2>Prazer em conhece-lo</h2>
                <p>Sou viciado em adquirir conhecimento, sou encantado pelo desenvolvimento pessoal e pela capacidade de uma pessoa se tornar a melhor versão de si mesma. Acredito que através do esforço contínuo é possível quebrar barreiras e abrir portas para novas oportunidades.</p>
            </div>
            <div className={styles.container2}>
                <img src={foto} alt="Imagem "/>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Intro