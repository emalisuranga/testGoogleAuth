import { defineNuxtPlugin } from "#app"
import { Amplify,  } from 'aws-amplify'
import '@aws-amplify/ui-vue';
import config from '../src/aws-exports'

export default defineNuxtPlugin(nuxtApp => {
  Amplify.configure(config);

//   return {
//     provide: {
//         auth: Auth
//     }
//   }
  })