import { defineStore } from "pinia";
import { useTokenStore } from "./useTokenStore";

type User = {
	id: number;
	name: string;
	email: string;
};

type LoginResponse = {
	token: string;
};

type Credentials = {
	email: string;
	password: string;
};

export const CURRENT_TOKEN = "CURRENT_TOKEN";

export const useAuthStore = defineStore("auth", () => {
	const user = ref<User | null>(null);
	const tokenStore = useTokenStore();
	const fetchUser = async () => {
		const { data } = await useApiFetch("/me");
		user.value = data.value as User;
	};

	const onLogin = async (credentials: Credentials) => {
		try {
			const { data } = await useApiFetch("/login", {
				method: "POST",
				body: credentials,
			});
			if (data.value) {
				const loginResponse =
					data.value as LoginResponse;
				tokenStore.setToken(loginResponse.token);
				await fetchUser();
				return navigateTo("todo");
			}
		} catch (error) {
			throw error;
		}
	};

	const onLogout = async () => {
		await useApiFetch("/logout", {
			method: "POST",
		});
		user.value = null;
		tokenStore.removeToken();
		return navigateTo("/");
	};

	return {
		user,
		onLogin,
		fetchUser,
		onLogout,
	};
});
