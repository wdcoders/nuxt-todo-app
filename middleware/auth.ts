export default defineNuxtRouteMiddleware((to, from) => {
	const tokenStore = useTokenStore();

	if (!tokenStore.isLoggedIn) {
		return navigateTo("/", { replace: true });
	}
});
