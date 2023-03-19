import type { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";

type BaseOpts<Response, Error, Select> = Omit<UseQueryOptions<Response, Error, Select>, "notifyOnChangeProps" | "notifyOnChangePropsExclusions">

export declare module HelperTypes {
	type OptionsId<Response = unknown, Error = unknown, Select = Response> = Omit<BaseOpts<Response, Error, Select>, "queryId"> & {	queryId: readonly [string, ...unknown[]] }
	type QueryOptions<Response = unknown, Error = unknown, Select = Response> = Omit<OptionsId<Response, Error, Select>, "queryId" | "queryFunc">;
	type MutationOptions<Params = unknown, Error = unknown, Response = unknown> = UseMutationOptions<Response, Error, Params>
}

export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	image: string;
	price: number;
}

