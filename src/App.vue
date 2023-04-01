<script setup>
import { RouterLink, RouterView} from 'vue-router'
import { ref, onMounted, VueElement } from 'vue'
import  BurgerMenu  from '@/components/BurgerMenu.vue'
import GithubService from "@/services/GithubService"



const from = '/';

onMounted(() => {
})


</script>


<template>
    <div class="nav-bar">
      <BurgerMenu />
    </div>


    <div class="Login">
      
    <div class="main-container">
        <RouterView />
    </div>

      <!-- GitHub OAuth -->

      <a v-show="GithubService.isLoggedOut()" :href="GithubService.oauthLoginLink()" class="auth-btn github-auth">
        <span>Login with Github OAuth</span>
      </a> 
    </div>

</template>