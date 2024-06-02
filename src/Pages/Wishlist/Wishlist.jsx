import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getDiscountedPrice, getStarRating } from "../../Components/ProductCard"
import { ImCancelCircle } from "react-icons/im";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Breadcums from '../../Components/Breadcums';
import { useDispatch } from 'react-redux';
import { RemoveWishlistProduct } from "../../Apis/Slice/FilterSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreadcumsItems = [
    { name: "Home", Link: "/" },
    { name: "Wishlist" }
]

const Wishlist = () => {
    const dispatch = useDispatch();
    const WishlistProduct = useSelector(state => state.FilterData.wishlist);

    const HandleRemoveWishlist = (id) => {
        dispatch(RemoveWishlistProduct(id));
        toast.success("Product Remove from  Wishlist");
    }
    return (
        <>
            <section className='section pt-4'>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-12">
                            <Breadcums BreadcumsItems={BreadcumsItems} />
                        </div>
                    </div>
                    <div className="row">
                        {
                            WishlistProduct.length <= 0 ? (
                                <>
                                    <p>No Product Added to Wishlist ....!</p>
                                </>
                            ) : (
                                <>
                                    {
                                        WishlistProduct.map((CurrProducts, index) => {
                                            const { id, title, stock, price, images, rating, discountPercentage } = CurrProducts;
                                            return (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 product-list position-relative" key={id}>
                                                    <div className="card  bg-secondary-1 border-0">
                                                        <Link to={`/Products/${id}`}>
                                                            <div className="card-body">
                                                                <img src={images[0]} alt={title} title={title} loading='lazy' className='img-fluid rounded-2' />
                                                                <div className="discount">
                                                                    <span className='px-2 py-1 rounded-1 text-white bg-primary-1 fs-12'>- {discountPercentage}%</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <div className="wishlist d-flex flex-column gap-2 align-items-center">
                                                            <Link onClick={() => HandleRemoveWishlist(id)} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'><ImCancelCircle /></Link>
                                                            <ToastContainer />
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button type='button' className='bg-black text-white text-center fs-16 fw-semibold btn rounded-1 d-block w-100 text-capitalize'>Buy Now</button>
                                                        </div>
                                                    </div>
                                                    <p className='fw-500  fs-16 mt-3 m-0'>{title.length > 20 ? title.slice(0, 20) + "..." : title}</p>
                                                    <ul className='m-0 mt-1 p-0 d-flex gap-3 align-items-center flex-wrap'>
                                                        <li className='d-flex primary-color tertiary-font align-items-center flex-wrap'>
                                                            <FaIndianRupeeSign size={14} />
                                                            <span className=' fw-semibold'>{getDiscountedPrice(price, discountPercentage)}</span>
                                                        </li>
                                                        <li className='d-flex  align-items-center flex-wrap'>
                                                            <FaIndianRupeeSign size={15} className='tertiary-color tertiary-font fw-semibold' />
                                                            <del className='tertiary-color fs-17 tertiary-font fw-semibold'>{price}</del>
                                                        </li>
                                                    </ul>
                                                    <ul className='d-flex gap-2 align-items-center flex-wrap m-0 p-0 mt-1'>
                                                        <li>
                                                            {getStarRating(rating)}
                                                        </li>
                                                        <li>
                                                            <p className='fw-400 tertiary-font fs-15 m-0'>({stock})</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist
