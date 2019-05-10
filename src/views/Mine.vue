<template>
  <div class="Mine-lyout">
    <div class="mine-content" v-on:click="playDetail(item)" v-for="item in playlist" :key='item.id'>{{item.name}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Mine",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      MenuList: [],
      playlist:[]
    };
  },
  components: {},
  created() {
    axios
      .get("http://localhost:3000/user/playlist", {
        params: {
          uid: this.user.profile.userId
        }
      })
      .then(res => {
        this.playlist = res.data.playlist
      });
    axios
      .get("http://localhost:3000/user/dj", {
        params: {
          uid: this.user.profile.userId
        }
      })
      .then(res => {
        console.log(res.data);
      });
  },
  methods: {
    playDetail:function(item) {
      this.$router.push('/playDetail/'+item.id)
    }
  },
};
</script>
<style lang="less" scoped>
.Mine-lyout {
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  border-top: 1px solid #ddd;
  .mine-content {
    height: 40px;
    border-bottom: 1px solid #ddd;
    line-height: 40px;
    text-align: left;
    padding: 0 10px;
  }
}
</style>
