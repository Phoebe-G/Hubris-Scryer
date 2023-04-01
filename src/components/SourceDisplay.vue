<script setup>
import { ref, onMounted } from 'vue'
import GithubService from "@/services/GithubService"

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
})

const getContent = () => { atob(props.node.content) };

const decode = (str) => { return atob(str) }

</script>

<template>
  <div v-if="props.node !== null">
    <div>
      {{ decode(props.node.content) }}
    </div>
  </div>
  <div v-else>
    nadda
  </div>
</template>

<style scoped>
</style>