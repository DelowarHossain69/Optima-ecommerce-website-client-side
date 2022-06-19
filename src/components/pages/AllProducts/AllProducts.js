import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import ProductCard from '../../shared/PrimaryProductCard/PrimaryProductCard';

const AllProducts = () => {
    const {data:products, isLoading} = useQuery('allProducts', ()=> 
        fetch('http://localhost:5000/products')
        .then(res => res.json())
    );

    if(isLoading){
        return <Loading />
    }

    return (
        <section className='py-12 mx-3 lg:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

           {
                products?.map(product => <ProductCard key={product._id} product={product} />)
           } 
        </section>
    );
};

export default AllProducts;