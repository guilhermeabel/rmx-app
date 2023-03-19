import { useEffect, useReducer } from 'react';
import type { Product } from '~/types';
import { useGetProducts } from '~/hooks/products/useGetProducts';
import { Loading } from '../utils/loading';

type Action = {
	type: 'SET_PRODUCTS',
	payload: Product[]
}

function productReducer(state: Product[], action: Action) {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return action.payload;
		default:
			return state;
	}
}

export const Products = () => {
	const [products, dispatch] = useReducer(productReducer, []);

	const { isLoading, error, data } = useGetProducts();

	useEffect(() => {
		if (data) {
			dispatch({ type: 'SET_PRODUCTS', payload: data });
		}
	}, [data]);


	if (isLoading) return <Loading />;
	if (error) return <div>An error has occurred: {(error as Error).message}</div>;

	return (
		<div className="container">
			{products.map((product: Product) => (
				<div className="card" key={product.id}>
					<div className="header">
						<img src={product.image} alt={product.title} />
					</div>
					<div className="content">
						<h3>{product.title}</h3>
						<p>{product.category}</p>
					</div>
					<div className="footer">
						<div>${product.price}</div>
					</div>
				</div>
			))}
		</div>
	);
}
