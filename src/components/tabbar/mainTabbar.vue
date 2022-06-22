<template>
  <tabbar>
    <!-- <span>{{ message }}</span> -->
    <tabbar-item path="/home">
      <img
        src="../../assets/img/tabbar/home.svg"
        slot="tabbar-item-icon"
        alt=""
      />
      <img
        src="../../assets/img/tabbar/home_active.svg"
        slot="tabbar-item-icon-active"
        alt=""
      />
      <div slot="tabbar-item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img
        src="../../assets/img/tabbar/category.svg"
        slot="tabbar-item-icon"
        alt=""
      />
      <img
        src="../../assets/img/tabbar/category_active.svg"
        slot="tabbar-item-icon-active"
        alt=""
      />
      <div slot="tabbar-item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/shopcart">
      <img
        src="../../assets/img/tabbar/shopcart.svg"
        slot="tabbar-item-icon"
        alt=""
      />
      <img
        src="../../assets/img/tabbar/shopcart_active.svg"
        slot="tabbar-item-icon-active"
        alt=""
      />
      <div slot="tabbar-item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img
        src="../../assets/img/tabbar/profile.svg"
        slot="tabbar-item-icon"
        alt=""
      />
      <img
        src="../../assets/img/tabbar/profile_active.svg"
        slot="tabbar-item-icon-active"
        alt=""
      />
      <div slot="tabbar-item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import tabbar from "../../components/tabbar/tabbar.vue";
import tabbarItem from "../../components/tabbar/tabbarItem.vue";
export default {
  name: "mainTabbar",
  components: {
    tabbar,
    tabbarItem
  },
  data() {
    return {
      message: "hello world!"
    };
  }
};
</script>

<style></style>
