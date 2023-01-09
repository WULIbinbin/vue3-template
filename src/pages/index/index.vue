<template>
  <div class="index-body">
    <router-link
      class="index-enter"
      v-for="item in navigate"
      :key="item.path"
      :to="item.path"
      >{{ item.title }}</router-link
    >
  </div>
</template>
<script setup lang="ts">
import { readonly } from "vue";

const navigate = readonly([
  { path: "/reactive", title: "响应式示例" },
  { path: "/button", title: "按钮-button" },
  { path: "/fab", title: "悬浮按钮-fab" },
  { path: "/mall", title: "商城示例" },
]);
</script>
<style lang="less" scoped>
.index {
  &-body {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin: 32px 0;
  }
  &-enter {
    font-size: 32px;
    padding-left: 32px;
  }
}
</style>