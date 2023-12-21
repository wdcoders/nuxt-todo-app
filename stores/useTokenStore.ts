import auth from "~/middleware/auth";

export const useTokenStore = defineStore(
	"token",
	() => {
		const authToken = ref<string | null>(null);
		const isLoggedIn = ref(false);

		const setToken = (token: string) => {
			authToken.value = token;
			isLoggedIn.value = true;
		};

		const removeToken = () => {
			authToken.value = null;
			isLoggedIn.value = false;
		};

		return { authToken, isLoggedIn, setToken, removeToken };
	},
	{
		persist: true,
	}
);
