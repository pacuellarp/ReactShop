import { useState } from "react";

const initialState = {
	cart: [],
	total:0,
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);
 


 
	const addToCart = (payload) =>{
		setState({
			...state,
			cart : [
				...state.cart,
				{...payload, idCart:state.cart.length+1},
			],
			total: state.total + payload.price
		})
	};

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter((product)=>product.idCart!==payload.idCart),
			total: state.total - payload.price
		})
	};
 
	return {
		state,
		addToCart,
		removeFromCart
	};
}

export default useInitialState;