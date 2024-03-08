import { getCurrentUser } from "aws-amplify/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    console.log('From auth middleware')
    // Check if the user is authenticated
    const currentUser = await getCurrentUser()
    console.log(currentUser)
    if (!currentUser) {
      // User is not authenticated, redirect to the login page
      return navigateTo('/login')
    }
  } catch (error) {
    console.error('Error getting current user:', error)
    // Handle errors
  }
  })