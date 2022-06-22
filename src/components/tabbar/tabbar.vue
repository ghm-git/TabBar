<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["message"]
};
/* eslint-enable */
</script>

<style>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -2px 2px 2px rgba(200, 200, 200, 0.2);
}
</style>
