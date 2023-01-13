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
import { readonly, ref, onMounted } from "vue";
import { Icon } from "tdesign-icons-vue-next";
import { useRouter, useRoute } from "vue-router";
import { navigateConfig } from "./config";

const navigate = readonly(navigateConfig);
const current = ref<string>("home");
const router = useRouter();
const route = useRoute();
const tabChange = (target: string) => {
  console.log(target)
  current.value = target;
  router.replace(navigateConfig.find((f) => f.name === target)?.path || "");
};

onMounted(() => {
  const { matched } = route;
  console.log(matched,);
  const path = matched[1]?.path.slice(6)
  current.value = path
  console.log(current)
});
</script>
<style lang="less" scoped>
</style>