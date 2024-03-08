import { defineStore } from 'pinia';
import { getCurrentUser } from "aws-amplify/auth";

interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
    }),
    actions: {
        async authenticateUser() {

            const currentUser = await getCurrentUser()
            console.log(currentUser)
            // this.loading = pending;

            if (currentUser) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = currentUser.username; // set token to cookie
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        },
    },
});