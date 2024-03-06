<script setup>
import { signOut } from "aws-amplify/auth";
import { getCurrentUser } from "aws-amplify/auth";
const router = useRouter()

const handleSignOut = async () => {
  try {
    await signOut({ global: true });
  } catch (error) {
    console.log("error signing out: ", error);
  }
};

onMounted(async () => {
  try {
    // Check if the user is authenticated
    const currentUser = await getCurrentUser()
    console.log(currentUser);
    if (currentUser) {
      localStorage.setItem('accessToken', currentUser.userId)
    } else {
    //   router.push('/login')
    }
  } catch (error) {
    console.error('Error getting current user:', error)
  }
})
</script>

<!-- <template>
  <h1>dashboard</h1>
  <button
  @click="handleSignOut"
            class="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50"
          >Sing Out</button>
</template> -->

<template>
    <v-layout>
      <!-- <side-nav /> -->
      <application-bar />
  
      <v-main style="height: 250px">
      </v-main>
    </v-layout>
  </template>