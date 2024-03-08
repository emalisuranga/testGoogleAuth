import { getCurrentUser } from "aws-amplify/auth";
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const { authenticateUser } = useAuthStore();
    const { authenticated } = storeToRefs(useAuthStore());
  try {
    console.log('From auth middleware')
    await authenticateUser()
    if (!authenticated) {
      router.push('/');
    }
  } catch (error) {
    console.error('Error getting current user:', error)
    // Handle errors
  }
  })