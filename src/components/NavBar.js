import logo from '../../src/logo.svg'

const NavBar = () => {
    return( 
    <div className='navbarContainer'>
        <div className='navSearch'>
            
            <div>
                <img src={logo} className="navLogo" alt="logo" />
           </div>

            <ul>
                <li className='navInicio'>
                    <a href='../src/App.js'>Inicio</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href='../src/App.js'>Portfolio</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href='../src/App.js'>Productos</a>
                </li>
            </ul> 

            <ul>   
                <li className='navInicio'>
                    <a href='../src/App.js'>Envio</a> 
                </li>
            </ul>  

            <ul>
                <li className='navInicio'>
                    <a href='../src/App.js'>Login</a> 
                </li>
            </ul>
         
         </div>
    </div>
    )
}  

export default NavBar