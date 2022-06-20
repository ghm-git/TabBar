<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tabbar-item-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props: {
    path: String
  },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    itemClick() {
      // alert(this.path);
      if (this.$route.path !== this.path) {
        this.$router.push({ path: this.path });
      }
      // this.$router.replace(this.path);
    }
  }
};
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
