import React from 'react';
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscountedPrice } from "../../Components/ProductCard"
import { LuIndianRupee } from "react-icons/lu";
import { RemoveCart } from '../../Apis/Slice/FilterSlice';

const Cart = () => {
    const CartData = useSelector((state) => state.FilterData.Cart);
    const dispatch = useDispatch();
    const HandleRemovecart = (id) => {
        dispatch(RemoveCart(id));
    }
    if (CartData.length <= 0) {
        return (
            <>
                <section className='section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className='text-center m-0'>No Product Added to Cart ..!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return (
        <>
            <section className='section cart'>
                <div className="container">
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-11">
                            <h4 className='fw-600 fs-18 tertiary-font'>Shopping Cart</h4>
                            <p className='mt-1 m-0 fs-16 fw-400 tertiary-font'>Your Cart has {CartData.length} items</p>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-11">
                            {
                                CartData.length <= 0 ? (
                                    <>
                                        <p>No Product Added to Cart ..!</p>
                                    </>
                                ) : (
                                    <>
                                        <div className="table-responsive">
                                            <table class="table   table-hover align-middle">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Item</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        CartData.map((CurrProducts, index) => {
                                                            const { id, title, stock, price, images, rating, discountPercentage } = CurrProducts;
                                                            return (
                                                                <tr key={id}>
                                                                    <td className='img'>
                                                                        <ul className='d-flex m-0 p-0 gap-3 align-items-center'>
                                                                            <li>
                                                                                <div className="card border-0 rounded-1 p-2 card-body bg-secondary-1">
                                                                                    <img src={images.length == 1 ? images : images[0]} alt={title} title={title} loading='lazy' className='img-fluid' />
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <h5 className='fs-16 text-ellipsis tertiary-font fw-400'>{title}</h5>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                    <td className='price'>
                                                                        <ul className='d-flex m-0 p-0 gap-3 align-items-center'>
                                                                            <li>
                                                                                <LuIndianRupee />
                                                                            </li>
                                                                            <li>
                                                                                {getDiscountedPrice(price, discountPercentage)}
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                    <td className='quantity'>
                                                                        <ul className='m-0 p-0'>
                                                                            <li className='d-flex gap-2 align-items-center'>
                                                                                <button type='button' className='border-0 bg-secondary-1 rounded-1 px-3 fs-22 '>-</button>
                                                                                <p className='m-0 fw-500 tertiary-font fs-16'>0</p>
                                                                                <button type='button' className='border-0 bg-secondary-1 rounded-1 px-3 fs-22 '>+</button>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <button onClick={() => HandleRemovecart(id)} className="border-0 rounded-1 px-2 py-1 fs-14 tertiary-font">Remove</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="offset-lg-7 col-lg-4">
                            <ul className='m-0 p-0'>
                                <li className='d-flex justify-content-between align-items-center my-3 flex-wrap gap-3'>
                                    <p className='m-0 fs-16 tertiary-font fw-400'>Total Items : </p>
                                    <span>{CartData.length}</span>
                                </li>
                                <hr className='m-0' />
                                <li className='d-flex justify-content-between align-items-center my-3 flex-wrap gap-3'>
                                    <p className='m-0 fs-16 tertiary-font fw-400'> Discount: </p>
                                    <span>{CartData.length}</span>
                                </li>
                                <hr className='m-0' />
                                <li className='d-flex justify-content-between align-items-center my-3 flex-wrap gap-3'>
                                    <p className='m-0 fs-16 tertiary-font fw-400'>Amount : </p>
                                    <span>{CartData.length}</span>
                                </li>
                                <hr className='m-0' />
                                <li>
                                    <button type='button' className='bg-primary-1 text-center d-block w-100 text-white rounded-1 px-3 py-2 border-0'>CheckOut</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
