import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom'
const Header = () => {
    const { state: { cart } } = useContext(CartContext)
    return (
        <header className="pt-2">
            <nav className="navbar navbar-expand justify-content-between text-black" >
                <h4 style={{ fontSize: 'xx-large' }} className="text-success navbar-brand">
                    <img height="40px" src="https://pluspng.com/img-png/ice-cream-png-ice-cream-png-image-512.png" />CoolCones</h4>
                <ul className="navbar-nav ">
                    <Link to="/">
                        <li className="nav-item pr-4">
                            <a className="nav-link  text-dark font-weight-bold" href="#">Home</a>
                        </li>
                    </Link>
                    <Link to="/loginpage">
                        <li className="nav-item pr-4">
                            <a className=" nav-link text-dark font-weight-bold" href="#">Login</a>
                        </li></Link>
                    <Link to="/signup">
                        <li className="pr-4 nav-item">
                            <button className="btn btn-dark">Sign Up</button>
                        </li></Link>
                    <Link to="/cart">
                        <li className="pr-4 nav-item">
                            <a className=" nav-link text-dark font-weight-bold">MyCart({cart.length})</a>
                        </li></Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header;