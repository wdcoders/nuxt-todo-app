<script lang="ts" setup></script>

<template>
	<div>
		<ul>
			<li><NuxtLink to="/">Login</NuxtLink></li>
			<li><NuxtLink to="/todo">Todo</NuxtLink></li>
		</ul>
		<slot />
	</div>
</template>

<style scoped></style>
