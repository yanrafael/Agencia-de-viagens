import Styles from '../styles/Escocia.module.css'
import Props from './Props'
import bandeira from '../images/Bandeira-escocia.png'
function Escocia() {
    return(
        <div className={Styles.fundo}>
            <Props  lugar="Escocia" texto="Castelos medievais, lindas florestas, boa cerveja, comidas típicas, ambiente acolhedor" pais={bandeira}></Props>
        </div>

    )
}
export default Escocia