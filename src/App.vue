<script setup>
    import {
RouterLink,
RouterView
} from 'vue-router';
</script>

<template>
    <header class="bg-gray-100 py-2">
        <div class="container flex items-center">
            <img alt="Vue logo" class="logo h-10 w-10" src="@/assets/logo.svg" />

            <div class="ml-auto">
                <font-awesome-icon icon="fa-solid fa-bars" class="lg:hidden" />

                <nav class="hidden lg:flex gap-4 items-center">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                    <button class="py-2 px-4 rounded-md bg-blue-800 text-white grid place-items-center">Join Today</button>
                </nav>
            </div>
        </div>
    </header>

    <RouterView />
</template>
