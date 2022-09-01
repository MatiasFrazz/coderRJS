import logo from '../../src/logo.svg'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
    return( 
    <div className='navbarContainer'>
        <div className='navSearch'>
            
            <div>
                <img src={logo} className="navLogo" alt="logo" />
        </div>

            <ul>
                <li>
                    <a href='../src/App.js'>Inicio</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href='../src/App.js'>Productos</a>
                </li>
            </ul> 

            <ul>   
                <li>
                    <a href='../src/App.js'>Envio</a> 
                </li>
            </ul>  

            <ul>
                <li>
                    <a href='../src/App.js'>Sobre Nosotros</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href='../src/App.js'>Login</a> 
                </li>
            </ul>
            
            <ul>
                <li> 
                    <a href='../src/App.js'>
                        <CartWidget/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}  

export default NavBar