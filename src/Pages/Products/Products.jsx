import React, { useState } from 'react';
import "./Products.css";
import { useDispatch, useSelector } from 'react-redux';
import { FetchProducts } from '../../Apis/Slice/DataSlice';
import { useEffect } from 'react';
import Filters from '../../Components/Filters';
import Sort from '../../Components/Sort';
import ProductCard from '../../Components/ProductCard';
const Products = () => {
    const dispatch = useDispatch();
    const SortPrice = useSelector((state) => state.FilterData.SortPrice);
    const SearchData = useSelector((state) => state.FilterData.search);
    const CheckBoxData = useSelector((state) => state.FilterData.checkData);

    useEffect(() => {
        // const fetchUrl = CheckBoxData
        //     ? `https://dummyjson.com/products/category/${CheckBoxData}`
        //     : `https://dummyjson.com/products/search?q=${SearchData}&sortBy=price&order=${SortPrice}`;

        let fetchUrl = ``;
        if (CheckBoxData) {
            fetchUrl = `https://dummyjson.com/products/category/${CheckBoxData}`;
        } else if (SearchData && SortPrice) {
            fetchUrl = `https://dummyjson.com/products/search?q=${SearchData}&sortBy=price&order=${SortPrice}`;
        } else {
            fetchUrl = `https://dummyjson.com/products/search?q=${SearchData}&sortBy=price&order=${SortPrice}&limit=150`;
        }

        const fetchData = async () => {
            await dispatch(FetchProducts(fetchUrl));
        };

        const delayDebounceFn = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [dispatch, SortPrice, SearchData, CheckBoxData]);


    return (
        <>
            <section className='section'>
                <div className="container">
                    <div className="row">
                        {/* Sort */}
                        <div className="col-12 mb-4">
                            <Sort />
                        </div>
                        {/* filters  */}
                        <div className="col-lg-3 col-md-3">
                            <Filters />
                        </div>
                        {/* products list  */}
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products




