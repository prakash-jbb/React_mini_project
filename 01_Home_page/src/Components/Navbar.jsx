import logo from '../assets/brand_logo.png';
function Navbar(){

    return(
        <>
        <nav className='container'>

      <div>
        <img src={logo} alt="Logo" id='logo'/>
      </div>
     

            <ul id='navLinks'>
                <li href="#">MENU</li>
                <li href="#">LOCATION</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
            </ul>

            <button id='loginBtn'>Login</button>
            
        </nav>
        </>
    )

};

export default Navbar;