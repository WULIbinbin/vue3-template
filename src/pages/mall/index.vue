<template>
  <div class="mall-container">
    <div class="mall-body">
      <router-view></router-view>
    </div>
    <t-tab-bar v-model="current" @change="tabChange">
      <t-tab-bar-item
        v-for="(item, i) in navigate"
        :key="item.name || i"
        :value="item.name"
      >
        {{ item.text }}
        <template #icon>
          <icon :name="item.icon" />
        </template>
      </t-tab-bar-item>
    </t-tab-bar>
  </div>
</template>
<script setup lang="ts">
import { readonly, ref } from "vue";
import { Icon } from "tdesign-icons-vue-next";
import { useRouter } from "vue-router";
import { navigateConfig } from "./config";

const navigate = readonly(navigateConfig);
const current = ref<string>("home");
const router = useRouter();
const tabChange = (target: string) => {
  current.value = target;
  router.replace(navigateConfig.find((f) => f.name === target)?.path || "");
};
</script>
<style lang="less" scoped>
</style>