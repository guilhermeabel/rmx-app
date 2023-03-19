import { useQuery } from "@tanstack/react-query";
import type { Product, HelperTypes } from '~/types';

export const useGetProducts = (options?: HelperTypes.QueryOptions<Product[]>) => {
	return useQuery<Product[]>(
		['products'],
		() => fetch('https://fakestoreapi.com/products?limit=8')
			.then((res) => res.json())
			.then((json) => json),
			{
				...options,
				staleTime: Infinity,
				cacheTime: Infinity
			}
	);
}


