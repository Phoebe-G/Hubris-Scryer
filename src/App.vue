<script setup>
import { RouterLink, RouterView} from 'vue-router'
import { ref, onMounted, VueElement } from 'vue'
import  BurgerMenu  from '@/components/BurgerMenu.vue'
import GithubService from "@/services/GithubService"


onMounted(() => {

  GithubService.oauthLogin() /*
  .then((response) => {
    console.log(response)
      tree.value = response.data.tree
  }) */
})


</script>


<template>
    <div class="nav-bar">
      <BurgerMenu />
    </div>

    <div class="main-container">
        <RouterView />
    </div>

</template>