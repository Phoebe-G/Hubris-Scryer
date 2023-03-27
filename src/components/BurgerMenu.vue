<script setup>
import { ref, onMounted, VueElement } from 'vue'
import LessonService from "@/services/LessonService"

const expanded = ref(false)
const course = ref(null)
const lessons = ref(null)


onMounted(() => {

  LessonService.getLessons()
  .then((response) => {
    lessons.value = response
  })


  LessonService.getCourse()
  .then((response) => {
    course.value = response
  })
})


var onClick = () => {
    expanded.value = !expanded.value
}
var onDismiss = () => {
    expanded.value = false
}


</script>

<template>
    <div v-if="course && lessons">
        <div @click="onDismiss" v-if="expanded" class="burger-menu"></div>
        <img @click="onClick" class="burger-menu-button" src="@/assets/images/Hamburger_icon.svg">
        <div v-if="expanded" class="burger-menu-contents">
            <h4>{{ course.title }}</h4>
            <ul>            
                <li v-for="(lesson, index) in lessons">
                    <router-link @click="onDismiss" :to="{ name: 'lesson-view', params: { lessonId: index } }">
                        {{ lesson.name }}
                    </router-link>
                </li>
            </ul>
            <h5>Course content <br/> Ⓒ <a :href="course.website" target="_blank">{{ course.provider }}</a></h5>
        </div>
    </div>

</template>

<style scoped>
.burger-menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
img.burger-menu-button {
    max-width: 42px;
    margin: 0;
    padding: 24;
    border: none;
    box-shadow: none;
    cursor: pointer;
}

img.burger-menu-button:hover {
    /* chill */
}

.burger-menu-contents {
    position: absolute;
    top: 60px;
    max-width: 20vw;
    max-height: 50vh;
    overflow-y: auto;

    border: 1px solid #333;
    padding: 4px;
    box-shadow: rgba(0,0,0, 30%) 8px 8px 5px;
    background-color: white;

    text-decoration: none;
}

.burger-menu-contents ul,
.burger-menu-contents li {
    padding-left: 0;
}

.burger-menu-contents li:hover {
    cursor: pointer;
    color:rgb(0, 198, 152)
}

</style>