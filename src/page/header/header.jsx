import Icon from '../../components/icon/icon'
import Search from '../../components/search/search'
import './header.scss'

function Header() {
    return (
        <header className="header">
           <img width={130} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" />
            <Search />
           <div className="headerSvg">
               <Icon />
           </div>
        </header>
    )
}

export default Header