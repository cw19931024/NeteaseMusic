<template>
  <div class="music-header">
    <div class="music-flex">
      <div class="music-logo">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <span class="music-name">网易云音乐</span>
    </div>
    <router-link v-if="status" class="login-btn" to="/login">登录</router-link>
  </div>
</template>

<script>
export default {
  name: "music-header",
  props: {
    msg: String
  },
  data() {
    return {
        status:localStorage.getItem('user')==null?true:false,
    }
  },
  created() {
    this.$root.Bus.$on('loginStatus',value =>{
      this.status = value;
      console.log(this)
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.music-header {
  background: #d43c33;
  height: 64px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  .music-flex {
    display: flex;
    width: 120px;
    .music-name {
      font-size: 16px;
      color: white;
      font-weight: bold;
    }
    .music-logo {
      width: 24px;
      height: 24px;
      background: white;
      border-radius: 5px;
      margin-right: 5px;
      img {
        width: 100%;
      }
    }
  }
  .login-btn {
    width: 80px;
    display: block;
    text-decoration: none;
    color: white;
    font-size: 14px;
    background: #d43c32;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    font-family: cursive;
    font-weight: bold;
    border: 1px solid white;
  }
}
</style>
