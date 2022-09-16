import logo from '../../src/logo.svg'
import CartWidget from './CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import App from '../App'

const NavBar = () => {
    return( 
    <div className='navbarContainer'>
        <div className='navSearch'>
            
            <div>
                <img src={logo} className="navLogo" alt="logo" />
        </div>

            <ul>
                <li>
                    <NavLink to={App.js}>  Inicio</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to={"productos"}> Productos</NavLink>
                </li>
            </ul> 

            <ul>   
                <li>
                    <NavLink to={"detalle"}> Envio</NavLink> 
                </li>
            </ul>  

            <ul>
                <li>
                    <NavLink to={App.js}> Sobre Nosotros</NavLink>
                </li>
            </ul>

            <ul>
                <li> 
                    <NavLink to={App.js}> 
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to={CartWidget}> Login</NavLink> 
                </li>
            </ul>
            
        </div>
    </div>
    )
}  

export default NavBar