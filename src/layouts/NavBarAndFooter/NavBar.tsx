import { Link } from "react-router-dom";
import logo from '../../Images/Logo/KLOGO.png';

export default function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'><img width="70" height="70" src={logo}/></span>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/search' className='nav-link' >Search Books</Link>
            </li>
              <li className='nav-item'>
                <a className='nav-link' >Shelf</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' >Admin</a>
              </li>
          </ul>
          <ul className='navbar-nav ms-auto'>     
              <li className='nav-item m-1'>
                <a type='button' className='btn btn-outline-light'>Sign in</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
