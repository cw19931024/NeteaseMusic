<template>
  <div class="login">
    <div class="login-logo">
      <img class="logo" src="../assets/logo.jpg">
      <p>{{msg}}</p>
    </div>
    <div class="login-content">
      <input type="text" v-model="data.email" placeholder="请输入邮箱">
      <input type="password" v-model="data.password" placeholder="请输入密码">
      <button v-on:click="this.login">登录</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      msg: "网易云音乐",
      data: {}
    };
  },
  methods: {
    login: function() {
      axios
        .get("http://localhost:3000/login", {
          params: this.data
        })
        .then(res => {
          if (res.data.code == 200) {
            localStorage.setItem('user',JSON.stringify(res.data))
            this.$root.Bus.$emit('loginStatus',false)
            this.$router.push('home')
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  background: url("../assets/bg.jpg") no-repeat;
  background-size: 100%;
  background-position: top;
  color: white;
  font-size: 14px;
  .login-logo {
    text-align: center;
    .logo {
      width: 108px;
    }
  }
  .login-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      height: 30px;
      width: calc(~"70% - 20px");
      margin-bottom: 10px;
      padding: 0 10px;
    }
    button {
      width: 72%;
      display: block;
      margin-top: 10px;
      text-decoration: none;
      color: white;
      font-size: 14px;
      background: #d43c32;
      height: 30px;
      border-radius: 5px;
      font-family: cursive;
      font-weight: bold;
      border: 1px solid white;
    }
  }
}
</style>

