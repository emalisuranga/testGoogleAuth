<script setup>
import { signOut } from "aws-amplify/auth";
import { storeToRefs } from 'pinia'; 
import { useAuthStore } from '~/store/auth'; 

const { logUserOut } = useAuthStore();

const handleSignOut = async () => {
  try {
    await signOut({ global: true });
    logUserOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
};
definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
</script>

<!-- <template>
  <h1>dashboard</h1>
  <button @click="signOut" class="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50">Sing Out</button>
</template> -->

<template>
    <!-- <h1>dashboard</h1>
  <button @click="handleSignOut" class="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50">Sing Out</button> -->
    <v-layout>
      <application-bar />
  
      <v-main style="height: 250px">
      </v-main>
    </v-layout>
  </template>