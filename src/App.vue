<template>
  <div id="app">
    <tabbar>
      <tabbar-item>
        <div v-if="!isActive" slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/home.svg" alt="" />
        </div>
        <div v-else slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/home_active.svg" alt="" />
        </div>
        <div :class="{ active: isActive }" slot="tabbar-item-text">
          <div>首页</div>
        </div>
      </tabbar-item>

      <tabbar-item>
        <div v-if="!isActive" slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/category.svg" alt="" />
        </div>
        <div v-else slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/category_active.svg" alt="" />
        </div>
        <div :class="{ active: isActive }" slot="tabbar-item-text">
          <div>分类</div>
        </div>
      </tabbar-item>

      <tabbar-item>
        <div v-if="!isActive" slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/shopcart.svg" alt="" />
        </div>
        <div v-else slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/shopcart_active.svg" alt="" />
        </div>
        <div :class="{ active: isActive }" slot="tabbar-item-text">
          <div>购物车</div>
        </div>
      </tabbar-item>

      <tabbar-item>
        <div v-if="!isActive" slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/profile.svg" alt="" />
        </div>
        <div v-else slot="tabbar-item-icon">
          <img src="./assets/img/tabbar/profile_active.svg" alt="" />
        </div>
        <div :class="{ active: isActive }" slot="tabbar-item-text">
          <div>首页</div>
        </div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar/tabbar.vue";
import tabbarItem from "./components/tabbar/tabbarItem.vue";
export default {
  name: "App",
  components: {
    tabbar,
    tabbarItem
  },
  data() {
    return {
      isActive: true
    };
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
