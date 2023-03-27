<script setup>
import { ref, onMounted } from 'vue'
import GithubService from "@/services/GithubService"

const PRJ_ROOT="https://api.github.com/repos/Phoebe-G/Intro-to-Vue-3"
const PRJ_LEN=PRJ_ROOT.length


const props = defineProps({
  node: {
    type: Object,
    required: true
  }
})

//const tree = ref(null)

const children = ref(null)
const collapsed = ref(true)

onMounted(() => {""

})

const testClick = () => {
  if(props.node.type == 'tree') {
    
    if(children.value == null) {
      GithubService.getTree(props.node.url.substr(PRJ_LEN))
      .then((response) => {
        console.log(response)
        children.value = response.data.tree
        collapsed.value = false;
      })
    } else {
      collapsed.value = !collapsed.value;
    }

  } else {
    console.log("Get and display blob", props.node.blob)
  }
}

</script>

<template>
    <li @click="testClick">
        <i v-if="node.type=='tree'" :class="{ 'fa fa-folder-o': collapsed, 'fa fa-folder-open-o': !collapsed }" aria-hidden="true"></i>  
        <!--<router-link v-else @click="onDismiss" :to="{ name: 'file-view', params: { node: node } }">-->
        <i class="fa fa-file-code-o" aria-hidden="true"></i> {{ node.path }}
        <!-- </router-link>-->
    </li>
    <ul v-if="children" v-show="!collapsed">
      <SourceTreeNode v-for="c in children" :node="c"></SourceTreeNode>
    </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}
ul {
  padding-left: 16px;
}
</style>