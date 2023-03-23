<script setup>
import { onMounted, ref } from 'vue'
import LessonDisplay from '@/components/LessonDisplay.vue'
import LessonService from '@/services/LessonService';

const props = defineProps({
    lessonId: {
        required: true
    }
})

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


</script>

<template>
    <div v-if="lessons && course">
        <LessonDisplay :lessonId="props.lessonId" :lesson="lessons[props.lessonId]" :course="course"/>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<style scoped>
</style>

