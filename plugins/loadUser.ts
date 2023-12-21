import { useAuthStore } from "@/stores/useAuthStore";

export default defineNuxtPlugin(async (nuxtApp) => {
	const authStore = useAuthStore();
	const tokenStore = useTokenStore();

	if (tokenStore.isLoggedIn) {
		await authStore.fetchUser();
	}
});
