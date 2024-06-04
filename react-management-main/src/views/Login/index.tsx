import styles from './login.module.scss'
import initLoginBg from './init.ts'

const view = () => {

    return (
        <div className={styles.loginPage}>
            <canvas id='canvas' style={{ display: 'block' }}></canvas>
            login
        </div>
    )
}

export default view