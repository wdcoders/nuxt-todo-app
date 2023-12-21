<script lang="ts" setup>
definePageMeta({
	middleware: ["guest"],
});
import { ref } from "vue";
import { useAuthStore } from "~/stores/useAuthStore";

const form = ref({
	email: "admin@example.com",
	password: "123456",
});

const authStore = useAuthStore();

const handleLogin = async () => {
	await authStore.onLogin(form.value);
};
</script>

<template>
	<div>
		<form @submit.prevent="handleLogin">
			<input type="email" v-model="form.email" />
			<input type="password" v-model="form.password" />
			<button>Submit</button>
		</form>
	</div>
</template>

<style scoped></style>
