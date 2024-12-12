import styles from './Skills.module.css';
import iconeback from './iconesfronteback/OIP (1).jpeg'
import iconefront from './iconesfronteback/OIP.jpeg'
import iconetecno  from './iconesfronteback/OIP (2).jpeg'

function Skills() {
    return (
        <div className={styles.oquesei}>
            <div className={styles.container_skill}>
                <div className={styles.skills}>
                    <div className={styles.skill_1}>
                        <img src={iconeback} alt="Back-End" />
                        <h1>Back-End</h1>
                        <h3>
                            O back-end lida com as operações do lado do servidor e o processamento de
                            dados [...]
                        </h3>
                        <p>Para mais detalhes, clique no ícone "?"</p>
                    </div>
                    <h2>Linguagens</h2>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>JavaScript</li>
                    </ul>
                    <h2>Ferramentas</h2>
                    <ul>
                        <li>Laravel</li>
                        <li>Node.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div className={styles.skills}>
                    <div className={styles.skill_1}>
                        <img src={iconefront} alt="Front-End" />
                        <h1>Front-End</h1>
                        <h3>
                            O Front-End trabalha a parte do UX, a User Experience forma a parte visual
                            e a colocação dos elementos.
                        </h3>
                        <p>Para mais detalhes, clique no ícone "?"</p>
                    </div>
                    <h2>Linguagens</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <h2>Ferramentas</h2>
                    <ul>
                        <li>React.js</li>
                        <li>Vue.js</li>
                        <li>Laravel</li>
                    </ul>
                </div>

                <div className={styles.skills}>
                    <div className={styles.skill_1}>
                        <img src={iconetecno} alt="Back-End" />
                        <h1>Back-End</h1>
                        <h3>
                            O back-end lida com as operações do lado do servidor e o processamento de
                            dados [...]
                        </h3>
                        <p>Para mais detalhes, clique no ícone "?"</p>
                    </div>
                    <h2>Linguagens</h2>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                    <h2>Ferramentas</h2>
                    <ul>
                        <li>Laravel</li>
                        <li>React.js</li>
                        <li>Vue.js</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
