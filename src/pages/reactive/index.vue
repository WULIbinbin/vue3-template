<template>
  <div>
    <h2 class="title">响应式示例</h2>
    <FormItem title="使用ref：">
      <Input @input="handleChangeRef" />
    </FormItem>
    <FormItem title="使用reactive：">
      <Input @input="handleChangeRec" />
    </FormItem>
    <FormItem title="使用readonly：">
      <Input @input="handleChangeReadonly" />
    </FormItem>
    <div>
      <p class="reactive-msg">结果</p>
      <p class="reactive-msg">使用ref：{{ input }}</p>
      <p class="reactive-msg">使用reactive：{{ state.input }}</p>
      <p class="reactive-msg">使用readonly：{{ readonlyData.input }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, readonly, onMounted } from "vue";
import { FormItem, Input } from "@/components/index";

const input = ref("");
const handleChangeRef = (event) => {
  input.value = event.target.value;
};
const state = reactive({
  input: "",
});
const handleChangeRec = (event) => {
  state.input = event.target.value;
};
const readonlyData = readonly(
  reactive({
    input: "输入也没用",
  })
);
const handleChangeReadonly = (event) => {
  readonlyData.input = event.target.value;
};
onMounted(() => {});
</script>
<style lang="less" scoped>
.reactive-msg {
  padding: 12px 32px;
  font-size: 28px;
}
</style>