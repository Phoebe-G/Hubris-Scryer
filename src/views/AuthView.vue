<script setup>
import { onMounted } from 'vue'
import GithubService from "@/services/GithubService"

const props = defineProps({
    code: {
        type: String,
        required: true
    }
})


onMounted(() => {
    GithubService.setOAuthCode(props.code);
})

</script>

<template>
    <div class="preamble">
        <h3>Successful Authentication</h3>
        <p>Thank you for authenticating. We should be able to continue exploring the code without API rate limits now.</p>
    </div>
</template>

<style scoped>
</style>

<!-- <lesson-display v-else :course="course" :lesson="this.selectedLesson" ></lesson-display> -->