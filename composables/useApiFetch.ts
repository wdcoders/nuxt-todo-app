import type { UseFetchOptions } from "nuxt/app";
import { useAuthStore } from "@/stores/useAuthStore";

export function useApiFetch<T>(
	path: string | (() => string),
	options: UseFetchOptions<T> = {}
) {
	let headers: any = {};

	const tokenStore = useTokenStore();

	const token = tokenStore.authToken;

	if (token) {
		headers["Authorization"] = `Bearer ${token as string}`;
	}

	if (process.server) {
		// headers["Authorization"] = `Bearer ${
		// 	localStorage.getItem(CURRENT_TOKEN) as string
		// }`;
		// headers = {
		// 	...headers,
		// 	...useRequestHeaders(["referer", "cookie"]),
		// };
	}

	return useFetch(`http://localhost:8000/api${path}`, {
		// credentials: "include",
		watch: false,
		...options,
		headers: {
			...headers,
			...options?.headers,
		},
	});
}
