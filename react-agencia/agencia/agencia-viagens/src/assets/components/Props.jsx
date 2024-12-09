import Style from '../styles/Props.module.css'
function Props({lugar, texto, pais}) {
    return(
        <div className={Style.body_props}>
            <h2>Venha conhecer esse lugar incrível: {lugar} !!!</h2>
            <p>{texto}</p>
            <img src={pais} alt="" />
        </div>
    )
}
export default Props