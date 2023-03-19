import type { MetaFunction } from "@remix-run/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "~/styles/global.css";

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "New Remix App",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<QueryClientProvider client={queryClient}>
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</QueryClientProvider>
			</body>
		</html>
	);
}
