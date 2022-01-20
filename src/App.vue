<!--
 * @Description:
 * @Author: yuanyao7
 * @Date: 2022-01-20 09:09:42
 * @LastEditors: yuanyao7
 * @LastEditTime: 2022-01-20 17:23:47
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
#app {
  @include background_color($light_background_color);
}

img[lazy="loading"]:not(.noBgColor) {
  background-color: rgb(241, 241, 241);
}
</style>
