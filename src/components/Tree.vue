<template>
  <div class="tree">1</div>
</template>

<script>
export default {
  name: "music-menu",
  props: {
    TreeList: {
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$props)
  },
  watch: {
    TreeList: {
      handler(newValue, value) {
        console.log("旧值:" + value);
        console.log("新值:" + newValue);
      }
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tree {
}
</style>
