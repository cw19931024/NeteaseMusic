<template>
  <div class="PlayDetail">
    <div class="play-top">歌单</div>
    <div class="play-title">
      <div class="title-image">
        <img :src="playItem.coverImgUrl" alt srcset>
      </div>
      <div class="title-name">
        {{playItem.name}}
        <div>
          <img :src="playItem.creator.avatarUrl" width="100" />
          {{playItem.creator.nickname}}
        </div>
      </div>
    </div>
    <div class="play-list"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "PlayDetail",
  data() {
    return {
      id: "",
      playItem: {}
    };
  },
  components: {},
  created() {
    this.id = this.$route.params.id;
    axios
      .get("http://localhost:3000/playlist/detail", {
        params: {
          id: this.id
        }
      })
      .then(res => {
        this.playItem = res.data.playlist;
        console.log(this.playItem);
      });
  }
};
</script>
<style lang="less" scoped>
.PlayDetail {
  width: 100%;
  margin-top: -64px;
  background: white;
  text-align: left;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .play-top {
    border-bottom: 1px solid #ddd;
    height: 40px;
  }
  .play-title{
    display:flex;
    .title-image {
      width: 100px;
      border-radius: 5px;
      img {
        width: 100%;
      }
    }
  }
  .play-list {
  }
}
</style>
