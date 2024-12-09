import bandeira from '../images/bandeira-aruda.png'
import Styles from '../styles/Aruba.module.css'
import Props from './Props'
function Aruba() {
    return(
        <div className={Styles.fundo}>
            <Props 
            texto="lugar"
            pais={bandeira}
            lugar="Escocia"
            />
        </div>
    )
}
export default Aruba