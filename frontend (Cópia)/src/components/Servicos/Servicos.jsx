import './Servicos.scss'

export default function Servicos({title, text, icon}) {
  return (
    <>
    <div className='services'>
        <div className='services-img-container'>
            <img src={icon} alt="Brigadeiro" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
