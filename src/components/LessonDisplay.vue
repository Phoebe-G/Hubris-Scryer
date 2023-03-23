<script setup>
import LessonDisplay from '@/components/LessonDisplay.vue'
import MyCode from '@/components/MyCode.vue'

const props = defineProps({
  course: {
    type: Object,
    required: true
  },
  lesson: {
    type: undefined,
    required: true
  },
  lessonId: {
    required: true
  }
})

</script>

<template>
  <div v-if="props.lessonId" class="lesson-container">
    <h5>{{course.provider}}</h5>
    <h3>{{course.title}} - {{props.lesson.name}}</h3>
    <h5>My summary:</h5>
    <p>{{lesson.summary}}</p>
    <div v-if="lesson.code">
      <p>Official provided solution files on the left. My solution files on the right.</p>
      <MyCode :branch_id="lesson.my_url" />
    </div>
  </div>
</template>
