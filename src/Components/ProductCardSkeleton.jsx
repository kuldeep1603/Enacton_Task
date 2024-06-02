import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProductCardSkeleton = () => {
    return (
        <>
            <SkeletonTheme baseColor="#F5F5F5" highlightColor="#C4C4C4">
                <Skeleton count={1} style={{ height: "200px" }} />
                <Skeleton count={1} style={{ height: "20px", width: "80%" }} />
                <Skeleton count={1} style={{ height: "20px", width: "70%" }} />
                <Skeleton count={1} style={{ height: "20px", width: "60%" }} />
            </SkeletonTheme>
        </>
    )
}

export default ProductCardSkeleton
