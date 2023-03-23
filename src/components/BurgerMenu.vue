<script setup>
import { ref, onMounted } from 'vue'

const expanded = ref(false)

defineProps({
    course: {
        required: true
    },
    lessons:
    {
        type: Array,
        required: true
    }
})

var onClick = () => {
    expanded.value = !expanded.value
}

</script>

<template>

<img @click="onClick" class="burger-menu-button" src="@/assets/images/Hamburger_icon.svg">
<div v-if="expanded" class="burger-menu-contents">
    <h4>{{ course.title }}</h4>
    <ul>            
        <li @click="onLessonSelect(lesson)" v-for="(lesson, index) in lessons" :key="index">
            {{ lesson.name }}
        </li>
    </ul>
    <h5>Course content <br/> Ⓒ <a :href="course.website" target="_blank">{{ course.provider }}</a></h5>
</div>

</template>

<style scoped>
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