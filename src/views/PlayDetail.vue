<template>
  <div class="PlayDetail">
    <div class="play-top">
      <i class="fa fa-chevron-left"/>
      <div>{{playItem.name}}</div>
      <i class="fa fa-search"/>
    </div>
    <div class="play-title">
      <div class="title-image">
        <img :src="playItem.coverImgUrl" alt srcset>
      </div>
      <div class="title-name">
        <div class="playName">{{playItem.name}}</div>
        <div class="PlayUser">
          <img :src="playItem.creator.avatarUrl" width="100">
          <span>{{playItem.creator.nickname}}</span>
        </div>
      </div>
    </div>
    <div class="play-list">
      <div class="play-music" @click="getMusic(item)" :key="item.id" v-for="(item,index) in this.playItem.tracks">
        <div class="music-sort">{{index}}</div>
        <div class="music-lyout">
          <div class="music-name">{{item.name}}</div>
          <div class="music-al">
            <span v-for="ar in item.ar" :key="ar.id">{{ar.name}}</span>
            {{item.al.name}}
          </div>
        </div>
        <i class="fa fa-play-circle"/>
      </div>
    </div>
    <play-music v-if="music.id" v-bind:music="this.music" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import PlayMusic from "../components/PlayMusic";
export default {
  name: "PlayDetail",
  data() {
    return {
      id: "",
      playItem: {
        creator:{}
      },
      music:{}
    };
  },
  components: {
    PlayMusic
  },
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
  },
  methods:{
    getMusic:function(item){
      this.music = item
    }
  }
};
</script>
<style lang="less" scoped>
.PlayDetail {
  width: 100%;
  margin-top: -64px;
  background: currentColor;
  text-align: left;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  .play-top {
    height: 50px;
    color: white;
    padding:0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .fa{
      font-size: 20px;
    }
  }
  .play-title {
    padding:0 10px;
    padding-bottom: 10px;
    display: flex;
    color: white;
    .title-image {
      width: 100px;
      border-radius: 5px;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
    .title-name {
      .playName {
        font-size: 16px;
        font-weight: bold;
      }
      .PlayUser {
        display: flex;
        width: 100px;
        height: 30px;
        justify-items: center;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
  }
  .play-list {
    padding:0 10px;
    border-top: 1px solid white;
    background: white;
    height: calc(~"100% - 164px");
    overflow: auto;
    .play-music {
      flex-direction: row;
      display: flex;
      align-items: center;
      padding: 5px 0;
      margin-bottom: 5px;
      .fa{
        font-size: 20px;
      }
      .music-sort {
        font-size: 14px;
        margin-right: 10px;
        text-align: right;
        width: 25px;
      }
      .music-lyout {
        width: 100%;
        .music-name {
          font-size: 14px;
        }
        .music-al {
        }
      }
    }
  }
}
</style>
