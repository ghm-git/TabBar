<template>
  <div class="tabbar-item">
    <slot v-if="!isActive" name="tabbar-item-icon"></slot>
    <slot v-else name="tabbar-item-icon-active"></slot>
    <slot name="tabbar-item-text"></slot>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
  </div>
  <!-- <div class="tabbar-item">
      <img src="../../assets/img/tabbar/category.svg" alt="" />
      <div>分类</div>
    </div>
    <div class="tabbar-item">
      <img src="../../assets/img/tabbar/shopcart.svg" alt="" />
      <div>购物车</div>
    </div>
    <div class="tabbar-item">
      <img src="../../assets/img/tabbar/profile.svg" alt="" />
      <div>我的</div>
    </div> -->
</template>

<script>
export default {};
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-bottom: 0px;
}
</style>
