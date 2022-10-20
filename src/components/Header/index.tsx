import { Link } from "react-router-dom"
import homeIcon from '../../images/home-icon.svg'
import logo from '../../images/logo.svg'
import style from './header.module.scss'
const Header :React.FC = () => {
    return (
        <div className='header'>
           <div className='content'>
           <div className={style.header_wrapper}>
            <div className={style.logo_wrapper}>
                <Link to='/'><img src={logo} alt='logo' className={style.logo}/></Link>
            </div>
                <div className={style.links_wrapper}>
                    <Link to='/'><img src={homeIcon} alt="Home icon" /></Link>
                    <Link to='news'>Новости</Link>
                </div>
           </div>
           </div>
        </div>
    )
}

export default Header