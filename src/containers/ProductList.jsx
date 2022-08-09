import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>{
					return <ProductItem product={product} key={ product.id }/>; {/*key es el identificador de cada elemento, con product le envía la información de la API al otro componente */}
				})}
			</div>
		</section>
	);
}

export default ProductList;
