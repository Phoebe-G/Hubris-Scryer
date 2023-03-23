<script setup>
import { RouterLink, RouterView} from 'vue-router'
</script>

<template>
    <div class="nav-bar">
      <lesson-menu :lessons="lessons" :course="course" @lesson-select="updateLesson"></lesson-menu>
    </div>

    <div class="main-container">
        <RouterView />
    </div>

</template>