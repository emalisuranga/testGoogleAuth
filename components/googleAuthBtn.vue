<template>
    <div class="mt-6 grid grid-cols-1 gap-3">
          <button
            @click="handleSignInClick"
            class="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50"
          >
            <span class="sr-only">Sign in with Google</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <clipPath id="p.0">
                <path
                  d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z"
                  clip-rule="nonzero"
                ></path>
              </clipPath>
              <g clip-path="url(#p.0)">
                <path
                  fill="currentColor"
                  fill-opacity="0.0"
                  d="m0 0l20.0 0l0 20.0l-20.0 0z"
                  fill-rule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z"
                  fill-rule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </button>
          <!-- <v-btn icon="mdi-logout" @click="handleSignOut"></v-btn> -->
        </div>
</template>

<script setup>
import { signInWithRedirect } from "aws-amplify/auth";
import { signOut } from "aws-amplify/auth";

const handleSignInClick = async () => {
  try {
    await signInWithRedirect({ provider: "Google" });
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

// const handleSignOut = async () => {
//   try {
//     await signOut({ global: true });
//   } catch (error) {
//     console.log("error signing out: ", error);
//   }
// };
</script>