<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from "./components/tabbar/mainTabbar.vue";
export default {
  name: "App",
  components: {
    mainTabbar
  }
};
</script>

<style>
@import "./assets/css/normalize.css"; /*第三方初始化*/
@import "./assets/css/base.css"; /*公共样式*/
.active {
  color: red;
}
</style>
