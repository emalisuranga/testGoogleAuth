<template>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-logout" @click="handleSignOut"></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
</template>

<script setup>
import { signOut } from "aws-amplify/auth";
import { useRouter } from 'vue-router'
const router = useRouter()

const handleSignOut = async () => {
  try {
    await signOut({ global: true });
  } catch (error) {
    console.log("error signing out: ", error);
  }
};

</script>