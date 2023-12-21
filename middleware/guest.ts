export default defineNuxtRouteMiddleware((to, from) => {
	const tokenStore = useTokenStore();

	if (tokenStore.isLoggedIn) {
		return navigateTo("todo", { replace: true });
	}
});
