import React from 'react'
import "../Pages/Products/Products.css"
import { useSelector } from 'react-redux';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsHeart } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import ProductCardSkeleton from './ProductCardSkeleton';
import { useDispatch } from 'react-redux';
import { WishlistProduct } from "../Apis/Slice/FilterSlice"
import { AddTocart } from '../Apis/Slice/FilterSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getDiscountedPrice = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;
    const total = price - discountAmount;
    return total.toFixed(2); // Round to 2 decimal places
};
export const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<IoStar key={`full-${i}`} className='star-color' />);
    }
    for (let i = 0; i < halfStars; i++) {
        stars.push(<IoStarHalf key={`half-${i}`} className='star-color' />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<IoStarOutline key={`empty-${i}`} className='star-color' />);
    }

    return stars;
};

const ProductCard = () => {
    const items = useSelector((state) => state.ProductsData.products);
    const loading = useSelector((state) => state.ProductsData.IsLoading);
    const Error = useSelector((state) => state.ProductsData.IsError);

    const dispatch = useDispatch();

    const HandleWishlist = (Product) => {
        dispatch(WishlistProduct(Product));
        toast.success("Product to Wishlist ...!");
    }
    const HandleCart = (product) => {
        dispatch(AddTocart(product));
        toast.success("Product to Cart ...!");
    };

    if (loading) {
        return (
            <>
                {[...Array(20)].map((_, index) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4" key={index}>
                        <ProductCardSkeleton />
                    </div>
                ))}
            </>
        )
    }
    if (Error) {
        return <p className=''>Error Fetching Data ...!</p>
    }
    return (
        <>
            {
                items.map((CurrProducts, index) => {
                    const { id, title, stock, price, images, rating, discountPercentage } = CurrProducts;
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-4 product-list position-relative" key={id}>

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
                                    <a onClick={() => HandleWishlist(CurrProducts)} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'><BsHeart /></a>
                                    <ToastContainer />
                                    {/* <a onClick={() => dispatch(WishlistProduct(CurrProducts))} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'><BsHeart /></a> */}
                                    <Link to={`/Products/${id}`} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'><FiEye /></Link>
                                </div>
                                <div className="add-to-cart">
                                    <button type='button' onClick={() => HandleCart(CurrProducts)} className='bg-black text-white text-center fs-16 fw-semibold btn rounded-1 d-block w-100 text-capitalize'>Add to cart</button>
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
export default ProductCard

