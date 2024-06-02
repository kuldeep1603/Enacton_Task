import React, { useState } from 'react'
import "../Pages/Products/Products.css"
import { sortbyprice } from '../Apis/Slice/FilterSlice'
import { useDispatch } from 'react-redux'

const Sort = () => {
    const dispatch = useDispatch();
    const HandleSortByPrice = (e) => {
        dispatch(sortbyprice(e.target.value));
    }
    return (
        <>
            <div className="row justify-content-end">
                <div className="col-lg-3 col-md-5 col-sm-6 col-6">
                    <select className="form-select" onChange={HandleSortByPrice}>
                        <option value="desc" selected>Sort By Price</option>
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Sort
