<script setup>
import { ref, onMounted, VueElement } from 'vue'
import GithubService from "@/services/GithubService"
import SourceTree from "@/components/SourceTree.vue"
import SourceDisplay from "@/components/SourceDisplay.vue"

const props = defineProps({
    branch_id: {
        type: String,
        required: true
    }
  }
)

const tree = ref(null)
const nodeSelected = ref(null)
const selectedContent = ref(null)


onMounted(() => {
  GithubService.getBranch(props.branch_id)
  .then((response) => {
    console.log("Branch query response!", response.data.commit.tree.url)
    tree.value = response.data.commit.tree.url;
  })
})

const selectNode = (node) => {
    console.log("node selected!", node);
    selectedContent.value = node.content.toString(node.encoding)
    nodeSelected.value = node
}


</script>

<template>
    <div class="code-container">
        <div class="source-tree"><SourceTree v-if="tree" :treeUri="tree" :selectNode="selectNode"></SourceTree></div>
        <div class="source-code"><SourceDisplay v-if="nodeSelected != null" :node="nodeSelected" :content="selectedContent"></SourceDisplay></div>
    </div>
</template>

<style scoped>
.code-container {
    border: 1px solid rgb(34, 75, 101);
    display: flex;
    flex-direction: row;
}

.source-tree {
    flex: 0 0 auto;
    width: 30%;
}

.source-code {
    flex: 1 1 auto;
    width: 100%;
}

ul {
    margin: 0;
}

li {
    margin: 0;
}

</style>