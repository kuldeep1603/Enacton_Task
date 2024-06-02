import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const WishlistProduct = useSelector(state => state.FilterData.wishlist);
    const CartData = useSelector((state) => state.FilterData.Cart);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary-1 py-3">
                <div className="container">
                    <Link to={`/`} className="navbar-brand primary-color fw-700 fs-22 ">Exclusive</Link>
                    <div className="d-lg-none d-block">
                        <form className="d-flex gap-4 flex-wrap " role="search">
                            <Link to={`/Wishlist`} className='wishlist'>
                                <FaRegHeart size={24} className='primary-color' />
                                <span className='bg-primary-1 text-white  fs-8 rounded-circle'>{WishlistProduct.length}</span>
                            </Link>
                            <Link to={`/Cart`} className='wishlist'>
                                <MdOutlineShoppingCart size={26} className='primary-color' />
                                <span className='bg-primary-1 text-white  fs-8 rounded-circle'>{CartData.length}</span>
                            </Link>
                        </form>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 gap-3 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={`/`} className="nav-link ">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/Products`} className="nav-link">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/Cart`} className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/Wishlist`} className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-md-block d-none">
                            <form className="d-flex gap-4 flex-wrap " role="search">
                                <Link to={`/Wishlist`} className='wishlist'>
                                    <FaRegHeart size={24} className='primary-color' />
                                    <span className='bg-primary-1 text-white  fs-8 rounded-circle'>{WishlistProduct.length}</span>
                                </Link>
                                <Link to={`/Cart`} className='wishlist'>
                                    <MdOutlineShoppingCart size={26} className='primary-color' />
                                    <span className='bg-primary-1 text-white  fs-8 rounded-circle'>{CartData.length}</span>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
