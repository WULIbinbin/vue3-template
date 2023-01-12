<template>
  <div>mine</div>
</template>
<script setup lang="ts">
import { onMounted, readonly, ref } from "vue";
import useRequest from "@/hooks/useRequest";
import { getUserInfo } from "@/api/account";

const userInfo = () => {
  const { data } = useRequest(getUserInfo, {
    params: {
      id: 2333,
    },
  });

  console.log(data, 1);
};

onMounted(() => {
  userInfo();
});
</script>
<style lang="less" scoped>
</style>