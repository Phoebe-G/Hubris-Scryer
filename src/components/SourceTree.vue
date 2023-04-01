<script setup>
import { ref, onMounted } from 'vue'
import GithubService from "@/services/GithubService"
import SourceTreeNode from "@/components/SourceTreeNode.vue"


const PRJ_ROOT="https://api.github.com/repos/Phoebe-G/Intro-to-Vue-3"
const PRJ_LEN=PRJ_ROOT.length

const props = defineProps({
  treeUri: {
    type: String,
    required: true
  },
  selectNode: {
    type: Function,
    required: true
  }
})

const tree = ref(null)

onMounted(() => {

    GithubService.getTree(props.treeUri.substr(PRJ_LEN))
    .then((response) => {
      console.log(response)
        tree.value = response.data.tree
    })
  })

  const selectNode = (node) => {
    props.selectNode(node)
  }

</script>

<template>
  <ul v-if='tree'>
    <SourceTreeNode v-for="t in tree" :node="t" :selectNode="selectNode"></SourceTreeNode>
  </ul>
</template>

<style scoped>
ul {
  padding-left: 0;
}
</style>