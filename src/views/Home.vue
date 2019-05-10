<template>
  <div class="home">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Tree from "@/components/Tree.vue";
import axios from 'axios'
export default {
  name: "home",
  data(){
    return{
      list:'msg'
    }
  },
  components: {
    Menu,
    Tree
  },
  created() {
    axios.get(' https://www.easy-mock.com/mock/59ef228694bcf16c5f9f7b4f/test/list').then((res)=>{
      this.list1 = res.data.data
    })
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
}
</style>
