<template>
  <div>
    mine
    <p>{{ user.info?.name }}</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import useRequest from "@/hooks/useRequest";
import { getUserInfo } from "@/api/account";

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
});
</script>
<style lang="less" scoped>
</style>