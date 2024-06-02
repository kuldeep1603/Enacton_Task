import React from 'react'
import "../Pages/Products/Products.css"
import { searchproduct } from '../Apis/Slice/FilterSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { CheckBoXData } from '../Apis/Slice/FilterSlice'
import { FetchCategory } from '../Apis/Slice/DataSlice'
import { useEffect } from 'react'
const Filters = () => {
    const dispatch = useDispatch();
    const SearchData = useSelector((state) => state.FilterData.search);
    const HandleSearch = (e) => {
        dispatch(searchproduct(e.target.value));
    }
    const HandleFilter = (data) => {
        dispatch(CheckBoXData(data));
    }
    useEffect(() => {
        dispatch(FetchCategory(`https://dummyjson.com/products/category-list`));
    }, [dispatch]);
    const CategoryData = useSelector((state) => state.ProductsData.Category);
    return (
        <>
            <div className="row">
                {/* search */}
                <div className="col-12">
                    <p className='fw-500 fs-17 text-dark mb-2'>What are you looking for?</p>
                    <input type="text" value={SearchData} onChange={HandleSearch} placeholder='Search...!' className='form-control tertiary-font' autoComplete='off' />
                </div>
                <div className="col-12 mt-4">
                    <p className='fw-500 fs-17 text-dark mb-2'>Filter Data</p>
                    <ul className='m-0 p-0 d-flex flex-md-column flex-row flex-wrap gap-md-0 gap-1'>
                        {
                            CategoryData.map((e, index) => {
                                return (
                                    <li key={index}>
                                        <div className="form-check mb-1" >
                                            <input className="form-check-input" type="radio" name="filter" onClick={() => HandleFilter(e)} value="" id={e} />
                                            <label className="form-check-label" for={e}>
                                                {e}
                                            </label>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Filters

