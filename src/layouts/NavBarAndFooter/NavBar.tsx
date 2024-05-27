import { Link, NavLink } from "react-router-dom";
import logo from '../../Images/Logo/KLOGO.png';
import { useOktaAuth } from "@okta/okta-react";
import SpinnerLoading from "../Utils/SpinnerLoading";

export default function NavBar() {
  
  const {oktaAuth,authState} = useOktaAuth();
  
  if(!authState){
    return <SpinnerLoading/>
  }
  
  const handleLogout = async()=> oktaAuth.signOut();

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
            {authState.isAuthenticated && 
                <li className='nav-item'>
                <NavLink to='/shelf' className='nav-link' >Shelf</NavLink>
              </li>
            
            }
          </ul>
          <ul className='navbar-nav ms-auto'>     
              {!authState.isAuthenticated ? 
              <li className='nav-item m-1'>
              <Link to='/login' type='button' className='btn btn-outline-light'>Sign in</Link>
            </li>
            :
            <li>
              <button onClick={handleLogout}  className='btn btn-outline-light'>Sign out</button>
            </li>
            }
              
          </ul>
        </div>
      </div>
    </nav>
  )
}
