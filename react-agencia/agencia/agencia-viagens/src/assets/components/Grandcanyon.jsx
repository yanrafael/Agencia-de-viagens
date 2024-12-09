import Styles from '../styles/Grandcanyon.module.css'
import Props from './Props'
import bandeira from '../images/bandeira-estados-unidos.webp'
function Grandcanyon() {
    return(
        <div className={Styles.fundo}>
            <Props lugar='Grancanyon' texto='ddddd' pais={bandeira}>

            </Props>
        </div>
    )
}
export default Grandcanyon