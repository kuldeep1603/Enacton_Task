import React from 'react'
import { Link } from 'react-router-dom'
const Breadcums = ({ BreadcumsItems }) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    {
                        BreadcumsItems.map((e, index) => {
                            return (
                                <li class="breadcrumb-item" key={index}>
                                    <Link to={e.Link} className='primary-color tertiary-font fs-15 fw-400'>{e.name}</Link>
                                </li>
                            )
                        })
                    }
                </ol>
            </nav>
        </>
    )
}

export default Breadcums
