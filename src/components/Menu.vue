<template>
  <div>
    <div class="music-menu">
      <div
        v-on:click="MenuActive(item)"
        v-for="item in menuTitle"
        :key="item.id"
        class="menu-list"
        v-bind:class="{'menu-active':item.id===menuActive}"
        :to="item.path"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "music-menu",
  props: {},
  data() {
    return {
      menuActive: 1,
      menuTitle: [
        {
          name: "个性推荐",
          id: 1,
          path: "/home/recommend"
        },
        {
          name: "我的",
          id: 2,
          path: "/home/mine"
        },
        {
          name: "排行榜",
          id: 3,
          path: "/home/ranking"
        }
      ]
    };
  },
  created() {},
  methods: {
    MenuActive: function(res) {
      this.menuActive = res.id;
      this.$router.push(res.path)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.music-menu {
  display: flex;
  .menu-list {
    flex-grow: 1;
    font-size: 12px;
    width: 33%;
    height: 40px;
    line-height: 40px;
  }
  .menu-active {
    color:#df2d2d;
    border-bottom: 2px solid #df2d2d;
  }
}
</style>
