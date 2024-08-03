import { Link } from 'react-router-dom';
import './Navbar.css'
import { BsCart4 } from "react-icons/bs";
import { MdOutlineLightMode ,MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../Redux/slices/global';

function Navbar() {

    const dispatch=useDispatch()
const {theme}=useSelector(store=>store.global)

    const changeTheme  =()=>{
      dispatch(toggleTheme (theme));
    }

    return (
      <>
        <div className={`navbarContainer ${theme}`} >
          <div className="navbar container">
            <ul>
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link to="/about">درباه ما</Link>
              </li>
              <li>
                <Link to="/contact">تماس با ما</Link>
              </li>
            </ul>

            <div className="icons">
              <span className="cartIcon">
                <Link to="/cart">
                  <BsCart4 size="25px" />
                </Link>
                <span>5</span>
              </span>
              <span className="darkModeIcon">
                <MdOutlineDarkMode size="25px"  onClick={changeTheme }     />
              </span>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar;