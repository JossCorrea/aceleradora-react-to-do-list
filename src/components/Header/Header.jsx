import LogoImage from '../../assets/logo.svg'
import './header.styles.css'


const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={LogoImage} alt="logo com a imagem de um avião de papel escrito minha listinha"/>
      </div>
    </header>
  )
}

export default Header