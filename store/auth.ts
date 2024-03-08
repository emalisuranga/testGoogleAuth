import { defineStore } from 'pinia';
import { getCurrentUser } from "aws-amplify/auth";

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
                const token = useCookie('token'); 
                token.value = currentUser.username; 
                this.authenticated = true; 
            }
        },
        logUserOut() {
            const token = useCookie('token'); 
            this.authenticated = false; 
            token.value = null; 
        },
    },
});