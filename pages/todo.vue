<script lang="ts" setup>
definePageMeta({
	middleware: ["auth"],
});

const authStore = useAuthStore();
const onLogout = async () => {
	await authStore.onLogout();
};
</script>

<template>
	<div>Todo Page</div>
	<button @click="onLogout">Logout</button>
</template>

<style scoped></style>
