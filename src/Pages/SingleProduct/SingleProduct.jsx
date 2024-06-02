import React from 'react'
import "./SingleProduct.css"
import { useParams } from 'react-router-dom'
import { FetchSingle } from '../../Apis/Slice/SingleProductSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStarRating, getDiscountedPrice } from "../../Components/ProductCard"
import { LuIndianRupee } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import Breadcums from '../../Components/Breadcums';

const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.SingleProduct.product);

    useEffect(() => {
        setTimeout(() => {
            if (id) {
                dispatch(FetchSingle(`https://dummyjson.com/products/${id}`))
            }
        }, 500);
    }, [id, dispatch]);
    const BreadcumsItems = Data ? [
        { name: "Home", Link: "/" },
        { name: "Products", Link: "/Products" },
        { name: `${Data.title}` }
    ] : [];
    return (
        <>
            {
                Data ? (
                    <section className='section singleproduct'>
                        <div className="container">
                            <div className="row">
                                <Breadcums BreadcumsItems={BreadcumsItems} />
                            </div>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-5 images">
                                    <div className="card border-0 card-body bg-secondary-1">
                                        <img src={Data.images.length === 1 ? Data.images : Data.images[0]} title={Data.title} alt={Data.title} loading='lazy' className='img-fluid object-fit-contain' />
                                    </div>
                                </div>
                                <div className="col-lg-7 data">
                                    <h5 className='fs-22 text-ellipsis fw-600 '>{Data.title}</h5>
                                    <ul className='d-flex m-0 mt-2 p-0 gap-3 align-items-center flex-wrap'>
                                        <li>
                                            {getStarRating(Data.rating)}
                                        </li>
                                        <li>
                                            <p className='secondary-color tertiary-font fs-16 fw-500 m-0 p-0 light-black'>({Data.reviews.length} Reviews)     |</p>
                                        </li>
                                        <li>
                                            <p className='tertiary-font fs-16 fw-500 m-0 p-0 green-color'>{Data.availabilityStatus}</p>
                                        </li>
                                    </ul>
                                    <b className='fw-400 fs-22 text-ellipsis tertiary-font d-flex align-items-center mt-3'> <LuIndianRupee /> {getDiscountedPrice(Data.price, Data.discountPercentage)}</b>
                                    <p className='tertiary-font fw-400  fs-15 mt-3'>{Data.description}</p>
                                    <hr />
                                    <div className="row mb-3 buttons">
                                        <div className="col-md-5 col-6 increment">
                                            <div class="input-group mb-3">
                                                <button className="bg-white tertiary-font fw-400  rounded-0 px-4 py-2" type="button" id="button-addon1">-</button>
                                                <input type="text" className="form-control bg-white text-center" disabled value="0" />
                                                <button className="bg-primary-1 text-white  border-0 tertiary-font fw-400  rounded-0 px-4 py-2" type="button" id="button-addon1"><FaPlus /></button>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6">
                                            <button className='bg-primary-1 text-white  border-0 tertiary-font fw-400 fs-15 d-block w-100 rounded-0 px-2 py-2'>Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card card-body rounded-1">
                                                <ul className='d-flex gap-3 m-0 p-0 '>
                                                    <li>
                                                        <TbTruckDelivery size={35} />
                                                    </li>
                                                    <li>
                                                        <h4 className='fs-17 fw-600 tertiary-font'>Free Delivery</h4>
                                                        <p className='tertiary-font fw-400  fs-15 m-0'>Enter your postal code for Delivery Availability</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card card-body rounded-1">
                                                <ul className='d-flex gap-3 m-0 p-0 '>
                                                    <li>
                                                        <GiReturnArrow size={32} />
                                                    </li>
                                                    <li>
                                                        <h4 className='fs-17 fw-600 tertiary-font'>Return Delivery</h4>
                                                        <p className='tertiary-font fw-400  fs-15 m-0'>{Data.returnPolicy}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <p>No Data Found ...!</p>
                )
            }
        </>
    )
}

export default SingleProduct
