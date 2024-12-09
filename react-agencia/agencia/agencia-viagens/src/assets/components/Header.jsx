import Lupa from '../images/lupa.png'
import Logo from '../images/viagens.jpg'
import Style from '../styles/Header.module.css'
import { Link } from 'react-router-dom'
function Header() {
    return(
        <header className={Style.content}>
            <Link to='/'><img src={Logo} alt="Logo" className={Style.log}/></Link>
            <nav className={Style.menu}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='Escocia'>Escócia</Link></li>
                    <li><Link to='Grandcanyon'>Grand Canyon</Link></li>
                    <li><Link to='Muralha'>Muralhas da China</Link></li>
                    <li><Link to='Aruba'>Aruba</Link></li>
                    <li><Link to={'https://www.cvc.com.br/' } target='_blank'>Agencia</Link></li>
                </ul>
            </nav>

            <div className={Style.login}>
                <input type="search" name="" id="" />
            </div>
            <img src={Lupa} alt="Lupa" className={Style.lupa}/>
        </header>
    )
}
export default Header