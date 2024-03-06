<script setup>
import { signOut } from "aws-amplify/auth";
import { useRouter } from 'vue-router'
const router = useRouter()

const handleSignOut = async () => {
  try {
    await signOut({ global: true });
    router.push('/login')
  } catch (error) {
    console.log("error signing out: ", error);
  }
};
</script>

<template>
  <!-- <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator> -->
  <h1>dashboard</h1>
  <button
  @click="handleSignOut"
            class="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50"
          >Sing Out</button>
</template>