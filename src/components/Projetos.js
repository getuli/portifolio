import styles from './Projetos.module.css'
import createproject from './projetosfotos/Captura de tela 2024-11-12 182529.png'
import front_form from './projetosfotos/Captura de tela 2024-11-15 180403.png'
import create_blog from './projetosfotos/Captura de tela 2024-11-12 182017.png'
import eventos from './projetosfotos/Captura de tela 2024-11-12 182230.png'
import other_frontend_form from './projetosfotos/Captura de tela 2024-11-15 180601.png'
function Projetos() {
    return (
        <div className={styles.habilidade}>
            <div className={styles.divtext}>
                <h1>Projetos:</h1>
            </div>
            <div className={styles.projetos}>
                <div className={styles.projeto1}>
                    <h1>Criador de projetos</h1>
                    <p>
                        O sistema React.js permite a criação, atualização e exclusão de projetos,
                        mostrando as informações e orçamentos de maneira organizada.
                    </p>
                    <img
                        className={styles.imgdiv}
                        src={createproject}
                        alt="Criador de projetos"
                    />
                    <button>
                        <a href="https://github.com/getuli/react-js-moneys" target="_blank" rel="noopener noreferrer">
                            Ver Mais
                        </a>
                    </button>
                </div>

                <div className={styles.projeto1}>
                    <h1>Página Front-end</h1>
                    <p>Simulação de projeto Front-End</p>
                    <img
                        className={styles.imgdiv}
                        src={front_form}
                        alt="Página Front-end"
                    />
                    <button>
                        <a href="https://portifoliogjm.online/Site_front_cadastro/index2.html" target="_blank" rel="noopener noreferrer">
                            Ver Mais
                        </a>
                    </button>
                </div>

                <div className={styles.projeto1}>
                    <h1>Criador de Blogs</h1>
                    <p>
                        Um criador de blogs React.js, aplicação que permite criar e gerenciar blogs
                        de forma intuitiva e personalizada.
                    </p>
                    <img
                        className={styles.imgdiv}
                        src={create_blog}
                        alt="Criador de Blogs"
                    />
                    <button>
                        <a href="https://github.com/getuli/blog" target="_blank" rel="noopener noreferrer">
                            Ver Mais
                        </a>
                    </button>
                </div>

                <div className={styles.projeto1}>
                    <h1>Gerenciador de Eventos GJM</h1>
                    <p>
                        Este sistema PHP/Laravel permite realizar as principais operações de CRUD
                        (Criar, Ler, Atualizar e Deletar) em eventos. Banco de dados MySQL e Jetstream.
                    </p>
                    <img
                        className={styles.imgdiv}
                        src={eventos}
                        alt="Gerenciador de Eventos GJM"
                    />
                    <button>
                        <a href="https://portifoliogjm.online/public" target="_blank" rel="noopener noreferrer">
                            Ver Mais
                        </a>
                    </button>
                </div>

                <div className={styles.projeto1}>
                    <h1>Front-End Formulário</h1>
                    <p>Simulação de um formulário profissional</p>
                    <img
                        className={styles.imgdiv}
                        src={other_frontend_form}
                        alt="Front-End Formulário"
                    />
                    <button>Ler mais</button>
                </div>

                <div className={styles.projeto1}>
                    <h1>Texto que vai aparecer</h1>
                    <p>
                        Este software foi desenvolvido para coletar dados da calculadora do
                        Google AdSense usando Selenium para automação de web [...]
                    </p>
                    <img
                        className={styles.imgdiv}
                        src={eventos}
                        alt="Software para coleta de dados"
                    />
                    <button>Ler mais</button>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
