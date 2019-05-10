<template>
  <div class="music-content">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "music-content",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.music-content {
  display: flex;
  height: calc(100% - 64px);
}
</style>
