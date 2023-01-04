<script setup lang="ts">
import { readonly } from "vue";

const navigate = readonly([
  { path: "/index", title: "响应式示例" },
]);
</script>
<template>
  <div>
    <router-link
      v-for="item in navigate"
      :key="item.path"
      :to="item.path"
    >{{item.title}}</router-link>
  </div>
</template>