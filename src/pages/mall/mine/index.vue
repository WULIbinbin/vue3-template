<template>
  <div>
    <t-cell-group>
      <t-cell :title="user.info?.name" description="" :right-icon="chevronRightIcon">
        <template #leftIcon>
          <t-avatar shape="circle" :image="user.info?.avatar" />
        </template>
      </t-cell>
    </t-cell-group>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive,h } from "vue";
import { ChevronRightIcon } from 'tdesign-icons-vue-next';
import useRequest from "@/hooks/useRequest";
import { getUserInfo } from "@/api/account";

const chevronRightIcon = () => h(ChevronRightIcon);

const user = reactive({
  info: {},
});

onMounted(() => {
  const { data } = useRequest(getUserInfo, {
    defaultParams: [
      {
        id: 2333,
      },
    ],
  });
  
  user.info = data;
  console.log(user)
});
</script>
<style lang="less" scoped>
</style>