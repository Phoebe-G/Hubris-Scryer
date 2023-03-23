<script setup>
import { RouterLink, RouterView} from 'vue-router'
import  BurgerMenu  from '@/components/BurgerMenu.vue'
</script>

<template>
    <div class="nav-bar">
      <BurgerMenu />
    </div>

    <div class="main-container">
        <RouterView />
    </div>

</template>