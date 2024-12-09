import Styles from '../styles/Muralha.module.css'
import Props from './Props'
import bandeira from '../images/bandeira-china.png'
function Muralha() {
    return(
        <div className={Styles.fundo}>
            <Props  lugar="Escocia" texto="Castelos medievais, lindas florestas, boa cerveja, comidas típicas, ambiente acolhedor" pais={bandeira}></Props>
        </div>
    )
}
export default Muralha