<template>
  <div>
    <div id="play-music">
      <div class="music-image">
        <img :src="this.music.al.picUrl" alt>
      </div>
      <div class="music-title">{{this.music.name}}</div>
      <div class="music-icon">
        <i v-bind:class="[paused?'fa-play-circle-o':'fa-pause-circle-o']" class="fa" @click="play"/>
        <i class="fa fa-bars"/>
      </div>
    </div>
    <audio ref="music" :src="url" autoplay/>
  </div>
</template>

<script>
import Axios from "axios";
import { debuglog } from "util";
export default {
  name: "PlayMusic",
  props: {
    music: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      url: "",
      paused:false,
    };
  },
  created() {},
  mounted() {
    this.getUrl();
  },
  beforeUpdate() {
    this.getUrl();
  },
  methods: {
    getUrl: function() {
      Axios.get("http://localhost:3000/song/url?id=" + this.music.id).then(
        res => {
          this.url = res.data.data[0].url;
        }
      );
    },
    play: function() {
      if (this.$refs.music.paused) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
      this.paused = this.$refs.music.paused;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#play-music {
  padding: 0 10px;
  height: 50px;
  border-top: 1px solid #ddd;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .fa {
    font-size: 20px;
  }
  .music-image {
    margin-right: 10px;
    font-size: 0;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .music-title {
    width: 100%;
  }
  .music-icon {
    width: 65px;
    .fa-bars {
      margin-left: 10px;
    }
  }
}
</style>
