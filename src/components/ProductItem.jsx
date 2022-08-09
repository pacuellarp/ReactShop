import React, { useContext } from'react';
import'@styles/ProductItem.scss';
import AppContext from'../context/AppContext';
import addToCartImage from'@icons/bt_add_to_cart.svg';
import iconClose from'@icons/icon_close.png';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleAdd = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]}alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{/*{!addedToCart ? */}
				<figure onClick={() => handleAdd(product)} >
					<img src={addToCartImage}alt="" />
				</figure> 
				{/* :
				<figure >
					<img src={iconClose}alt="" />
				</figure> */}
			</div>
		</div>
	);
}

export default ProductItem;
